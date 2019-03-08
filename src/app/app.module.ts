import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ImageMainComponent } from './components/image-main/image-main.component';
import { ImageCompComponent } from './components/image-comp/image-comp.component';
import { FavouriteImagesComponent } from './components/favourite-images/favourite-images.component';



@NgModule({
  declarations: [
    AppComponent,
    ImageMainComponent,
    ImageCompComponent,
    FavouriteImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
