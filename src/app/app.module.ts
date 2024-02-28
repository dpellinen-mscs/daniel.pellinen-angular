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
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



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
    Ex2eCountriesComponent
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
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [CountriesService, StatesProvincesService, SubregionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
