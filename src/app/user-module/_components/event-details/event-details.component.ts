import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'ga-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  id: any;
  private sub: any;
  eventDetail: any = [];
  eventDates: any = [];
  eventTravelPrice: any = [];
  tokenAmount: any;
  fullAmount: any;
  CheckOut: any = {};
  dispalyTravelMode: any = [];
  PriceBtn: boolean = true;
  showPage: boolean = false;
  BookedSlots: number = 1;
  selectedDate: any = {};
  images: any = [];
  activeTab: string;
  isOpenDateDropdown: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _userService: UserService,
    public dialog: MatDialog,
    private toastr: ToastrService) {
    this.activeTab = 'tab1';
    this.isOpenDateDropdown = false;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });

    this._userService.getId('User/GetEVentByID', this.id).subscribe((response) => {
      this.eventDetail = response.objEventDetails;
      this.eventDates = response.listEveDate;
      this.eventTravelPrice = response.listEventTravelPrice;
      this.tokenAmount = this.eventTravelPrice[0].MinPrice;
      this.fullAmount = this.eventTravelPrice[0].Price;
      this.CheckOut.EventDate = this.eventDates[0];
      this.CheckOut.TravelMode = this.eventTravelPrice[0];

      this.dispalyTravelMode = this.eventTravelPrice.filter(x => x.TravelMode !== '');

      this._userService.getId('User/GetGallery', this.eventDetail.Id).subscribe((response) => {
        this.images = response;
      })
    })
  }

  onTravelChange(e) {
    console.log(e);
    let EventPrice = this.eventTravelPrice.filter(book => book.TravelMode === e)[0];
    this.tokenAmount = EventPrice.MinPrice;
    this.fullAmount = EventPrice.Price;
    this.CheckOut.TravelMode = EventPrice;
  }

  onDateChange(e) {
    this.CheckOut.EventDate = this.eventDates.filter(book => book.EventDatesId === e.EventDatesId)[0];
    this.selectedDate = e;
    this.isOpenDateDropdown = !this.isOpenDateDropdown;
  }

  minusAdultCount() {
    this.BookedSlots = this.BookedSlots - 1;
  }

  plusAdultCount() {
    this.BookedSlots = this.BookedSlots + 1;
  }

  checkout() {
    if (Object.keys(this.selectedDate).length !== 0) {
      this.CheckOut.Title = this.eventDetail.Title;
      this.CheckOut.Id = this.eventDetail.Id;
      this.CheckOut.BookedSlots = this.BookedSlots
      this.CheckOut.TilePhoto = this.eventDetail.TilePhoto;
      if (this.PriceBtn) {
        this.CheckOut.SelectePrice = this.tokenAmount;
      }
      else {
        this.CheckOut.SelectePrice = this.fullAmount;
      }

      localStorage.setItem('checkOutDetails', JSON.stringify(this.CheckOut));

      this.router.navigateByUrl('checkout');
    }
    else {
      this.toastr.clear();
      this.toastr.info('Please fill all mandatory fields!!');
    }
  }

  openDialog(e) {
    let data = this.images.map((x: any) => Object.assign({}, x));
    const dialogRef = this.dialog.open(EventDetailsImageGalleryDialog, {
      panelClass: 'myapp-no-padding-dialog',
      data: { Selected: e, Data: data }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onClickTabs(tab: string) {
    this.activeTab = tab;
  }
  openDateDropDown() {
    this.isOpenDateDropdown = !this.isOpenDateDropdown;
  }
}


import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class EventDetailsImageGalleryDialog implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  imageData: any = [];

  ngOnInit() {
    this.data.Data.unshift(this.data.Selected)
  }
}
