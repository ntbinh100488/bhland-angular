import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../services/event.service';
import { BhTableControlComponent } from '../bh-table-control/bh-table-control.component';

@Component({
  selector: 'app-liability',
  templateUrl: './liability.component.html',
  styleUrls: ['./liability.component.css']
})
export class LiabilityComponent implements OnInit {

    @ViewChild('bhTable') bhTable: BhTableControlComponent;
    
    constructor(private eventService: EventService) { }
    
    ngOnInit(): void {
        console.log("LiabilityComponent ngOnInit");
        this.eventService.change.subscribe(data => {
            console.log('LiabilityComponent change.subscribe');
            // if(data != null && data != undefined && data != ''){
            //     if(this.bhTable && this.bhTable.formBuilder && this.bhTable.formBuilder.selectControls){
            //         this.bhTable.formBuilder.selectControls.first.optionData = [];
            //     }
            // }
        });
    }
}
