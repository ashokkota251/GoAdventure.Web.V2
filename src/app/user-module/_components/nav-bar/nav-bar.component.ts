import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navbarOpen = false;
  isOpenEventsSubMenu:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  openEventsMenu(){
    this.isOpenEventsSubMenu = !this.isOpenEventsSubMenu;
  }
}
