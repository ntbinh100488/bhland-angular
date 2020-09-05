import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhRadioControlComponent } from './bh-radio-control.component';

describe('BhRadioControlComponent', () => {
  let component: BhRadioControlComponent;
  let fixture: ComponentFixture<BhRadioControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhRadioControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhRadioControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
