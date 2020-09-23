import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhGoogleMapComponent } from './bh-google-map.component';

describe('BhGoogleMapComponent', () => {
  let component: BhGoogleMapComponent;
  let fixture: ComponentFixture<BhGoogleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhGoogleMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
