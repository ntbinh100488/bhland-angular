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
            currentPageNumber: 1
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
        if(this.tablePaging.currentPageNumber === pageNumber) return;

        this.tablePaging.currentPageNumber = pageNumber;
        // 1 - 0
        // 2 - 2
        // 3 - 4
        // 4 - 6
        let skipNumber = (this.tablePaging.currentPageNumber - 1) * this.tablePaging.limit;
        this.tablePaging.skip = skipNumber;
        this.bhCoreService.getdataSourceDataAndPaging(this.entitySchema.plural, this.tablePaging, this.populateData.bind(this));
    }

    setTotalData(countDataSourceDataResult): void{
        this.totalCountData = countDataSourceDataResult.count;
        let numberPage = Math.ceil(this.totalCountData / this.tablePaging.limit);
        this.numberOfPages = Array(numberPage > tableConfigs.paging.pagingMaximumPage ? tableConfigs.paging.pagingMaximumPage : numberPage).fill().map((x,i)=>++i); // [0,1,2,3,4];
    }
}

interface TablePagingFilter{
    currentPageNumber: number;
    skip: number;
    limit: number;
}
