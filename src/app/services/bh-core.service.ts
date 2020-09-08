import { Injectable, Inject } from '@angular/core';
import { entitySchema } from '../schemas/entitySchema';
import { HttpClient, HttpHeaders, HttpUrlEncodingCodec} from '@angular/common/http';
import { BHControlDataSourceFilter, BHControlDataSourcePaging } from '../interfaces/select-control-type';

@Injectable({
	providedIn: 'root'
})
export class BhCoreService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) {
    }
    
    getEntitySchema(schemaName: string): any {
        return entitySchema.find(entitySchemaItem => entitySchemaItem.name === schemaName);
	}

	getEntityProperties(schemaName: string): any[] {
        let entitySchemaItem = entitySchema.find(entitySchemaItem => entitySchemaItem.name === schemaName);
		return entitySchemaItem.properties;
    }
    
    submitForm(route: string, formData: any, createdCallbackFunc: any, editedCallbackFunc: any): any{
        let method = formData.id ? 'PATCH' : 'POST';
        let url = 'http://localhost:3000/' + 'api/' + route;
        if(method == 'POST'){
            delete formData['id'];
            this.http.post<any>(url, formData).subscribe(data => {
                if(createdCallbackFunc){
                    createdCallbackFunc.emit(data);
                }
            })
        }else if(method == 'PATCH'){    
            this.http.patch<any>(url, formData).subscribe(data => {
                if(editedCallbackFunc){
                    editedCallbackFunc.emit(data);
                }
            })
        }
    }

    getFormData(route: string, entityId: number, cb: any): any{
        let url = 'http://localhost:3000/' + 'api/' + route + '/' + entityId;
        this.http.get<any>(url).subscribe(data => {
            cb(data);
        })
    }

    getdataSourceData(route: string, filter: BHControlDataSourceFilter[], callback: any): any{
        let baseUrl = 'http://localhost:3000/' + 'api/' + route;
        let url = baseUrl;
        if(filter){
            let filterStr = ``;
            filter.forEach((filterEle, filterEleIndex) => {
                if(filterEleIndex === 0){
                    filterStr = `?filter[where]`;
                }else{
                    filterStr = `filter`;
                }
                filterStr += `[${filterEle.fieldName}][${filterEle.operator}]=${filterEle.fieldValue}`;
                filterStr += (filterEleIndex !== (filter.length - 1)) ? '&' : '';
                url += filterStr;
            });
        }
        this.http.get<any>(url).subscribe(data => {
            callback(data);
        })
    }

    getdataSourceDataAndPaging(route: string, pagingFilter: BHControlDataSourcePaging, callback: any): any{
        let baseUrl = 'http://localhost:3000/' + 'api/' + route;
        let url = baseUrl;
        if(pagingFilter){
            let filterStr = `?filter[skip]=${pagingFilter.skip}&filter[limit]=${pagingFilter.limit}`;
            url += filterStr;
        }
        this.http.get<any>(url).subscribe(data => {
            callback(data);
        })
    }

    countDataSourceData(route: string, callback: any): any{
        let baseUrl = 'http://localhost:3000/' + 'api/' + route + '/count';
        let url = baseUrl;
        this.http.get<any>(url).subscribe(data => {
            callback(data);
        })
    }

    handleError(errorMessage: string): any{
        console.log(errorMessage);
    }
}
