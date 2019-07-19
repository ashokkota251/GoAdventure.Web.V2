import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventsCardComponent } from './upcoming-events-card.component';

describe('UpcomingEventsCardComponent', () => {
  let component: UpcomingEventsCardComponent;
  let fixture: ComponentFixture<UpcomingEventsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingEventsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEventsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
