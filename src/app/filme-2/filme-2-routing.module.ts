import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmeListComponent2 } from './filme-list-2/filme-2-list.component';


const routes: Routes = [
  {path: 'filmes-2', component : FilmeListComponent2}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmeRoutingModule2 { }
