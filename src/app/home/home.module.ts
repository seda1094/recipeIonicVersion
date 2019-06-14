import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { NewServiceService } from '../new-service.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
// import {RecipeListComponent} from '../recipe-list/recipe-list.component';
// import {RecipeDetailsComponent} from '../recipe-details/recipe-details.component';

@NgModule({
  imports: [
    
    HttpClientModule,
    FormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  providers: [NewServiceService],
  declarations: [HomePage,
    // RecipeListComponent,RecipeDetailsComponent
  ]
})
export class HomePageModule {}
