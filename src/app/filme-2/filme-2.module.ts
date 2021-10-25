import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeRoutingModule2 } from './filme-2-routing.module';
import { FilmeListComponent2 } from './filme-list-2/filme-2-list.component';


@NgModule({
  declarations: [
   FilmeListComponent2
  ],
  imports: [
    CommonModule,
    FilmeRoutingModule2
  ],
  exports: [
    FilmeListComponent2,

  ]
})
export class FilmeModule2 { }
