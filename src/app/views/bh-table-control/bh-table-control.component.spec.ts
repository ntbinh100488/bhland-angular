import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhTableControlComponent } from './bh-table-control.component';

describe('BhTableControlComponent', () => {
  let component: BhTableControlComponent;
  let fixture: ComponentFixture<BhTableControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhTableControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhTableControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
