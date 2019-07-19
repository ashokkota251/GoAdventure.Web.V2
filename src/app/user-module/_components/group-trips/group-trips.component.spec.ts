import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTripsComponent } from './group-trips.component';

describe('GroupTripsComponent', () => {
  let component: GroupTripsComponent;
  let fixture: ComponentFixture<GroupTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
