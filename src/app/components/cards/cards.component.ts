import { Component, OnInit } from '@angular/core';
import { City } from '@app/models/city';
import { WeatherService } from '@app/services/weather.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cities: City[] = []

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    const response = this.weatherService.getCity()
    this.cities = response
  }

  chageDetected(){
    const response = this.weatherService.getCity()
    this.cities = response
  }
}
