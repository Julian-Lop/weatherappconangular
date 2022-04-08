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
    if(this.name.length>0){
      const city = {name:''}
      city.name = this.name

      let verificar:any = this.weatherService.addCity(this.name)
      if(!verificar ){
        alert('ya existe')
      }
      this.name = ''
    }
  }

}
