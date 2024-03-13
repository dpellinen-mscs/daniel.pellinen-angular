import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Ex2aCountryComponent } from './components/ex2a-country/ex2a-country.component';
import { Ex2bCountryComponent } from './components/ex2b-country/ex2b-country.component';
import { Ex2cStateProvinceComponent } from './components/ex2c-state-province/ex2c-state-province.component';
import { Ex2dCountriesComponent } from './components/ex2d-countries/ex2d-countries.component';
import { Ex2eCountriesComponent } from './components/ex2e-countries/ex2e-countries.component';
import { Ex2fCountriesComponent } from './components/ex2f-countries/ex2f-countries.component';
import { Ex3aCountriesComponent } from './components/ex3a-countries/ex3a-countries.component';
import { Dpellinen2aTodoComponent } from './components/dpellinen2a-todo/dpellinen2a-todo.component';


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
  // { path: 'todo', component: Dpellinen2aTodoComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
