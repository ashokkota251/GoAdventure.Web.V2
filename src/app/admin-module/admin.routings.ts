import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AdminHomeComponent,
  EventsListComponent,
  CreateEventComponent,
  EditEventComponent,
  LoginComponent,
  PaymnetlistComponent,
  EventReportComponent,
  AddOfflinePaymentlistComponent,
  AddOfflineQueriesComponent,
  CustomiseEventComponent
} from './_components/index';
import { AuthGuard } from './_services/auth-guard';

const userRoutes: Routes = [
  { path: 'admin', component: AdminHomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'event-list', component: EventsListComponent, canActivate: [AuthGuard] },
  { path: 'create-event', component: CreateEventComponent, canActivate: [AuthGuard] },
  { path: 'edit-event/:id', component: EditEventComponent, canActivate: [AuthGuard] },
  { path: 'customise-event', component: CustomiseEventComponent, canActivate: [AuthGuard] },
  { path: 'payment-list', component: PaymnetlistComponent, canActivate: [AuthGuard] },
  { path: 'event-report', component: EventReportComponent, canActivate: [AuthGuard] },
  { path: 'add-offline-payments', component: AddOfflinePaymentlistComponent, canActivate: [AuthGuard] },
  { path: 'add-offline-queries', component: AddOfflineQueriesComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRountingModule { }
