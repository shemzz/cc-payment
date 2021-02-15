import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutesModule } from './modules/routes.module';

import { AppComponent } from './app.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CardDetailsComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
