import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'ga-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.css']
})
export class PaymentStatusComponent implements OnInit {
  PaymentStatus: any = {};
  SelectedEventDetails: any = {};
  PaymentTransaction: any = {};
  UserDetails: any = {};
  isUpdate: boolean = false;
  TransactionId: Number;

  constructor(private route: ActivatedRoute, private _userService: UserService, private router: Router) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('checkOutDetails')) == null)
      this.router.navigateByUrl('home');

    if (this.route.snapshot.params.transaction_id.includes("Pending")) {
      let TransObj = {
        TransactionCode: this.route.snapshot.params.transaction_id.split('_')[1],
        OrderID: this.route.snapshot.params.payment_id
      }
      this.isUpdate = true;

      if (this.route.snapshot.params.payment_status === "Credit" && this.isUpdate == true) {
        alert('Success.!! Please check your mail for confirmation. Reference : ' + TransObj.OrderID);
        this._userService.add('Events/UpdatePendingPaymentTransaction', TransObj).subscribe((response) => {
          localStorage.removeItem('checkOutDetails');
          localStorage.removeItem('PromoCodeDetails');
        })
      }
      else if (this.route.snapshot.params.payment_status === "Failed" && this.isUpdate == true) {
        alert('Payment got failed. Please contact Admin. Reference : ' + TransObj.OrderID);
      }
    }
    else {
      this.SelectedEventDetails = JSON.parse(localStorage.getItem('checkOutDetails'));
      this.UserDetails = JSON.parse(localStorage.getItem('UserDetails'));
      var PromoCodeDetails = JSON.parse(localStorage.getItem('PromoCodeDetails'));

      this.PaymentStatus = {
        "payment_id": this.route.snapshot.params.payment_id,
        "payment_status": this.route.snapshot.params.payment_status,
        "id": this.route.snapshot.params.id,
        "transaction_id": this.route.snapshot.params.transaction_id,
      };
      this.PaymentTransaction = {
        "EventId": this.SelectedEventDetails.Id,
        "EventDateId": this.SelectedEventDetails.EventDate.EventDatesId,
        "EventTravelModeId": this.SelectedEventDetails.TravelMode.EventTrModePriceId,
        "OrderId": this.route.snapshot.params.payment_id,
        "PaymentStatus": this.route.snapshot.params.payment_status,
        "UserName": this.UserDetails.FullName,
        "UserContact": this.UserDetails.Contact,
        "UserEmail": this.UserDetails.Email,
        "PromoCode": PromoCodeDetails.CouponCode,
        "PaymentReceived": PromoCodeDetails.PaymentToPay,
        "PaymentPending": PromoCodeDetails.BalanceDue,
        "BookedSlots": PromoCodeDetails.BookedSlots
      }


      if (this.route.snapshot.params.payment_status === "Credit" && this.isUpdate == false) {
        let ObjPaymentTransaction = {
          "PaymentTransaction": this.PaymentTransaction,
          "UserDetail": this.UserDetails,
          "Total": PromoCodeDetails.Total,
          "SubTotal": PromoCodeDetails.SubTotal,
          "Discount": PromoCodeDetails.Discount,
          "TransactionCode": this.PaymentStatus.transaction_id
        }
        this._userService.add('Events/UpdatePaymentTransaction', ObjPaymentTransaction).subscribe((response) => {
          localStorage.removeItem('checkOutDetails');
          localStorage.removeItem('PromoCodeDetails');
        })
      }
      if (this.route.snapshot.params.payment_status === "Failed") {
        let ObjPaymentTransaction = {
          "PaymentTransaction": this.PaymentTransaction,
          "UserDetail": this.UserDetails,
          "Total": PromoCodeDetails.Total,
          "SubTotal": PromoCodeDetails.SubTotal,
          "Discount": PromoCodeDetails.Discount,
        }
      }
    }
  }
}

// if (this.route.snapshot.params.payment_status === "Credit") {
    //   this.PaymentTransaction.PaymentPending = Number(this.SelectedEventDetails.TravelMode.Price) - Number(this.SelectedEventDetails.SelectePrice);
    // }

    // else {
    //   this.PaymentTransaction.PaymentPending = Number(this.SelectedEventDetails.TravelMode.Price);
    // }

    // this.PaymentTransaction.PaymentPending = Number(this.PaymentTransaction.PaymentPending) * Number(PromoCodeDetails.BookedSlots);
