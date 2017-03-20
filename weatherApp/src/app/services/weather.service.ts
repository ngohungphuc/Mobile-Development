import {Injectable,Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
    apiKey:string;
    conditionUrl:string;
    searchUrl:string;
    constructor(public http:Http){
        this.apiKey = 'a909b9c80b657c73';
        //this.conditionUrl = 'http://api.wunderground.com/api/'+ this.apiKey +'/conditions/q/';
        this.conditionUrl = 'http://localhost:8100/api/'+ this.apiKey +'/conditions/q/';
        //this.searchUrl = 'http://autocomplete.wunderground.com/aq=query=';
        this.searchUrl = 'http://localhost:8100/search/aq?query=';
        console.log('Service connect');
    }

    getWeather(zmw){
        console.log(zmw);
        return this.http.get(this.conditionUrl + '/zmw:'+ zmw +'.json')
        .map(res=>res.json());
    }

    searchCities(searchStr){
        console.log(searchStr);
        return this.http.get(this.searchUrl+''+searchStr)
          .map(res=>res.json());
    }
}
