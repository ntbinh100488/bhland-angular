import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhTextControlComponent } from './bh-text-control.component';

describe('BhTextControlComponent', () => {
  let component: BhTextControlComponent;
  let fixture: ComponentFixture<BhTextControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhTextControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhTextControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
