import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmeListComponent2 } from './filme-2/filme-list-2/filme-2-list.component';
import { FilmeListComponent } from './filme/filme-list/filme-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lista-filmes', component: FilmeListComponent },
  { path: 'lista-2-filmes', component: FilmeListComponent2 }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
