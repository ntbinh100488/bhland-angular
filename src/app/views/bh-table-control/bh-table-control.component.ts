import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BhCommonService } from '../../services/bh-common.service';
import { BhCoreService } from '../../services/bh-core.service';
import { BHTableColumn } from '../../interfaces/table-column-type';
import { BHControlDataSourcePaging } from '../../interfaces/select-control-type';
import { tableConfigs } from '../../contants/table-configs';

@Component({
  selector: 'app-bh-table-control',
  templateUrl: './bh-table-control.component.html',
  styleUrls: ['./bh-table-control.component.css']
})
export class BhTableControlComponent implements OnInit {

    @Input() pageSize: number;

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
        this.tablePaging = {
            limit: this.pageSize ?? tableConfigs.paging.pageSize,
            skip: 0,
        }
        this.bhCoreService.countDataSourceData(this.entitySchema.plural, this.setTotalData.bind(this));
        this.bhCoreService.getdataSourceDataAndPaging(this.entitySchema.plural, this.tablePaging, this.populateData.bind(this));
    }

    populateData(dataSourceResult: any): void{
        console.log(JSON.stringify(dataSourceResult));
        this.tableData = dataSourceResult;
    }

    populateColumnData(tableDataItem: any, tableDataColumnItem: BHTableColumn): any{
        return tableDataItem[tableDataColumnItem.columnName];
    }

    rePaging(event: any, pageNumber: number): void{
        console.log(pageNumber);
        if(this.currentPageNumber === pageNumber || pageNumber > this.lastPageNumber) return;

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
    }

    setNumberOfPages(){
        if(this.currentPageNumber < tableConfigs.paging.pagingMinimumPageNextTo){
            this.numberOfPages = this.bhCommonService.createArrayNumberFromRange(1, this.currentPageNumber + tableConfigs.paging.pagingMinimumPageNextTo);
        }else if(this.currentPageNumber > (this.lastPageNumber - tableConfigs.paging.pagingMinimumPageNextTo)){
            this.numberOfPages = this.bhCommonService.createArrayNumberFromRange(this.lastPageNumber - tableConfigs.paging.pagingMinimumPageNextTo, this.lastPageNumber);
        }else{
            this.numberOfPages = this.bhCommonService.createArrayNumberFromRange(this.currentPageNumber - tableConfigs.paging.pagingMinimumPageNextTo, this.currentPageNumber + tableConfigs.paging.pagingMinimumPageNextTo);
        }
    }

    selectTableDataRecord(tableDataItem: any, tableDataItemIndex: number):void{
        if(this.selectedRecordIndex === tableDataItemIndex){
            this.selectedRecord = undefined;
            this.selectedRecordIndex = undefined;
            return;
        }
         
        this.selectedRecord = tableDataItem;
        this.selectedRecordIndex = tableDataItemIndex;
    }

    createEnity(): void{
        console.log('createEnity');
        // navigate to form
    }

    editEntity(tableDataItem: any): void{
        console.log('editEntity');
        // navigate to form with the ID
        // ?id=1
    }

    deleteEntity(tableDataItem: any): void{
        console.log('deleteEntity');
        // show modal confirm

        // make a delete request

        // remove local record 
    }
}

interface TablePagingFilter{
    skip: number;
    limit: number;
}
