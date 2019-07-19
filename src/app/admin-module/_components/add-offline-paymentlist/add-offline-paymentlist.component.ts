import { Component, OnInit, Output } from '@angular/core';
import { AdminService } from '../../_services/admin.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from 'src/app/_common/loader.component';


@Component({
  selector: 'ga-add-offline-paymentlist',
  templateUrl: './add-offline-paymentlist.component.html',
  styleUrls: ['./add-offline-paymentlist.component.css']
})
export class AddOfflinePaymentlistComponent implements OnInit {
  EventNames: any = [];
  EventDates: any = [];
  EventTravelPrice: any = [];
  Transaction: any = {};
  FullPayment:number;
  TravelMode:any;
  Discount:number;
  private modalRef: NgbModalRef;

  constructor(private _adminService: AdminService, private modalService: NgbModal) { }

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

  save(Discount: any, TravelMode: any) {
    if (TravelMode != undefined) {
      this.Transaction.EventTravelModeId = this.EventTravelPrice.filter(x => x.TravelMode === TravelMode)[0].EventTravelModeId;
      this.FullPayment=this.EventTravelPrice.filter(x => x.TravelMode === TravelMode)[0].Price;
    }
    else{
      this.Transaction.EventTravelModeId=this.EventTravelPrice[0].EventTrModePriceId;
      this.FullPayment=this.EventTravelPrice[0].Price;
    }


    this.Transaction.PaymentReceived = Number(this.Transaction.PaymentReceived) + Number(Discount==undefined?0:Discount);

    this.Transaction.PaymentPending= (Number(this.FullPayment) * Number(this.Transaction.BookedSlots)) -(this.Transaction.PaymentReceived);
    this.Transaction.PaymentStatus = "Offline";
    this.modalRef = this.modalService.open(LoaderComponent, { ariaLabelledBy: 'modal-basic-title' });
    this._adminService.add('Events/AddOfflinePayment', this.Transaction).subscribe((response) => {
      this.modalRef.close();
      alert('Success');
      this.Transaction = {};
    })
  }

}
