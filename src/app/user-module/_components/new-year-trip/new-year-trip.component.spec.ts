import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYearTripComponent } from './new-year-trip.component';

describe('NewYearTripComponent', () => {
  let component: NewYearTripComponent;
  let fixture: ComponentFixture<NewYearTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewYearTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewYearTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
