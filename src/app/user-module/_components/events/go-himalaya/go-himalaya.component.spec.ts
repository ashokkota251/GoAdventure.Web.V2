import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoHimalayaComponent } from './go-himalaya.component';

describe('GoHimalayaComponent', () => {
  let component: GoHimalayaComponent;
  let fixture: ComponentFixture<GoHimalayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoHimalayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoHimalayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
