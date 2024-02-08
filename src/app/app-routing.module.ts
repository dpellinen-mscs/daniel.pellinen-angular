import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Ex2aCountryComponent } from './components/ex2a-country/ex2a-country.component';
import { Ex2bCountryComponent } from './components/ex2b-country/ex2b-country.component';
import { Dpellinen2aTodoComponent } from './components/dpellinen2a-todo/dpellinen2a-todo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'ex2a', component: Ex2aCountryComponent },
  { path: 'ex2b', component: Ex2bCountryComponent },
  // { path: 'todo', component: Dpellinen2aTodoComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
