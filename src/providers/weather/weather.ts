import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; 

@Injectable()
export class WeatherProvider {

  apiKey = '7dd643b5bcb241e09c9155240181107';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
//    this.url = 'http://api.apixu.com/v1/current.json?key='+this.apikey'&q=Paris';
    this.url = 'http://api.apixu.com/v1/current.json?key='+this.apiKey+'&q=';
    
  }

  getWeather(name, region){
    return this.http.get(this.url+''+name)
      .map(res => res); 

  }

}
