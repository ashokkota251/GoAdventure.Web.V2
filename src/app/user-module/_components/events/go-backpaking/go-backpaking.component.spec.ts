import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBackpakingComponent } from './go-backpaking.component';

describe('GoBackpakingComponent', () => {
  let component: GoBackpakingComponent;
  let fixture: ComponentFixture<GoBackpakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBackpakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoBackpakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
