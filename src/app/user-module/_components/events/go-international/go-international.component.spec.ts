import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoInternationalComponent } from './go-international.component';

describe('GoInternationalComponent', () => {
  let component: GoInternationalComponent;
  let fixture: ComponentFixture<GoInternationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoInternationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoInternationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
