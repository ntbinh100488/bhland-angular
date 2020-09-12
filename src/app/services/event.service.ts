import { Injectable, Output, EventEmitter } from '@angular/core'
import { BHFormControlEvent } from '../interfaces/form-control-event';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    data:BHFormControlEvent;

    @Output() change: EventEmitter<BHFormControlEvent> = new EventEmitter();

    emitEvent(event:BHFormControlEvent) {
        this.change.emit(event);
    }
}