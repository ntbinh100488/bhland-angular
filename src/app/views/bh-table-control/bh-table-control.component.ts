import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BhCommonService } from '../../services/bh-common.service';
import { BhCoreService } from '../../services/bh-core.service';
import { BHTableColumn } from '../../interfaces/table-column-type';
import { tableConfigs } from '../../contants/table-configs';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
import { formControlTypes } from '../../contants/form-control-types';
declare var $: any;

@Component({
  selector: 'app-bh-table-control',
  templateUrl: './bh-table-control.component.html',
  styleUrls: ['./bh-table-control.component.css']
})
export class BhTableControlComponent implements OnInit {

    @Input() pageSize: number;
    @ViewChild('formBuilder') formBuilder: FormBuilderComponent;

    entitySchemaProperties: any[] = [];
    entitySchema: any;
    entitySchemaName: string;

    public tableColumns: BHTableColumn[];
    public tableData: any[];
    public tablePaging: TablePagingFilter;
    public totalCountData: number;
    public numberOfPages: number[];
    public currentPageNumber: number = 1;
    public prevPageNumber: number = 1;
    public nextPageNumber: number = 2;
    public lastPageNumber: number = 0;
    public selectedRecord: any;
    public selectedRecordIndex: number;
    public fkDataSources: FkDataSource[] = [];

    constructor(
        private router: Router,
        private bhCommonService: BhCommonService,
        private bhCoreService: BhCoreService
    ) {}

    ngOnInit(): void {
        let href = this.router.url;   // this.router.url = '/note'
        let schemaName = this.bhCommonService.routeUrlToSchemaName(href);
        this.entitySchema = this.bhCoreService.getEntitySchema(schemaName);
        this.entitySchemaName = this.entitySchema.name;
        this.entitySchemaProperties = this.entitySchema.properties;
        
        // FK
        let fkEntitySchemas = this.entitySchemaProperties.filter(function(entitySchema) {
            return entitySchema.dataSource !== undefined;
        });
        fkEntitySchemas.forEach(fkEntitySchemaItem => {
            this.bhCoreService.getdataSourceData(fkEntitySchemaItem.dataSource.entityPluralName, undefined, this.pushFkDataSources.bind(this, fkEntitySchemaItem.dataSource.entityPluralName));
        });
        
        this.entitySchemaProperties.sort((a, b) => (a.sequenceNumber > b.sequenceNumber) ? 1 : -1);

        this.pageSize = this.pageSize ?? tableConfigs.paging.pageSize;
        this.tablePaging = {
            limit: this.pageSize,
            skip: 0,
        }
        this.bhCoreService.countDataSourceData(this.entitySchema.plural, this.setTotalData.bind(this));
        this.bhCoreService.getdataSourceDataAndPaging(this.entitySchema.plural, this.tablePaging, this.populateData.bind(this));
    }

    pushFkDataSources(entitySchemaPluralName:string, dataResponse:any):void{
        this.fkDataSources.push({
            name: entitySchemaPluralName,
            data: dataResponse
        });
    }

    populateData(dataSourceResult: any): void{
        this.tableData = dataSourceResult;
    }

    populateColumnData(tableDataItem: any, tableDataColumnItem: any): any{
        if(tableDataColumnItem.dataSource && (tableDataColumnItem.type === formControlTypes.selectList || tableDataColumnItem.type === formControlTypes.radioList)){
            let idValue = tableDataItem[tableDataColumnItem.name];
            if(!this.fkDataSources) return;

            let fkColumnDs = this.fkDataSources.find(ds => ds.name === tableDataColumnItem.dataSource.entityPluralName);
            if(fkColumnDs){
                let dataItem = fkColumnDs.data.find(dI => dI.id === idValue);
                return dataItem[tableDataColumnItem.dataSource.displayFieldName];
            }
        }

        return tableDataItem[tableDataColumnItem.name];
    }

    rePaging(event: any, pageNumber: number): void{
        console.log(pageNumber);
        if(this.currentPageNumber === pageNumber || pageNumber > this.lastPageNumber) return;

        this.clearSelectedRecord();
        this.currentPageNumber = pageNumber;
        this.prevPageNumber = this.currentPageNumber === 1 ? 1 : (this.currentPageNumber - 1);
        this.nextPageNumber = this.currentPageNumber + 1;
        this.setNumberOfPages();

        let skipNumber = (this.currentPageNumber - 1) * this.tablePaging.limit;
        this.tablePaging.skip = skipNumber;
        this.bhCoreService.getdataSourceDataAndPaging(this.entitySchema.plural, this.tablePaging, this.populateData.bind(this));
    }

    setTotalData(countDataSourceDataResult: { count: number; }): void{
        this.totalCountData = countDataSourceDataResult.count;
        let numberPage = Math.ceil(this.totalCountData / this.tablePaging.limit);
        this.lastPageNumber = numberPage > tableConfigs.paging.pagingMaximumPage 
            ? tableConfigs.paging.pagingMaximumPage 
            : numberPage;
        
        this.setNumberOfPages();
        if(this.currentPageNumber > this.lastPageNumber && this.currentPageNumber > 1){
            this.rePaging(undefined, this.lastPageNumber);
        }
    }

    setNumberOfPages(){
        let rightNextTo = this.currentPageNumber + tableConfigs.paging.pagingMinimumPageNextTo;
        let leftLastPageTo = this.lastPageNumber - tableConfigs.paging.pagingMinimumPageNextTo;

        if(this.currentPageNumber < tableConfigs.paging.pagingMinimumPageNextTo){
            let lastPageNumberNextTo = rightNextTo;
            this.numberOfPages = this.bhCommonService.createArrayNumberFromRange(1, 
                this.lastPageNumber <= lastPageNumberNextTo 
                    ? this.lastPageNumber 
                    : lastPageNumberNextTo);

        }else if(this.currentPageNumber > leftLastPageTo){
            let fromPageNumber = leftLastPageTo < 1 
                ? 1 
                : (leftLastPageTo < this.currentPageNumber) ? leftLastPageTo : this.currentPageNumber;
            this.numberOfPages = this.bhCommonService.createArrayNumberFromRange(fromPageNumber, this.lastPageNumber);
        }else{
            let leftNextTo = this.currentPageNumber - tableConfigs.paging.pagingMinimumPageNextTo;
            let fromPageNumber = leftNextTo < 1 ? 1 : leftNextTo;
            let toPageNumber = rightNextTo > this.lastPageNumber ? this.lastPageNumber : rightNextTo;
            this.numberOfPages = this.bhCommonService.createArrayNumberFromRange(fromPageNumber, toPageNumber);
        }
    }

    selectTableDataRecord(tableDataItem: any, tableDataItemIndex: number):void{
        if(this.selectedRecordIndex === tableDataItemIndex){
            this.clearSelectedRecord();
            return;
        }
        this.selectedRecord = tableDataItem;
        this.selectedRecordIndex = tableDataItemIndex;
    }

    clearSelectedRecord():void{
        this.selectedRecord = undefined;
        this.selectedRecordIndex = undefined;
    }

    createEnity(): void{
        console.log('createEnity');
        this.formBuilder.initForm(undefined, undefined);
        this.showModal();
    }

    editEntity(): void{
        console.log('editEntity');
        this.formBuilder.initForm(this.selectedRecord?.id, this.showModal);
    }

    deleteEntity(): void{
        console.log('deleteEntity');
        // make a delete request
        this.bhCoreService.submitDeleteForm(this.entitySchema.plural, this.selectedRecord.id, this.deletedCallback.bind(this));
        // remove local record 
    }

    showModal():void {
        $("#entityDataModal").modal('show');
    }
    hideModal(fromChild: any):void {
        $("#entityDataModal").modal('hide');
        // $("#entityDataModal").modal("dispose");
        this.clearSelectedRecord();
    }
    showDeleteModal():void {
        $("#deleteEntityDataModal").modal('show');
    }
    hideDeleteModal():void {
        $("#deleteEntityDataModal").modal('hide');
    }

    createdCallback(createdEntity: any): void{
        console.log('createdCallback');
        if(this.tableData.length < this.pageSize){
            this.tableData.push(createdEntity);
        }
        this.bhCoreService.countDataSourceData(this.entitySchema.plural, this.setTotalData.bind(this));
    }
    editedCallback(editedEntity: any): void{
        console.log('editedEntity');
        const editedEntityIndex = this.tableData.findIndex((obj => obj.id === editedEntity.id));
        if(editedEntityIndex > -1){
            this.tableData[editedEntityIndex] = editedEntity;
        }
    }
    deletedCallback(deletedEntity: any): void{
        console.log('deletedEntity');
        if(deletedEntity.count > 0){
            const deletedEntityIndex = this.tableData.findIndex((obj => obj.id === this.selectedRecord.id));
            if(deletedEntityIndex > -1){
                this.tableData.splice(deletedEntityIndex, 1);
                this.clearSelectedRecord();
                this.bhCoreService.countDataSourceData(this.entitySchema.plural, this.setTotalData.bind(this));
            }
        }
        this.hideDeleteModal();
    }
}

interface TablePagingFilter{
    skip: number;
    limit: number;
}

interface FkDataSource{
    name: string;
    data: any[];
}