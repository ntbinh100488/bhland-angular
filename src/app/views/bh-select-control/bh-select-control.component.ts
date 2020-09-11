import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BhCoreService } from '../../services/bh-core.service'
import { BHSelectControlOptionItems, BHSelectControlDataSource } from '../../interfaces/select-control-type';
import { EventService } from '../../services/event.service';
import { FormBuilderComponent } from '../form-builder/form-builder.component';

@Component({
  selector: 'app-bh-select-control',
  templateUrl: './bh-select-control.component.html',
  styleUrls: ['./bh-select-control.component.css']
})
export class BhSelectControlComponent implements OnInit {

    @Input() entitySchemaName: string;
    @Input() controlName: string;
    @Input() displayName: string;
    @Input() controlType: string;

    @Input() hasTouched: boolean;
    @Input() hasInvalid: boolean;
    @Input() parentGroup: FormGroup;
    @Input() controlReadonly: boolean;
    @Input() hasRequiredError: boolean;

    @Input() placeHolder: string;

    @Input() optionItems: BHSelectControlOptionItems[];
    @Input() dataSource: BHSelectControlDataSource;

    public optionData: BHSelectControlOptionItems[];
    public displayFieldName: string;
    public valueFieldName: string;

    constructor(private bhCoreService: BhCoreService, private eventService: EventService, @Inject(FormBuilderComponent) private parent: FormBuilderComponent) { }

    ngOnInit(): void {
        if(this.optionItems) {
            this.optionData = this.optionItems;
        }else if(this.dataSource){
            this.displayFieldName = this.dataSource.displayFieldName;
            this.valueFieldName = this.dataSource.valueFieldName;
            // console.log('SelectControl ngOnInit');
            // setTimeout(() => {
            //     console.log('setTimeout eventService emit event');
            //     this.eventService.toggle({parentGroup: this.parentGroup, optionData: this.optionData, value: ''});
            // }, 2000);
            this.bhCoreService.getdataSourceData(this.dataSource.entityPluralName, this.dataSource.filter, this.populateData.bind(this));
        }
    }

    populateData(dataSourceResult){
        console.log(JSON.stringify(dataSourceResult));
        this.optionData = dataSourceResult.map((dsItem) => {
            return {
                value: dsItem[this.valueFieldName],
                displayValue: dsItem[this.displayFieldName]
            }
        });
    }

    modelChanged($event:any){
        console.log('modelChanged');
        /*
            Event Model
                ControlName: 'city'
                controlType: selectlist
                EventType: 'change'
                Value: '1'
                parentGroup: parentGroup
        */
        // this.eventService.toggle({parentGroup: this.parentGroup, optionData: this.optionData, value: $event});
    }
}