import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaCustomerQueryComponent } from './social-media-customer-query.component';

describe('SocialMediaCustomerQueryComponent', () => {
  let component: SocialMediaCustomerQueryComponent;
  let fixture: ComponentFixture<SocialMediaCustomerQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaCustomerQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaCustomerQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
