import { Component, OnInit, ViewChild } from '@angular/core';
import { BHFormControlEvent } from '../../interfaces/form-control-event';
import { EventService } from '../../services/event.service';
import { BhTableControlComponent } from '../bh-table-control/bh-table-control.component';
import { FormBuilderComponent } from '../form-builder/form-builder.component';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})
export class RealEstateComponent implements OnInit {

    @ViewChild('bhTable') bhTable: BhTableControlComponent;
    formBuilder: FormBuilderComponent;
    
    constructor(private eventService: EventService) { }
    
    ngOnInit(): void {
        console.log("RealEstate ngOnInit");

        this.eventService.change.subscribe((formEventData:BHFormControlEvent) => {
            if(!this.formBuilder){
                this.formBuilder = this.bhTable?.formBuilder;
            }
            
            console.log('RealEstate change.subscribe');
            if(formEventData){
                if(formEventData.controlName == 'cityId'){
                    this.reloadSelectControlOptionData(formEventData.value, 'districtId', 'cityId');
                    this.reloadSelectControlOptionData(formEventData.value, 'wardId', 'districtId');
                }else if(formEventData.controlName == 'districtId'){
                    this.reloadSelectControlOptionData(formEventData.value, 'wardId', 'districtId');
                }
            }
        });
    }

    reloadSelectControlOptionData(filterFieldValue: number, reloadFieldName: string, filterFieldName:string){
        let realEstateFormBuilderSelectControls = this.formBuilder?.selectControls;
        if(realEstateFormBuilderSelectControls && realEstateFormBuilderSelectControls.length > 0){
            let districtSelect = realEstateFormBuilderSelectControls.find(selectControl => selectControl.controlName === reloadFieldName);
            if(districtSelect){
                districtSelect.reloadOptionDataByFilter(filterFieldName, filterFieldValue)
                this.formBuilder.noteForm.controls[reloadFieldName].reset();
            }
        }
    }
}
