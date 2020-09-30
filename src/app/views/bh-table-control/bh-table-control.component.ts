import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BhCommonService } from '../../services/bh-common.service';
import { BhCoreService } from '../../services/bh-core.service';
import { BHTableColumn } from '../../interfaces/table-column-type';
import { tableConfigs } from '../../contants/table-configs';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
import { formControlTypes } from '../../contants/form-control-types';
import { PlacesService } from '../../services/places.service';
import { NgxSpinnerService } from "ngx-spinner";
declare var $: any;
import * as moment from 'moment';
import { dateTimeConfigs } from '../../contants/date-time';
export default moment;

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
        private bhCoreService: BhCoreService,
        private placesService: PlacesService,
        private spinner: NgxSpinnerService
    ) {}

    ngOnInit(): void {
        this.spinner.show();
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
            this.bhCoreService.getdataSourceData(fkEntitySchemaItem.dataSource.entityPluralName, undefined, this.pushFkDataSources.bind(this, fkEntitySchemaItem.name, fkEntitySchemaItem.dataSource.entityPluralName));
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

    pushFkDataSources(fieldName:string, entitySchemaPluralName:string, dataResponse:any):void{
        if(this.formBuilder.selectControls){
            let fieldSelectControl = this.formBuilder.selectControls.find(fieldControl => fieldControl.controlName === fieldName);
            if(fieldSelectControl){
                fieldSelectControl.populateData(dataResponse);
            }
        }
        
        this.fkDataSources.push({
            name: entitySchemaPluralName,
            data: dataResponse
        });
    }

    populateData(dataSourceResult: any): void{
        this.tableData = dataSourceResult;
        this.spinner.hide();
    }

    markupFormData(columnName: string, tableDataItem: any):any{
        let columnEntitySchema = this.entitySchemaProperties.find(entitySchemaItem => entitySchemaItem.name === columnName)
        if(columnEntitySchema.type != formControlTypes.dateOnly){
            return tableDataItem[columnName];
        }

        let columnDataValue = tableDataItem[columnName];
        if(columnDataValue){
            let markedUpFormData = moment(tableDataItem[columnName]).format(dateTimeConfigs.uiFormat);
            return markedUpFormData;
        }
        
        return '';
    }

    populateColumnData(tableDataItem: any, tableDataColumnItem: any): any{
        if(tableDataColumnItem.dataSource && (tableDataColumnItem.type === formControlTypes.selectList || tableDataColumnItem.type === formControlTypes.radioList)){
            let idValue = tableDataItem[tableDataColumnItem.name];
            if(!idValue || !this.fkDataSources) return;

            let fkColumnDs = this.fkDataSources.find(ds => ds.name === tableDataColumnItem.dataSource.entityPluralName);
            if(fkColumnDs){
                let dataItem = fkColumnDs.data.find(dI => dI.id === idValue);
                return dataItem[tableDataColumnItem.dataSource.displayFieldName];
            }
        }

        return this.markupFormData(tableDataColumnItem.name, tableDataItem);
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

    // getOutsideCity(){
    //     // this.placesService.getAllOutsideCityProvinces(function(cities){
    //     //     console.log(JSON.stringify(cities));
    //     // });

    //     // "province_id":"89","province_name":"Tỉnh An Giang","province_type":"Tỉnh"
    //     // this.placesService.getOutsideDistrictsByProvinceId('89', function(districts){
    //     //     console.log(JSON.stringify(districts));
    //     // });

    //     // district_id":"883","district_name":"Thành phố Long Xuyên","district_type":"Thành phố"
    //     // this.placesService.getOutsideWardByDistrictId('883', function(wards){
    //     //     console.log(JSON.stringify(wards));
    //     // });

    //     // let localCity = {
    //     //     name: 'Tỉnh An Giang',
    //     //     cityType: 'Tỉnh'
    //     // }
    //     // this.placesService.createLocalCity(localCity, function(createdLocalCity){
    //     //     console.log(JSON.stringify(createdLocalCity));
    //     //     // {"name":"Tỉnh An Giang","cityType":"Tỉnh","id":19}
    //     // });

    //     // let localDistrict = {
    //     //     name: 'Thành phố Long Xuyên',
    //     //     districtType: 'Thành phố',
    //     //     cityId: 19
    //     // }
    //     // this.placesService.createLocalDistrict(localDistrict, function(createdLocalDistrict){
    //     //     console.log(JSON.stringify(createdLocalDistrict));
    //     //     // {"name":"Thành phố Long Xuyên","districtType":"Thành phố","id":1,"cityId":19}
    //     // });

    //     // let localWards = [{
    //     //     name: 'Phường Đông Xuyên',
    //     //     wardType: 'Phường',
    //     //     districtId: 1
    //     // },
    //     // {
    //     //     name: 'Phường Mỹ Bình',
    //     //     wardType: 'Phường',
    //     //     districtId: 1
    //     // }]
    //     // this.placesService.createLocalWards(localWards, function(createdLocalWards){
    //     //     console.log(JSON.stringify(createdLocalWards));
    //     // });
    // }

    // initCityDistrictWardData(){
    //     let me = this;
    //     me.placesService.getAllOutsideCityProvinces(function(outsideCities){
    //         // Filter outsideCities
    //         /*  
    //             "province_id":"89","province_name":"Tỉnh An Giang","province_type":"Tỉnh"
    //             province_id":"87","province_name":"Tỉnh Đồng Tháp","province_type":"Tỉnh"
    //             "province_id":"91","province_name":"Tỉnh Kiên Giang","province_type":"Tỉnh"
    //             "province_id":"92","province_name":"Thành phố Cần Thơ","province_type":"Thành phố Trung ương"
    //         */
    //         let provinceIds = ['89', '87', '91', '92'];
    //         let filterdOutsideCities = outsideCities.results.filter(function (city) {
    //             return (city.province_id === "89" || city.province_id === "87" || city.province_id === "91" || city.province_id === "92");
    //         });

    //         // build local city
    //         let localCities = filterdOutsideCities.map(city => {
    //             return {
    //                 name: city.province_name,
    //                 cityType: city.province_type,
    //                 province_id: city.province_id
    //             }
    //         });
    //         localCities.forEach(localCity => {
    //             let province_id:string = localCity['province_id'];
    //             delete localCity['province_id'];
    //             me.placesService.createLocalCity(localCity, function(createdCity){
    //                 me.placesService.getOutsideDistrictsByProvinceId(province_id, function(outsideDistricts){
    //                     // map local district
    //                     let localDistricts = outsideDistricts.results.map(outsideDistrict =>{
    //                         return{
    //                             district_id: outsideDistrict.district_id,
    //                             name: outsideDistrict.district_name,
    //                             districtType: outsideDistrict.district_type,
    //                             cityId: createdCity.id
    //                         };
    //                     });

    //                     localDistricts.forEach(localDistrict => {
    //                         let district_id = localDistrict['district_id'];
    //                         delete localDistrict['district_id'];
    //                         me.placesService.createLocalDistrict(localDistrict, function(createdLocalDistrict){
    //                             me.placesService.getOutsideWardByDistrictId(district_id, function(outsideWards){
    //                                 let localWards = outsideWards.results.map(outsideWard => {
    //                                     return {
    //                                         name: outsideWard.ward_name,
    //                                         wardType: outsideWard.ward_type,
    //                                         districtId: createdLocalDistrict.id
    //                                     }
    //                                 });
    //                                 me.placesService.createLocalWards(localWards, function(createdLocalWards){

    //                                 });
    //                             });
    //                         });
    //                     });  
    //                 });
    //             });
    //         });
    //     });
    // }
}

interface TablePagingFilter{
    skip: number;
    limit: number;
}

interface FkDataSource{
    name: string;
    data: any[];
}