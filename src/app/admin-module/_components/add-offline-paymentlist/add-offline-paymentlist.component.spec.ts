import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfflinePaymentlistComponent } from './add-offline-paymentlist.component';

describe('AddOfflinePaymentlistComponent', () => {
  let component: AddOfflinePaymentlistComponent;
  let fixture: ComponentFixture<AddOfflinePaymentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOfflinePaymentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfflinePaymentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
