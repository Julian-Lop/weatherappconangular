import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { City } from '@app/models/city';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url:String = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
  cities:any = []

  constructor(private http:HttpClient) { }

  searchCity(name:string):Observable<any>{
    return this.http.get<any>(`${this.url}${name}&appid=${'9e2d5307af2ae902b6a2fcf74b0a19c5'}`)
  }

  getCity(){
    return this.cities
  }


  addCity(name:any){
      let filt = this.cities.length && this.cities.filter((e:any) => e.name.toUpperCase().includes(name.toUpperCase())).length > 0 ? false : !this.cities.length || this.cities.filter((e:any) => e.name.toUpperCase().includes(name.toUpperCase())).length < 1
      if(filt){
        this.searchCity(name).subscribe(response => 
          {
            this.cities.push(
              {
                name:response.name,
                tempMin:response.main.temp_min,
                tempMax:response.main.temp_max,
                weather:response.weather[0].description,
                icon:"http://openweathermap.org/img/wn/"+response.weather[0].icon+"@2x.png"
              }
              )
            console.log(this.cities)
          })
      }
      console.log('cit--->'+filt)
  }

  deleteCity(name:any){
    let temp = this.cities.filter((e:any) => !e.name.toUpperCase().includes(name.toUpperCase()))
    this.cities = temp
  }

}
