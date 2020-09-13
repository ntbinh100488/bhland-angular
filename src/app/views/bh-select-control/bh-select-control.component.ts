import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BhCoreService } from '../../services/bh-core.service'
import { BHSelectControlOptionItems, BHSelectControlDataSource } from '../../interfaces/select-control-type';
import { EventService } from '../../services/event.service';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
import { BHControlEvent } from '../../interfaces/base-control-type';
import { BHFormControlEvent } from '../../interfaces/form-control-event';
import { BHFORMCONTROLEVENTTYPES } from '../../contants/form-control-event-type';

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
    @Input() required: boolean;
    @Input() parentGroup: FormGroup;
    @Input() controlReadonly: boolean;
    @Input() hasRequiredError: boolean;

    @Input() placeHolder: string;

    @Input() optionItems: BHSelectControlOptionItems[];
    @Input() dataSource: BHSelectControlDataSource;
    @Input() events: BHControlEvent;

    public optionData: BHSelectControlOptionItems[];
    public dataSourceData: any[] = [];
    public displayFieldName: string;
    public valueFieldName: string;

    constructor(private bhCoreService: BhCoreService, private eventService: EventService, @Inject(FormBuilderComponent) private parent: FormBuilderComponent) { }

    ngOnInit(): void {
        if(this.optionItems) {
            this.optionData = this.optionItems;
        }else if(this.dataSource){
            this.displayFieldName = this.dataSource.displayFieldName;
            this.valueFieldName = this.dataSource.valueFieldName;
            this.bhCoreService.getdataSourceData(this.dataSource.entityPluralName, this.dataSource.filter, this.populateData.bind(this));
        }
    }

    populateData(dataSourceResult){
        this.dataSourceData = dataSourceResult;
        this.optionData = dataSourceResult.map((dsItem) => {
            return {
                value: dsItem[this.valueFieldName],
                displayValue: dsItem[this.displayFieldName]
            }
        });
    }

    modelChanged(changedValue:any){
        if(changedValue && this.events?.hasChangeEvent){
            let event:BHFormControlEvent = {
                entityType: this.entitySchemaName,
                controlName: this.controlName,
                eventName: BHFORMCONTROLEVENTTYPES.eventChange,
                value: parseInt(changedValue)
            }
            this.eventService.emitEvent(event);
        }
    }

    reloadOptionDataByFilter(filterFieldName: string, fieldValue: number):void{
        let dataSourceFiltedData = this.dataSourceData.filter(function (dataSourceDataItem) {
            return (dataSourceDataItem[filterFieldName] === fieldValue);
        });
        this.optionData = dataSourceFiltedData.map((dsItem) => {
            return {
                value: dsItem[this.valueFieldName],
                displayValue: dsItem[this.displayFieldName]
            }
        });
    }
}