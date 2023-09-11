import { WeatherService } from './../weather.service';
import { Component, OnInit  } from '@angular/core';
@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    weather: any;
     temperature?: number = 0;
     feelslike?: number = 0;
     humidity?: number = 0;
     pressure?: number = 0;
     summary?: string = '';
     iconUrl?: string =  'https://openweathermap.org/img/wn/10d@2x.png';
     city:string = 'Ankara';
     units: string = 'imperial' 


    constructor(private weatherservice: WeatherService) {

    }

    ngOnInit(): void {
      this.weatherservice.getweather(this.city, this.units).subscribe({
        
        next: (Response) => {
        console.log(Response);
         this.weather = Response;
         console.log(this.weather);
         this.temperature = this.weather.main.temp;
         this.feelslike= this.weather.main.feels_like;
         this.humidity = this.weather.main.humidity;
         this.pressure = this.weather.main.pressure;
         this.summary = this.weather.weather[0].main;
         this.iconUrl = 'https://openweathermap.org/img/wn/' + this.weather.weather[0].icon + '@2x.png'; 
        },
        
        error: (error) => console.log(error.massage),

        complete: () => console.info('API call completed')

      })
      
    }
}
