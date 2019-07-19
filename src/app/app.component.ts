import { Component, ViewChild, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxLoadingComponent, ngxLoadingAnimationTypes } from 'ngx-loading';
import { fadeIn } from 'ng-animate';
import { NavigationEnd, Router } from '@angular/router';
import { LoaderService } from './_common/loader.service';

const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#006ddd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  showLoader: boolean;
  constructor(private router: Router, private loaderService: LoaderService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }

}
