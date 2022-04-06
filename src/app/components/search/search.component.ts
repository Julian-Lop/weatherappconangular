import { Component, OnInit } from '@angular/core';
import { City } from '@app/models/city';
import { WeatherService } from '@app/services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name:string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const city = new City()
    city.name = this.name

    this.weatherService.addCity(this.name)
    console.log(this.name)
  }

}
