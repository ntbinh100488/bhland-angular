import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBudgetComponent } from './customer-budget.component';

describe('CustomerBudgetComponent', () => {
  let component: CustomerBudgetComponent;
  let fixture: ComponentFixture<CustomerBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
