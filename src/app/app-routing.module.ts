import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmeListComponent } from './filme/filme-list/filme-list.component';


const routes: Routes = [
  { path: '', component: FilmeListComponent },
  { path: 'home', component: FilmeListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
