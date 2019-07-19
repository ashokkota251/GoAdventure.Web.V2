import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'ga-contact-us-page-bottom',
  templateUrl: './contact-us-page-bottom.component.html',
  styleUrls: ['./contact-us-page-bottom.component.css']
})
export class ContactUsPageBottomComponent implements OnInit {
  showConatctUsPopup: boolean = false;
  Query: any = {};
  showError: boolean = false;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }
  openForm() {
    this.showConatctUsPopup = true;
  }

  closeForm() {
    this.showConatctUsPopup = false;
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
      this.showConatctUsPopup = false;
      this._userService.add('UserEvents/SendQueryToAdmin', this.Query).subscribe((response) => {
        this.Query = {};
      });
    }
    else {
      this.showError = true;
    }
  }
}
