import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NguCarouselModule } from '@ngu/carousel';
import { ToastrModule } from 'ngx-toastr';

import { UserModule } from './user-module/user.module';
import { AdminModule } from './admin-module/admin.module';

import { AppRoutingModule } from './app.routing';

import { MatTabsModule, MatDatepickerModule, MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LoaderService } from './_common/loader.service';
import { LoaderComponent } from './_common/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    NguCarouselModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right', preventDuplicates: true, }),
    MatTabsModule, MatDatepickerModule, MatButtonModule,
  ],

  providers: [
    LoaderService
  ],

  bootstrap: [AppComponent],
  entryComponents: [LoaderComponent],
})
export class AppModule { }
