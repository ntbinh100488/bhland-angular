import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhNumberControlComponent } from './bh-number-control.component';

describe('BhNumberControlComponent', () => {
  let component: BhNumberControlComponent;
  let fixture: ComponentFixture<BhNumberControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhNumberControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhNumberControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
