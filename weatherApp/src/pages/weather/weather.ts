import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WeatherService} from '../../app/services/weather.service';
import {Observable} from 'rxjs/Observable';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public weatherService:WeatherService) {
    this.city = 'Boston';
    this.state = 'MA';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }


  ngOnInit(){
    this.weatherService.getWeather(this.city,this.state)
    .subscribe(weather=>{
      console.log(weather);
    });
  }
}
