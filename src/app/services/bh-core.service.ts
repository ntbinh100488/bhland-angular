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
        let url = window.location.origin + 'api/' + route;
        if(method == 'POST'){
            delete formData['id'];
            this.http.post<any>(url, formData).subscribe(data => {
                let dataId = data.id;
            })
        }else if(method == 'PATCH'){    

        }
    }

    handleError(errorMessage: string): any{
        console.log(errorMessage);
    }
}
