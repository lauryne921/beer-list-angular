import { Component, OnInit } from '@angular/core';
import { BeerDataService } from '../services/beer-data.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  public title: string = "Angular Beer List";
  beers:any; 
  constructor(private beerData:BeerDataService) {
    this.getBeers();
  }

  getBeers() {
      this.beerData.beers().subscribe((data)=>{
      this.beers=data;
    })
  }

  ngOnInit(): void {
  }
}
