import { Component, ViewChild, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxLoadingComponent, ngxLoadingAnimationTypes } from 'ngx-loading';
import { fadeIn } from 'ng-animate';
import { NavigationEnd, Router } from '@angular/router';
import { LoaderService } from './_common/loader.service';
import { Title, Meta } from '@angular/platform-browser';

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
  constructor(private router: Router,
    private loaderService: LoaderService,
    private titleService: Title,
    private meta: Meta) {
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

    this.titleService.setTitle("Go Adventure");
    this.meta.addTag({ name: 'description', content: 'Go Adventure is the best Travel Partner in Hyderabad which offers Travel solutions for People, one of the best Top Rated Trekking Club' });
    this.meta.addTag({ name: 'copyright', content: 'Go Adventure' });
    this.meta.addTag({ name: 'zipcode', content: '500081' });
    this.meta.addTag({ name: 'state', content: 'Telangana' });
    this.meta.addTag({ name: 'country', content: 'India' });
    this.meta.addTag({ name: 'city', content: 'Hyderabad' });
  }

  onActivate(event: any) {
    window.scroll(0, 0);
  }
}
