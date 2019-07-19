import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../_services/admin.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'ga-event-report',
  templateUrl: './event-report.component.html',
  styleUrls: ['./event-report.component.css']
})
export class EventReportComponent implements OnInit {
  EventNames: any = [];
  EventDates: any = [];
  EventTravelPrice: any = [];
  AllPayments: any = [];
  SelectedEvent:any;
  SelectedEventDate:any;
  
  displayedColumns: string[] = [
    'Title',
    'Date',
    'OrderId',
    'PaymentStatus',
    'PaymentReceived',
    'PaymentPending',
    'Slots',
    'UserName',
    'UserContact',
    // 'UserEmail',
    'CreatedDate',
    'Action'
  ];
  dataSource = new MatTableDataSource<any>()

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _adminService: AdminService) { }

  ngOnInit() {
    this._adminService.get('Events/GetAllEventsName').subscribe((response) => {
      this.EventNames = response;
    })
  }

  onEventNameChange(Id: any) {
    this._adminService.getId('Events/GetEventDatesBuEventId', Id).subscribe((response) => {
      this.EventDates = response.listEventDates;
      this.EventTravelPrice = response.listEventTravelPrice;
    })
  }

  GetReport(EventId: any, EventDate: any) {

    var EventReportParams = {
      EventId: EventId,
      EventDate: EventDate
    }
    this._adminService.add('Events/GetReport', EventReportParams).subscribe((response) => {
      setTimeout(() => {
        this.dataSource.paginator = this.paginator,
          this.dataSource.sort = this.sort
      });

      this.AllPayments = response;
      this.dataSource = new MatTableDataSource<any>(this.AllPayments);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  payPendingAmount(data:any):void{
    let APIPaymentDetails = {
      "Name": data.UserName,
      "Email": data.UserEmail,
      "Phone": data.UserContact,
      "Amount": data.PaymentPending,
      "TransactionCode":data.TransactionCode,
      "TransactionId":data.TransactionId
    }
    this._adminService.add('InstamojoPaymnet/CreatePendingPayment', APIPaymentDetails).subscribe((response) => {
      alert(response)
    })
  }
}
