import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BhCommonService } from '../../services/bh-common.service';
import { BhCoreService } from '../../services/bh-core.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor(
    private router: Router,
    private bhCommonService: BhCommonService,
    private bhCoreService: BhCoreService
  ) {}

  entitySchemaProperties: any[] = [];
  entitySchema: any;
  entityData: any;

  ngOnInit(): void {
    let href = this.router.url;   // this.router.url = '/note'
    let schemaName = this.bhCommonService.routeUrlToSchemaName(this.router.url);
    this.entitySchema = this.bhCoreService.getEntitySchema(schemaName);
    this.entitySchemaProperties = this.bhCoreService.getEntityProperties(schemaName);
  }

  noteForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });

  get f(){
    return this.noteForm.controls;
  }

  submit(){
    console.log(this.noteForm.value);
  }

}
