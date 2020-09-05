import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BhCoreService } from '../../services/bh-core.service'

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

    constructor(private bhCoreService: BhCoreService) { }

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
        console.log(JSON.stringify(dataSourceResult));
        this.optionData = dataSourceResult.map((dsItem) => {
            return {
                value: dsItem[this.valueFieldName],
                displayValue: dsItem[this.displayFieldName]
            }
        });
    }
}