import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../_services/admin.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

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
  WeekendEvents4: any = [];

  DayPaymentCount: number;
  WeekPaymentCount: number;
  MonthPaymentCount: number;
  ChartData: any;
  activeTab: string;

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Transactions' }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    },
    annotation: {
      annotations: [],
    },
  };
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor(private _adminService: AdminService) {
    this.activeTab = 'tab1';
  }

  ngOnInit() {
    this._adminService.get('Events/GetComingWeekEndReport').subscribe((response) => {
      this.comingWeekendEvents = response["Coming Weekend Events"];
      // this.WeekendEvents1 = response["June Month Events"];
      this.WeekendEvents2 = response["July Month Events"];
      this.WeekendEvents3 = response["August Month Events"];
      this.WeekendEvents4 = response["September Month Events"];
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

  onClickTabs(tab:string){
    this.activeTab=tab;
  }
}
