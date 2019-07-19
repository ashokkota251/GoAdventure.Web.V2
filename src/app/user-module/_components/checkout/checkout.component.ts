import { Component, OnInit } from '@angular/core';
import { NgbDatepickerConfig, NgbCalendar, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../_services/user.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LoaderComponent } from 'src/app/_common/loader.component';

@Component({
  selector: 'ga-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [NgbDatepickerConfig]
})

export class CheckoutComponent implements OnInit {
  Gender: any = [];
  Terms: boolean;
  UserDetails: any = {};
  SelectedEventDetails: any = {};
  APIPaymentDetails: any = {}
  closeResult: string;
  alertMessage: string;
  CouponCode: string;
  CouponAmount: number;
  CouponCodeMessage: string;
  ShowPromoCode: boolean = false;
  AfterDiscountPayableAmount: number;
  private modalRef: NgbModalRef;
  errorMessage: string = "";


  constructor(config: NgbDatepickerConfig,
    calendar: NgbCalendar,
    private _userService: UserService,
    private router: Router,
    private modalService: NgbModal) {
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

    config.minDate = { year: 1900, month: 1, day: 1 };
  }

  ngOnInit() {
    this.SelectedEventDetails = JSON.parse(localStorage.getItem('checkOutDetails'));
    console.log(this.SelectedEventDetails);
    if (this.SelectedEventDetails != null)
      this.AfterDiscountPayableAmount = Number(this.SelectedEventDetails.BookedSlots * this.SelectedEventDetails.SelectePrice);
    else
      this.router.navigateByUrl('home');
  }

  checkCouponCode() {
    this._userService.getId('User/CheckPromoCode', this.CouponCode).subscribe((response) => {
      if (response.Amount != undefined) {
        this.CouponAmount = Number(response.Amount * this.SelectedEventDetails.BookedSlots);
        this.CouponCodeMessage = "Congratulations! Promo applied successfully. You got a discount of Rs." + this.CouponAmount;
        this.AfterDiscountPayableAmount = Number(this.SelectedEventDetails.BookedSlots * this.SelectedEventDetails.SelectePrice) - (this.CouponAmount);
      }
      else {
        this.CouponAmount = 0;
        this.AfterDiscountPayableAmount = Number(this.SelectedEventDetails.BookedSlots * this.SelectedEventDetails.SelectePrice) - (this.CouponAmount);
        this.CouponCodeMessage = "This Promo Code is not valid!";
        setTimeout(() => { this.ShowPromoCode = false; }, 1000);
      }
      this.ShowPromoCode = true;
    })
  }

  onCheckout() {
    if (this.UserDetails.FullName != '' && this.UserDetails.FullName != undefined
      && this.UserDetails.Gender != '' && this.UserDetails.Gender != undefined
      && this.UserDetails.Contact != '' && this.UserDetails.Contact != undefined
      && this.UserDetails.Email != '' && this.UserDetails.Email != undefined) {
      if (!this.ValidateEmail(this.UserDetails.Email)) {
        this.errorMessage = "Please check Mobile or Email";
      }
      else {
        if (this.UserDetails.Contact.length !== 10) {
          this.errorMessage = "Please check Mobile or Email";
        }
        else {
          this.APIPaymentDetails = {
            "Name": this.UserDetails.FullName,
            "Email": this.UserDetails.Email,
            "Phone": this.UserDetails.Contact,
            "Amount": this.AfterDiscountPayableAmount
          }

          this.modalRef = this.modalService.open(LoaderComponent, { ariaLabelledBy: 'modal-basic-title' });
          this._userService.add('InstamojoPaymnet/CreatePaymentOrder', this.APIPaymentDetails).subscribe((response) => {
            localStorage.setItem('UserDetails', JSON.stringify(this.UserDetails));
            if (this.CouponAmount == null) {
              this.CouponAmount = 0;
            }

            const TotalPrice = Number(this.SelectedEventDetails.TravelMode.Price) * Number(this.SelectedEventDetails.BookedSlots);
            const PaidAmount = (Number(this.SelectedEventDetails.SelectePrice) * Number(this.SelectedEventDetails.BookedSlots)) - Number(this.CouponAmount);

            let PaymentDetails = {
              "PromoCode": this.CouponCode,
              "Total": TotalPrice,
              "SubTotal": Number(this.SelectedEventDetails.SelectePrice) * Number(this.SelectedEventDetails.BookedSlots),
              "Discount": Number(this.CouponAmount),
              "PaymentToPay": PaidAmount,
              "BalanceDue": Number(TotalPrice) - (Number(this.SelectedEventDetails.SelectePrice) * Number(this.SelectedEventDetails.BookedSlots)),
              "BookedSlots": Number(this.SelectedEventDetails.BookedSlots)
            }
            localStorage.setItem('PromoCodeDetails', JSON.stringify(PaymentDetails));
            this.modalRef.close();
            window.location.href = response;
          })
        }
      }
    }
    else {
      this.errorMessage = "All the fields are required";
    }
  }

  ValidateEmail(mail: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }
    return (false)
  }

  phoneValidation(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
