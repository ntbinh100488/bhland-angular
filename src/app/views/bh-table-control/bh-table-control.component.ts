import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BhCommonService } from '../../services/bh-common.service';
import { BhCoreService } from '../../services/bh-core.service';
import { BHTableColumn } from '../../interfaces/table-column-type';
import { BHControlDataSourcePaging } from '../../interfaces/select-control-type';
import { tableConfigs } from '../../contants/table-configs';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
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
        this.tableColumns = this.entitySchemaProperties.map(esps => {
            return {
                columnName: esps.name,
                columnDisplayName: esps.displayName,
                sequenceNumber: esps.sequenceNumber,
                columnType: esps.type
            }
        });
        this.tableColumns.sort((a, b) => (a.sequenceNumber > b.sequenceNumber) ? 1 : -1);
        this.pageSize = this.pageSize ?? tableConfigs.paging.pageSize;
        this.tablePaging = {
            limit: this.pageSize,
            skip: 0,
        }
        this.bhCoreService.countDataSourceData(this.entitySchema.plural, this.setTotalData.bind(this));
        this.bhCoreService.getdataSourceDataAndPaging(this.entitySchema.plural, this.tablePaging, this.populateData.bind(this));
    }

    populateData(dataSourceResult: any): void{
        // console.log(JSON.stringify(dataSourceResult));
        this.tableData = dataSourceResult;
    }

    populateColumnData(tableDataItem: any, tableDataColumnItem: BHTableColumn): any{
        return tableDataItem[tableDataColumnItem.columnName];
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
        if(this.currentPageNumber > this.lastPageNumber){
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
