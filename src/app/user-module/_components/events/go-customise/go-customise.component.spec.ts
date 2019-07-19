import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoCustomiseComponent } from './go-customise.component';

describe('GoCustomiseComponent', () => {
  let component: GoCustomiseComponent;
  let fixture: ComponentFixture<GoCustomiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoCustomiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoCustomiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
