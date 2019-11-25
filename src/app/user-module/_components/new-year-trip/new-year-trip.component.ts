import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-new-year-trip',
  templateUrl: './new-year-trip.component.html',
  styleUrls: ['./new-year-trip.component.css']
})
export class NewYearTripComponent implements OnInit {
  newYearTrips: any = [];
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.get('User/GetAllEvents').subscribe((response) => {
      this.newYearTrips = response.filter(x => x.Id == 2 || x.Id==4 || x.Id==104 || x.Id==113 ||x.Id==101 || x.Id==13  || x.Id==11 ||x.Id==66 || x.Id==111 || x.Id==114);
    })
  }
}
