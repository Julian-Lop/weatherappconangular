import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { WeatherService } from '@app/services/weather.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  information: any = {}

  constructor(private route:ActivatedRoute, private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.getCityDetail()
  }

  getCityDetail(){
    const name = this.route.snapshot.paramMap.get('name')
    this.information = this.weatherService.getCityDetail(name)
  }

}
