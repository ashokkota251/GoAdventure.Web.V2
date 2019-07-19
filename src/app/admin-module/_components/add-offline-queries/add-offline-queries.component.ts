import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AdminService } from '../../_services/admin.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from 'src/app/_common/loader.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'ga-add-offline-queries',
  templateUrl: './add-offline-queries.component.html',
  styleUrls: ['./add-offline-queries.component.css']
})
export class AddOfflineQueriesComponent implements OnInit {
  AllQueries: any = [];
  displayedColumns: string[] = [
    // 'EventName',
    // 'EventDate',
    // 'CustomeEvent',
    // 'CustomeDate',
    'FullName',
    'Mobile',
    'Message',
    'NextCall',
    'CreatedDate',
    'Action'
  ];
  private modalRef: NgbModalRef;
  dataSource = new MatTableDataSource<any>()

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _adminService: AdminService, public dialog: MatDialog, private modalService: NgbModal ) { }

  ngOnInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator,
        this.dataSource.sort = this.sort
    });
    this._adminService.get('Events/GetAllQueries').subscribe((response) => {
      this.AllQueries = response;
      this.dataSource = new MatTableDataSource<any>(this.AllQueries);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  OpenResponseDialog(data: any) {
    const dialogRef = this.dialog.open(AddOfflineQueriesDialogComponent, {
      width: '1000px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.modalRef = this.modalService.open(LoaderComponent, {ariaLabelledBy: 'modal-basic-title'});
      this._adminService.add('Events/AddUpdateQuery', result).subscribe((response) => {
        // this.AllQueries = response;
        // this.dataSource = new MatTableDataSource<any>(this.AllQueries);
        // this.dataSource.paginator = this.paginator;
        this.modalRef.close();
        window.location.reload();
      })
    });
  }

  OpenCustomiseDialog() {
    const dialogRef = this.dialog.open(AddOfflineQueriesDialogComponent, {
      width: '1000px',
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      this.modalRef = this.modalService.open(LoaderComponent, {ariaLabelledBy: 'modal-basic-title'});
      this._adminService.add('Events/AddUpdateQuery', result).subscribe((response) => {
        // this.AllQueries.push(result);
        // this.dataSource = new MatTableDataSource<any>(this.AllQueries);
        // this.dataSource.paginator = this.paginator;
        this.modalRef.close();
        window.location.reload();
      })
    });

  }
}


@Component({
  selector: 'add-offline-query-dialog.html',
  templateUrl: 'add-offline-query-dialog.html',
})
export class AddOfflineQueriesDialogComponent implements OnInit {
  QueryData: any = {};
  EventNames: any = [];
  EventDates: any = [];
  Gender: any = [];
  SelectedEventType: any;
  EventTypes: any[] = [{ key: 1, value: 'GA Event' }, { key: 2, value: 'Customised Event' }];
  SubQueries = [{ Value: '', ReadOnly: false }];

  constructor(
    public dialogRef: MatDialogRef<AddOfflineQueriesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _adminService: AdminService) {
    this.Gender = [
      {
        key: 'M',
        value: 'Male'
      },
      {
        key: 'F',
        value: 'Female'
      },
      {
        key: 'O',
        value: 'Other'
      }]

  }

  ngOnInit() {
    this.QueryData = this.data;
    if (this.QueryData == '') {
      this.QueryData = {};
    }
    if (this.QueryData.CustomeEvent != null) {
      this.SelectedEventType = this.EventTypes[1].key;
    }
    else {
      this.SelectedEventType = this.EventTypes[0].key;
      this._adminService.get('Events/GetAllEventsName').subscribe((response) => {
        this.EventNames = response;
        if (this.QueryData.EventId != undefined)
          this.onEventNameChange(this.QueryData.EventId);
      })
    }
    this._adminService.getId('Events/GetAllSubQueries', this.QueryData.ID).subscribe((response) => {
      this.SubQueries = response;
      this.SubQueries.push({ Value: '', ReadOnly: false });
    })

  }

  onEventNameChange(Id: any) {
    this._adminService.getId('Events/GetEventDatesBuEventId', Id).subscribe((response) => {
      this.EventDates = response.listEventDates;
    })
  }

  changeEventTypes() {
    this.QueryData.EventId = '';
    this.QueryData.EventDateId = '';
    this.QueryData.CustomeEvent = '';
    this.QueryData.CustomeDate = '';
  }

  saveData(): void {
    let AddUpdateQueryDTO = {
      UserQueryCustome: this.QueryData,
      SubQueries: this.SubQueries
    }
    this.dialogRef.close(AddUpdateQueryDTO);
  }
  OpenWhatsApp(mobile:any){
    window.open('https://api.whatsapp.com/send?phone=91'+mobile+'', '_blank');
  }
  phoneValidation(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}


