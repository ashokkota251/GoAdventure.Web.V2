import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../_services/admin.service';

@Component({
  selector: 'ga-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  loading: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router, private _adminService: AdminService) { }

  ngOnInit() {
    localStorage.removeItem('adminUser');
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'admin';
  }

  login() {
    this.loading = true;

    let adminUser = {
      "EmailId": this.model.username,
      "Password": this.model.password
    }
    this._adminService.add('AdminLogin/CheckUser', adminUser).subscribe((response) => {
      if (response != null) {
        localStorage.setItem('adminUser', JSON.stringify(response));
        this.router.navigateByUrl('/admin');
      }
      else {
        alert("Please check your Email Id & Password")
      }
    })
  }
}

