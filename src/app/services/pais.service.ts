import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../model/pais';

const URL= "https://restcountries.eu/rest/v2/region/";
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) { }
  
  getRegion(region:string):Observable<Pais[]>{
    return this.http.get<Pais[]>(URL + region);
  }

  getByCode(code:string):Observable<Pais>{
    return this.http.get<Pais>("https://restcountries.eu/rest/v2/alpha/"+code);
  }
}
