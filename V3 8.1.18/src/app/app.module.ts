import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule }   from '@angular/forms';

import {CalendarModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

import { CountryServiceService } from './country.service';
import { CustomServiceService } from './custom-service.service';
import {MyDataService} from './mydata.service';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { DescriptionComponentComponent } from './description-component/description-component.component';
import { CustomComp1Component } from './custom-comp1/custom-comp1.component';

//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';
import { CreateComponentComponent } from './create-component/create-component.component';


const routes: Routes = [
  { path:'', 
    redirectTo: 'home',
   pathMatch: 'full' },
  { path:'home', 
  component:HomeComponentComponent,
  children:[
      { path:'', redirectTo: 'dashboard', pathMatch: 'full' },
      { path:'dashboard', component: DashboardComponentComponent},
      { path:'details', component: CustomComp1Component},
      { path:'create', component: CreateComponentComponent},
      { path:'description/:id', component: DescriptionComponentComponent}
  ]},
  { path:'**', component:ErrorComponentComponent},

 ];
 

@NgModule({
  declarations: [
    AppComponent,
    CustomComp1Component,
    HomeComponentComponent,
    DashboardComponentComponent,
    ErrorComponentComponent,
    DescriptionComponentComponent,
    CreateComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    CalendarModule,
    ButtonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
   // InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [CustomServiceService,CountryServiceService,MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// "my": "concurrently --kill-others "json-server --watch JSON_DATA\\mydata.json" "ng serve -o"",