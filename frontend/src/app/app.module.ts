import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { NoticeListComponent } from './notice-list/notice-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { EditNoticeComponent } from './edit-notice/edit-notice.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNoticeComponent,
    NoticeListComponent,
    NavComponent,
    EditNoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
