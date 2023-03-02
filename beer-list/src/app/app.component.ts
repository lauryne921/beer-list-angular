import { Component } from '@angular/core';
import { BeerDataService } from './services/beer-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'beer-list';
  beers:any; 
  constructor(private beerData:BeerDataService) {
    this.beerData.beers().subscribe((data)=>{
      console.warn("data",data);
      this.beers=data;
    })
  }
}