import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, Location, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { NgxSummernoteModule } from 'ngx-summernote';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule,
} from '@angular/material';

import { AdminRountingModule } from './admin.routings';
import { AdminService } from './_services/admin.service';
import { AuthGuard } from './_services/auth-guard';

import {
  AdminHomeComponent, NavBarComponent, LoginComponent,
  EventsListComponent, CreateEventComponent, EditEventComponent, CustomiseEventComponent,
  PaymnetlistComponent, EventReportComponent,
  AddOfflinePaymentlistComponent, AddOfflineQueriesComponent, AddOfflineQueriesDialogComponent,
} from './_components/index';


@NgModule({
  imports: [
    CommonModule, FormsModule, NgbModule, HttpClientModule, BrowserAnimationsModule, OwlDateTimeModule, OwlNativeDateTimeModule, NgxSummernoteModule, ChartsModule,

    AdminRountingModule,

    MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
  ],

  declarations: [
    AdminHomeComponent, NavBarComponent, LoginComponent,
    EventsListComponent, CreateEventComponent, EditEventComponent, CustomiseEventComponent,
    PaymnetlistComponent,
    EventReportComponent,
    AddOfflinePaymentlistComponent, AddOfflineQueriesComponent, AddOfflineQueriesDialogComponent
  ],
  providers: [
    AdminService, AuthGuard
  ],
  entryComponents: [AddOfflineQueriesDialogComponent],
})

export class AdminModule { }
