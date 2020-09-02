import { Injectable } from '@angular/core';
import { noteSchema } from '../schemas/note';

@Injectable({
	providedIn: 'root'
})
export class BhCoreService {

    constructor() { }
    
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
}
