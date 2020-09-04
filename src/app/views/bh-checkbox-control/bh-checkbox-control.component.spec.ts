import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhCheckboxControlComponent } from './bh-checkbox-control.component';

describe('BhCheckboxControlComponent', () => {
  let component: BhCheckboxControlComponent;
  let fixture: ComponentFixture<BhCheckboxControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhCheckboxControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhCheckboxControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
