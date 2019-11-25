import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, Location, PathLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { NguCarouselModule } from '@ngu/carousel';
import { FullCalendarModule } from 'ng-fullcalendar';

import { UserRountingModule } from './user.routings';

import {
  NavBarComponent,
  HomeComponent, CarouselComponent, UpcomingEventsCardComponent, TestimonialComponent, AboutUsComponent,
  FooterComponent,
  EventDetailsComponent,
  CalendarsComponent,
  CheckoutComponent, PaymentStatusComponent,
  TermsConditionsComponent, CancellationPolicyComponent, PrivacyPolicyComponent,
  AllEventsComponent, GoBackpakingComponent, GoHimalayaComponent, GoInternationalComponent, GoWeekendComponent, GoCustomiseComponent,
  BlogComponent, BlogDetailsComponent, VideoLogComponent,
  ReachUsComponent,
  PopularDestinationsComponent, GroupTripsComponent, EventDetailsImageGalleryDialog,
  SocialMediaCustomerQueryComponent
} from './_components/index';

import { UserService } from './_services/user.service';
import { IndianCurrency } from './_pipes/indianCurrency.pipe';
import { Numbers } from './_directives/number';
import { Uppercase } from './_directives/uppercase';
import { GalleryComponent } from './_components/gallery/gallery.component';
import { OurBlogsComponent } from './_components/our-blogs/our-blogs.component';
import { VideoGalleryComponent } from './_components/video-gallery/video-gallery.component';
import { OurLocationComponent } from './_components/our-location/our-location.component';
import { ContactUsPageBottomComponent } from './_components/contact-us-page-bottom/contact-us-page-bottom.component';
import { SafePipe } from './_pipes/safe.pipe';
import { NewYearTripComponent } from './_components/new-year-trip/new-year-trip.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRountingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    NguCarouselModule,
    FullCalendarModule
  ],
  declarations: [
    NavBarComponent,
    HomeComponent, CarouselComponent, UpcomingEventsCardComponent, TestimonialComponent, AboutUsComponent,
    CalendarsComponent,
    EventDetailsComponent, EventDetailsImageGalleryDialog,
    CheckoutComponent, PaymentStatusComponent,
    FooterComponent,
    TermsConditionsComponent, CancellationPolicyComponent, PrivacyPolicyComponent,
    AllEventsComponent, GoBackpakingComponent, GoHimalayaComponent, GoInternationalComponent, GoWeekendComponent,
    BlogComponent, BlogDetailsComponent,
    ReachUsComponent,
    PopularDestinationsComponent, GroupTripsComponent,
    Numbers, Uppercase, IndianCurrency, SafePipe,
    ReachUsComponent, GalleryComponent, OurBlogsComponent, VideoGalleryComponent, OurLocationComponent, ContactUsPageBottomComponent, SocialMediaCustomerQueryComponent, VideoLogComponent, GoCustomiseComponent, NewYearTripComponent
  ,NewYearTripComponent
  ],
  providers: [UserService],
  entryComponents: [
    EventDetailsImageGalleryDialog
  ],
})

export class UserModule { }
