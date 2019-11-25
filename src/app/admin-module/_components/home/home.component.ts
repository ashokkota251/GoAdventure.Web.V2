import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../_services/admin.service';

@Component({
  selector: 'ga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class AdminHomeComponent implements OnInit {
  comingWeekendEvents: any = [];
  WeekendEvents1: any = [];
  WeekendEvents2: any = [];
  WeekendEvents3: any = [];

  DayPaymentCount: number;
  WeekPaymentCount: number;
  MonthPaymentCount: number;
  ChartData: any;
  activeTab: string;

  constructor(private _adminService: AdminService) {
    this.activeTab = 'tab1';
  }

  ngOnInit() {
    this._adminService.get('Events/GetComingWeekEndReport').subscribe((response) => {
      debugger;
      this.comingWeekendEvents = response["Coming Weekend Events"];
      // this.WeekendEvents1 = response["October Month Events"];
      this.WeekendEvents2 = response["November Month Events"];
      this.WeekendEvents3 = response["December Month Events"];
    })

    this._adminService.get('Events/GetPaymentCount').subscribe((response) => {
      this.DayPaymentCount = response["Today"];
      this.WeekPaymentCount = response["Week"];
      this.MonthPaymentCount = response["Month"];
      // const monthNames = ["January", "February", "March", "April", "May", "June",
      //   "July", "August", "September", "October", "November", "December"
      // ];
      // response["Chart"].forEach((obj) => { // foreach statement
      //   this.lineChartData[0].data.push(obj.Count);
      //   this.lineChartLabels.push(monthNames[obj.Month]);
      // })
    })
  }

  onClickTabs(tab: string) {
    this.activeTab = tab;
  }
}
