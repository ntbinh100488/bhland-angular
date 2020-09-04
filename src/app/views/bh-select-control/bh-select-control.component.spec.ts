import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhSelectControlComponent } from './bh-select-control.component';

describe('BhSelectControlComponent', () => {
  let component: BhSelectControlComponent;
  let fixture: ComponentFixture<BhSelectControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhSelectControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhSelectControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
