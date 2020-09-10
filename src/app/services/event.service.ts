import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable({
    providedIn: 'root'
  })
export class EventService {

    data:any;

    @Output() change: EventEmitter<any> = new EventEmitter();

    toggle(data:any) {
        this.change.emit(data);
    }
}