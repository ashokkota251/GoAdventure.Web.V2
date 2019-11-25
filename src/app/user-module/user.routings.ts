import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  HomeComponent,
  EventDetailsComponent,
  CalendarsComponent,
  PaymentStatusComponent, CheckoutComponent,
  TermsConditionsComponent, PrivacyPolicyComponent, CancellationPolicyComponent,
  AllEventsComponent, GoBackpakingComponent, GoHimalayaComponent, GoInternationalComponent, GoWeekendComponent, GoCustomiseComponent,
  BlogComponent, BlogDetailsComponent, VideoLogComponent,
  ReachUsComponent,
  SocialMediaCustomerQueryComponent
} from './_components/index';
import { NewYearTripComponent } from './_components/new-year-trip/new-year-trip.component';


const userRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'event-details/:id', component: EventDetailsComponent },
  { path: 'calendar', component: CalendarsComponent },
  { path: 'payment-status/:payment_id/:payment_status/:id/:transaction_id', component: PaymentStatusComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'cancellation-policy', component: CancellationPolicyComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'all-events', component: AllEventsComponent },
  { path: 'go-backpacking', component: GoBackpakingComponent },
  { path: 'go-himalaya', component: GoHimalayaComponent },
  { path: 'go-international', component: GoInternationalComponent },
  { path: 'go-weekend', component: GoWeekendComponent },
  { path: 'go-customise', component: GoCustomiseComponent },
  { path: 'go-all-events', component: AllEventsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-details/:id', component: BlogDetailsComponent },
  { path: 'video-log', component: VideoLogComponent },
  { path: 'reach-us', component: ReachUsComponent },
  { path: 'social-media-customer-query', component: SocialMediaCustomerQueryComponent },
  { path: 'new-year-trips', component:NewYearTripComponent},

  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRountingModule { }
