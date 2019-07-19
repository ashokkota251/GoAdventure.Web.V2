import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLogComponent } from './video-log.component';

describe('VideoLogComponent', () => {
  let component: VideoLogComponent;
  let fixture: ComponentFixture<VideoLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
