import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhCardComponent } from './bh-card.component';

describe('BhCardComponent', () => {
  let component: BhCardComponent;
  let fixture: ComponentFixture<BhCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
