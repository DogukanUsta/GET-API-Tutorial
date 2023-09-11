import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient  ) { }


  getweather(city: string, units:string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ab31cb05e9cafee2846195e86d9518a4&units=' + units);
  }
}
