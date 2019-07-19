import { Component, OnInit, ViewChild } from '@angular/core';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarComponent } from 'ng-fullcalendar';
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'ga-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarsComponent implements OnInit {
  options: OptionsInput;
  eventsModel: any;
  AllEVents:any[]=[];
  @ViewChild('fullcalendar') fullcalendar: CalendarComponent;

  constructor(private _userService: UserService,private router: Router ) { }

  ngOnInit() {
    this._userService.get('User/GetEventsDateforCalendar').subscribe((response) => {
      this.AllEVents = response;
      this.options = {
        editable: false,
        events: this.AllEVents ,
        header: {
          left: 'prev, next today',
          center: 'title',
          right: ''
        },
        plugins: [ dayGridPlugin ],
        height: "auto",
        eventTextColor : 'white',
      };
    })

    
  }
  eventClick(model:any) {
    this.router.navigate(['event-details', model.event.extendedProps.Id])
  }
}
