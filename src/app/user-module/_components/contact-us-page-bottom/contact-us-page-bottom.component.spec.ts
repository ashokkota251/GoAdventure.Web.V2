import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsPageBottomComponent } from './contact-us-page-bottom.component';

describe('ContactUsPageBottomComponent', () => {
  let component: ContactUsPageBottomComponent;
  let fixture: ComponentFixture<ContactUsPageBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsPageBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsPageBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
