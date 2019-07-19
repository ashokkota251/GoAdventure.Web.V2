import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBlogsComponent } from './our-blogs.component';

describe('OurBlogsComponent', () => {
  let component: OurBlogsComponent;
  let fixture: ComponentFixture<OurBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
