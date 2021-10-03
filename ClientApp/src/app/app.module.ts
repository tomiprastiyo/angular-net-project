import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { AnimalService } from './animal.service';
import { DataTablesModule } from "angular-datatables";

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { GridVeterinarianComponent } from './grid-veterinarian/grid-veterinarian.component';
import { CrudVeterinarianComponent } from './crud-veterinarian/crud-veterinarian.component';
import { GridAnimalComponent } from './grid-animal/grid-animal.component';
import { CrudAnimalComponent } from './crud-animal/crud-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    GridVeterinarianComponent,
    CrudVeterinarianComponent,
    GridAnimalComponent,
    CrudAnimalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [
    AnimalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
