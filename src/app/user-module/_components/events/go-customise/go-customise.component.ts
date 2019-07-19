import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel';
import { UserService } from '../../../_services/user.service';
import { slider } from '../../../_services/hello-slide';

@Component({
  selector: 'ga-go-customise',
  templateUrl: './go-customise.component.html',
  styleUrls: ['./go-customise.component.css']
})
export class GoCustomiseComponent implements OnInit {
  hyderabadEvents: any = [];
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.get('User/GetCustomiseEvents').subscribe((response) => {
      this.hyderabadEvents = response;
    })
  }

}
