import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filme } from 'src/filmes';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor( private http : HttpClient) { 
    
  }

  public tabela = filme;

  getAllFilmes () {
    return this.tabela;
  }

}