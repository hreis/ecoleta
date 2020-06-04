import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Itens, Ufs } from '../model/Itens';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getItens(): Observable<Itens[]> {

    return this.http.get<Itens[]>(environment.baseURL + 'itens');

  }

  getUfs(): Observable<Ufs[]> {

    return this.http.get<Ufs[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');

  }

  getMuni(): Observable<Ufs[]> {

    return this.http.get<Ufs[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados/RJ/municipios');

  }

  handleSelectedUf(ob) {

    ob.value;



  }

}
