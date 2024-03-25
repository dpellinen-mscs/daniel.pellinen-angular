import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HomeComponent } from './components/home/home.component';
import { Ex2aCountryComponent } from './components/ex2a-country/ex2a-country.component';
import { Ex2bCountryComponent } from './components/ex2b-country/ex2b-country.component';
import { Ex2cStateProvinceComponent } from './components/ex2c-state-province/ex2c-state-province.component';
import { Ex2dCountriesComponent } from './components/ex2d-countries/ex2d-countries.component';
import { Ex2eCountriesComponent } from './components/ex2e-countries/ex2e-countries.component';
import { Ex2fCountriesComponent } from './components/ex2f-countries/ex2f-countries.component';
import { Ex3aCountriesComponent } from './components/ex3a-countries/ex3a-countries.component';
import { Ex3b1RegionsComponent } from './components/ex3b1-regions/ex3b1-regions.component';
import { Dpellinen2aTodoComponent } from './components/dpellinen2a-todo/dpellinen2a-todo.component';
import {SampSubject1Component} from './components/samp-subject1/samp-subject1.component'
import {SampSubject2Component} from './components/samp-subject2/samp-subject2.component'
import {SampSubject0Component} from './components/samp-subject0/samp-subject0.component'
import { Ex3b2CountriesComponent  } from './components/ex3b2-countries/ex3b2-countries.component';
import { Ex3c1Component } from './components/ex3c1/ex3c1.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'ex2a', component: Ex2aCountryComponent },
  { path: 'ex2b', component: Ex2bCountryComponent },
  { path: 'ex2c', component: Ex2cStateProvinceComponent },
  { path: 'ex2d', component: Ex2dCountriesComponent },
  { path: 'ex2e', component: Ex2eCountriesComponent },
  { path: 'ex2f', component: Ex2fCountriesComponent },
  { path: 'ex3a', component: Ex3aCountriesComponent },
  { path: 'ex3b1', component: Ex3b1RegionsComponent },

  { path: 'ex3b1/:region/:subregion', component: Ex3b1RegionsComponent, children: [
    { path: 'ex3b2/:countryId', component: Ex3b2CountriesComponent},
  ]},
  { path: 'samp1', component: SampSubject1Component },
  { path: 'samp2', component: SampSubject2Component },
  { path: 'samp0', component: SampSubject0Component, children: [
    { path: 'samp1', component: SampSubject1Component },
    { path: 'samp2', component: SampSubject2Component },
  ]},

  { path: 'ex3c1', component: Ex3c1Component },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ MatSnackBarModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
