import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfflineQueriesComponent } from './add-offline-queries.component';

describe('AddOfflineQueriesComponent', () => {
  let component: AddOfflineQueriesComponent;
  let fixture: ComponentFixture<AddOfflineQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOfflineQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfflineQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
