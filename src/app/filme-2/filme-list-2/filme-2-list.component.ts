import { FilmeService2 } from './../filme-2.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme-2-list',
  templateUrl: './filme-2-list.component.html',
  styleUrls: ['./filme-2-list.component.css']
})
export class FilmeListComponent2 implements OnInit {
  
  filmes : any = [];  
    
  constructor(private filmeService2 : FilmeService2) {           
    this.getAllFilmes();    
  }
  
  ngOnInit(): void {
  }

  private getAllFilmes() {
    this.filmeService2.getAllFilmes().map(
      (success) => {
        console.log (success);
        this.filmes = success;
      },
      (error)=> {console.log (error)}
    );
  }

  selecionarFilme(url){
    window.open(url, '_blank');
  }

}
