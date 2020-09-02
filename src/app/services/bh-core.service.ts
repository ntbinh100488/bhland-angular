import { Injectable, Inject } from '@angular/core';
import { noteSchema } from '../schemas/note';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
		if(noteSchema.name === 'note'){
			return noteSchema;
		}
	}

	getEntityProperties(schemaName: string): any[] {
		if(noteSchema.name === 'note'){
			return noteSchema.properties;
		}
    }
    
    submitForm(route: string, formData: any): any{
        let method = formData.id ? 'PATCH' : 'POST';
        let url = 'http://localhost:3000/' + 'api/' + route;
        if(method == 'POST'){
            delete formData['id'];
            this.http.post<any>(url, formData).subscribe(data => {
                let dataId = data.id;
            })
        }else if(method == 'PATCH'){    
            this.http.patch<any>(url, formData).subscribe(data => {
                let dataId = data.id;
            })
        }
    }

    getFormData(route: string, entityId: number, cb: any): any{
        let url = 'http://localhost:3000/' + 'api/' + route + '/' + entityId;
        this.http.get<any>(url).subscribe(data => {
            cb(data);
        })
    }

    handleError(errorMessage: string): any{
        console.log(errorMessage);
    }
}
