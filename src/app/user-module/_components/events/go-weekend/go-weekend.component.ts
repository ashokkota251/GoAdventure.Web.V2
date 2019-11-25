import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel';
import { UserService } from '../../../_services/user.service';
import { slider } from '../../../_services/hello-slide';

@Component({
  selector: 'ga-go-weekend',
  templateUrl: './go-weekend.component.html',
  styleUrls: ['./go-weekend.component.css']
})
export class GoWeekendComponent implements OnInit {
  hyderabadEvents: any = [];
  bangloreEvents: any = [];
  chennaiEvents: any = [];
  activeTab: string;

  constructor(private _userService: UserService) {
    this.activeTab = 'hyderabad';
  }

  ngOnInit() {
    this._userService.get('User/GetAllEvents').subscribe((response) => {
      this.hyderabadEvents = response.filter(x => x.EventType === 'Go Weekends' && x.City === 'Hyderabad');
      this.bangloreEvents = response.filter(x => x.EventType === 'Go Weekends' && x.City === 'Bangalore');
      this.chennaiEvents = response.filter(x => x.EventType === 'Go Weekends' && x.City === 'Chennai');
    })
  }

  onClickTabs(tab: string) {
    this.activeTab = tab;
  }
}
