import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../_services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ga-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  Event: any = [];
  GoBackPacking:any=[];
  GoInternational:any=[];
  GoHimalayas:any=[];
  GoWeekend:any=[];
  GoCustomise:any=[];
  activeTab: string;


  index: number;
  constructor(
    private _adminService: AdminService,
    private router: Router
  ) {
    this.activeTab = 'tab1';
  }

  ngOnInit() {
    this._adminService.get('Events/GetAllEvents').subscribe((response) => {
      this.Event = response;
      this.GoBackPacking = this.Event.filter(x => x.EventType === 'Go Backpacking');
      this.GoInternational = this.Event.filter(x => x.EventType === 'Go International');
      this.GoHimalayas = this.Event.filter(x => x.EventType === 'Go Himalaya');
      this.GoWeekend = this.Event.filter(x => x.EventType === 'Go Weekends');
      this.GoCustomise = this.Event.filter(x => x.EventType === 'Go Customise');
    })
  }

  onEdit(id:any) {
    this.router.navigate(['/edit-event', id]);
  }

  onDelete(id:any, index:any) {
    this._adminService.getId('Events/DeleteEventById', id).subscribe((response) => {
      this.Event.splice(index, 1);
      alert('Deleted Successfully.')
    })
  }

  onClickTabs(tab:string){
    this.activeTab=tab;
  }
}
