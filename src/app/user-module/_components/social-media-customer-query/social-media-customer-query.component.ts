import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from 'src/app/_common/loader.component';

@Component({
  selector: 'ga-social-media-customer-query',
  templateUrl: './social-media-customer-query.component.html',
  styleUrls: ['./social-media-customer-query.component.css']
})
export class SocialMediaCustomerQueryComponent implements OnInit {
  showConatctUsPopup: boolean = false;
  Query: any = {};
  showError: boolean = false;
  private modalRef: NgbModalRef;

  constructor(private _userService: UserService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  ValidateEmail(mail) {
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

  onSend() {
    if (this.Query.Name != '' && this.Query.Name != undefined && this.Query.Query != '' && this.Query.Query != undefined) {
      this.modalRef = this.modalService.open(LoaderComponent, { ariaLabelledBy: 'modal-basic-title' });
      this._userService.add('UserEvents/SendQueryToAdmin', this.Query).subscribe((response) => {
        this.Query = {};
        this.showConatctUsPopup = false;
        window.location.href = '/';
        this.modalRef.close();
      });
    }
    else {
      this.showError = true;
    }
  }

}
