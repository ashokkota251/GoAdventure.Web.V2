import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel';
import { UserService } from '../../../_services/user.service';
import { slider } from '../../../_services/hello-slide';

@Component({
  selector: 'ga-go-international',
  templateUrl: './go-international.component.html',
  styleUrls: ['./go-international.component.css'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoInternationalComponent implements OnInit {

  events: any = [];
  upComingEventsAll: any = [];

  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 4, all: 0 },
    interval: { timing: 40000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
    point: {
      visible: true,
      hideOnSingleSlide: true
    }
  };

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.get('User/GetAllEvents').subscribe((response) => {
      this.upComingEventsAll = response.filter(x => x.EventType === 'Go International');
    })


    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(30),
      map(val => {
        return this.upComingEventsAll;
      })
    );
  }

}
