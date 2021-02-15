import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailsComponent } from '../card-details/card-details.component';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AppRoutesModule } from './routes.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AppRoutesModule
  ]
})
export class ComponentsModule { }
