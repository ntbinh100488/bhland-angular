import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhPreappendControlComponent } from './bh-preappend-control.component';

describe('BhPreappendControlComponent', () => {
  let component: BhPreappendControlComponent;
  let fixture: ComponentFixture<BhPreappendControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhPreappendControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhPreappendControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
