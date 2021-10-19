import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

/* funcion para importar servicios externos */
  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
