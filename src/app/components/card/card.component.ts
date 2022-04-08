import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '@app/services/weather.service';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() city: any = {}

  constructor(private weatherService: WeatherService, private cardsComponen: CardsComponent) { }

  ngOnInit(): void {
  }

  deleteCity(){
    let card = document.getElementById(this.city.name)
    card?.classList.remove('Container')
    card?.classList.add('ContainerDisabled')
    setTimeout(() => {
      this.weatherService.deleteCity(this.city.name)
      this.cardsComponen.chageDetected()
    }, 500)
  }
}
