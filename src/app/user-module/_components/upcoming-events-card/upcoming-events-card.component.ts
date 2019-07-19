import { UserService } from '../../_services/user.service';
import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from '../../_services/hello-slide';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/_common/loader.service';

@Component({
  selector: 'ga-upcoming-events-card',
  templateUrl: './upcoming-events-card.component.html',
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UpcomingEventsCardComponent implements OnInit {
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

  constructor(private _userService: UserService, private router: Router) {}

  ngOnInit() {
    this._userService.get('User/GetAllEvents').subscribe((response) => {
      this.upComingEventsAll = response;    
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
