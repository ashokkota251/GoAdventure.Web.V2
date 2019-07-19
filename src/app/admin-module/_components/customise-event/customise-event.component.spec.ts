import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseEventComponent } from './customise-event.component';

describe('CustomiseEventComponent', () => {
  let component: CustomiseEventComponent;
  let fixture: ComponentFixture<CustomiseEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomiseEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomiseEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
