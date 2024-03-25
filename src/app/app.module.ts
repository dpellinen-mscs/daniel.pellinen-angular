import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Ex2aCountryComponent } from './components/ex2a-country/ex2a-country.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle' ;
import {MatListModule} from '@angular/material/list' ;
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { Dpellinen2aTodoComponent } from './components/dpellinen2a-todo/dpellinen2a-todo.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

//2749 Ex2b
import {CountriesService} from './components/shared/countries.service';
import {StatesProvincesService} from './components/shared/states-provinces.service';
import { Ex2bCountryComponent } from './components/ex2b-country/ex2b-country.component';

//Ex2c
import { Ex2cStateProvinceComponent } from './components/ex2c-state-province/ex2c-state-province.component';

//Ex2d
import { Ex2dCountriesComponent } from './components/ex2d-countries/ex2d-countries.component';

//Ex2e
import { Ex2eCountriesComponent } from './components/ex2e-countries/ex2e-countries.component';
import {SubregionsService} from './components/shared/subregions.service';
import {RegionsService} from './components/shared/regions.service';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ex3aCountriesComponent } from './components/ex3a-countries/ex3a-countries.component';
import { Ex2fCountriesComponent } from './components/ex2f-countries/ex2f-countries.component';
import { Ex3b1RegionsComponent } from './components/ex3b1-regions/ex3b1-regions.component';
import { SampSubject1Component } from './components/samp-subject1/samp-subject1.component';
import { SampSubject2Component } from './components/samp-subject2/samp-subject2.component';
import { SampSubject0Component } from './components/samp-subject0/samp-subject0.component';
import { Ex3b2CountriesComponent } from './components/ex3b2-countries/ex3b2-countries.component';
import { Ex3c1Component } from './components/ex3c1/ex3c1.component';
import { Ex3c2StatesComponent } from './components/ex3c2-states/ex3c2-states.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    Ex2aCountryComponent,
    Dpellinen2aTodoComponent,
    Ex2bCountryComponent,
    Ex2cStateProvinceComponent,
    Ex2dCountriesComponent,
    Ex2eCountriesComponent,
    Ex3aCountriesComponent,
    Ex2fCountriesComponent,
    Ex3b1RegionsComponent,
    SampSubject1Component,
    SampSubject2Component,
    SampSubject0Component,
    Ex3b2CountriesComponent,
    Ex3c1Component,
    Ex3c2StatesComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, // Add HttpClientModule here
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule, 
    MatCardModule, 
    MatButtonToggleModule,
    MatListModule,
  
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule,
    MatButtonModule,
  ],
  providers: [CountriesService, StatesProvincesService, SubregionsService, RegionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
