import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../_services/admin.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'ga-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymnetlistComponent implements OnInit {
  AllPayments: any = [];
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
    'CreatedDate'
  ];
  dataSource = new MatTableDataSource<any>()

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _adminService: AdminService) { }

  ngOnInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator, 
      this.dataSource.sort = this.sort
    });
    this._adminService.get('Events/GetAllPaymentList').subscribe((response) => {
      this.AllPayments = response;
      this.dataSource = new MatTableDataSource<any>(this.AllPayments);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
