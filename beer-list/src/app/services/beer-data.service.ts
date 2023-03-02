import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BeerDataService {
  url = 'https://api.punkapi.com/v2/beers';
  constructor(private http:HttpClient) { }
  public beers() {
    return this.http.get(this.url); 
  }
}
