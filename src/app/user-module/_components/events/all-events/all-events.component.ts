import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel';
import { UserService } from '../../../_services/user.service';
import { slider } from '../../../_services/hello-slide';

@Component({
  selector: 'ga-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  LongEvents: any = [];
  WeekendEvents: any = [];
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.get('User/GetAllEvents').subscribe((response) => {
      this.LongEvents = response.filter(x => x.EventType === 'Go Backpacking' || x.EventType==='Go International' || x.EventType==='Go Himalaya');
      this.WeekendEvents = response.filter(x => x.EventType === 'Go Weekends');
    })
  }

}
