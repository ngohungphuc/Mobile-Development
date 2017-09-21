import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WeatherService} from '../../app/services/weather.service';

/*
  Generated class for the Weather page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers:[WeatherService]
})
export class WeatherPage implements OnInit{
  city:string;
  state:string;
  weather:any[];
  searchStr:string;
  results:any[];
  zmw:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public weatherService:WeatherService) {
    this.city = 'Boston';
    this.state = 'MA';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }


  ngOnInit(){
    this.getDefaultCity();
    this.weatherService.getWeather(this.zmw)
    .subscribe(weather=>{
      this.weather = weather.current_observation;
    });
  }

  getQuery(){
     this.weatherService.searchCities(this.searchStr)
    .subscribe(res=>{
      this.results = res.RESULTS;
      console.log(this.results);
    });

  }

  choseCity(city){
    this.results = [];
     this.weatherService.getWeather(city.zmw)
    .subscribe(weather=>{
      this.weather = weather.current_observation;
    });
  }

  getDefaultCity(){
    this.zmw = '02101.1.99999';
  }
}