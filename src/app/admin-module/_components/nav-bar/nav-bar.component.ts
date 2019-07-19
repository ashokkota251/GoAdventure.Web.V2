import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../_services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ga-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  UserDetails: any = [];
  isOpenEventsSubMenu:boolean=false;

  constructor(private route: ActivatedRoute,
    private router: Router, private _adminService: AdminService) { }

  ngOnInit() {
    this.UserDetails = JSON.parse(this._adminService.getAdminUserDetails());
  }

  Signout() {
    localStorage.removeItem('adminUser');
    this.router.navigateByUrl('/login');
  }

  openProfile(){
    this.isOpenEventsSubMenu = !this.isOpenEventsSubMenu;
  }
}
