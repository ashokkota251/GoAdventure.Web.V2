import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoWeekendComponent } from './go-weekend.component';

describe('GoWeekendComponent', () => {
  let component: GoWeekendComponent;
  let fixture: ComponentFixture<GoWeekendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoWeekendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoWeekendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
