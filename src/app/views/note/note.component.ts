import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../services/event.service';
import { BhTableControlComponent } from '../bh-table-control/bh-table-control.component';

@Component({
  templateUrl: 'note.component.html'
})

export class NoteComponent implements OnInit {
    @ViewChild('bhTable') bhTable: BhTableControlComponent;
    
    constructor(private eventService: EventService) { }
    
    ngOnInit(): void {
        console.log("Note ngOnInit");
        this.eventService.change.subscribe(data => {
            if(data != null && data != undefined && data != ''){
                if(this.bhTable && this.bhTable.formBuilder && this.bhTable.formBuilder.selectControls){
                    this.bhTable.formBuilder.selectControls.first.optionData = [];
                }
            }
        });
    }
}