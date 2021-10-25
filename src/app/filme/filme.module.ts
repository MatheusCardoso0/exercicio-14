import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeRoutingModule } from './filme-routing.module';
import { FilmeListComponent } from './filme-list/filme-list.component';


@NgModule({
  declarations: [
   FilmeListComponent
  ],
  imports: [
    CommonModule,
    FilmeRoutingModule
  ],
  exports: [
    FilmeListComponent,

  ]
})
export class FilmeModule { }
