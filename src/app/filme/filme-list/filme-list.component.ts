import { FilmeService } from './../filme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {
  
  filmes : any = [];  
  filmeSelecionado : any;
    
  constructor(private filmeService : FilmeService) {           
    this.getAllFilmes();    
  }
  
  ngOnInit(): void {
  }

  private getAllFilmes() {
    this.filmeService.getAllFilmes().map(
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
