import {Injectable,Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
    apiKey:string;
    conditionUrl:string;
    constructor(public http:Http){
        this.apiKey = 'a909b9c80b657c73';
        this.conditionUrl = 'http://api.wunderground.com/api/'+ this.apiKey +'/conditions/q/';
        console.log('Service connect');
    }

    getWeather(city,state){
        return this.http.get(this.conditionUrl + '/'+ state +'/' + city+'.json')
        .map(res=>res.json());
    }
}
