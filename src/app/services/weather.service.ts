import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { environment as env} from '../../environments/environment.backup'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url:String = environment.urlApiData
  cities:any = []

  constructor(private http:HttpClient) { }

  searchCity(name:string):Observable<any>{
    return this.http.get<any>(`${this.url}${name}&appid=${env.apiKey}`)
  }

  getCity(){
    return this.cities
  }


  addCity(name:any){
      let filt = this.cities.length && this.cities.filter((e:any) => e.name.toUpperCase().includes(name.toUpperCase())).length > 0 ? false : !this.cities.length || this.cities.filter((e:any) => e.name.toUpperCase().includes(name.toUpperCase())).length < 1
      if(filt){
        try {
          this.searchCity(name).subscribe(response => 
            {
              this.cities.push(
                {
                  coord:response.coord,
                  name:response.name,
                  country:response.sys.country,
                  timezone:response.timezone,
                  tempMin:response.main.temp_min,
                  tempMax:response.main.temp_max,
                  tempAve:response.main.temp,
                  visibility:response.visibility,
                  wind:response.wind.speed,
                  weather:response.weather[0].description,
                  icon:environment.urlApiImg+response.weather[0].icon+"@2x.png"
                }
                )
            })
        } catch (error) {
          console.log('no existe')
        }  
      }return filt
  }

  deleteCity(name:any){
    let temp = this.cities.filter((e:any) => !e.name.toUpperCase().includes(name.toUpperCase()))
    this.cities = temp
  }

  getCityDetail(name:any){
    const cityTemp:any = this.cities.filter((e:any) => e.name.toUpperCase().includes(name.toUpperCase()))
    return cityTemp
  }

}
