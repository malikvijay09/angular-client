import { CreatePersonComponent } from './persons/create-person/create-person.component';
import { PersonsListComponent } from './persons/persons-list/persons-list.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'persons', pathMatch: 'full' },
  { path: 'persons', component: PersonsListComponent },
  { path: 'add', component: CreatePersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
