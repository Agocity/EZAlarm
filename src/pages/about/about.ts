import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { Geolocation } from '@ionic-native/geolocation';

import { HomePage } from '../home/home';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  src1: string;
  on1: boolean;
  src2: string;
  on2: boolean;

  constructor(private geolocation: Geolocation, private vibration: Vibration, public navCtrl: NavController) {
    this.src1 = "assets/images/on.png"
    this.on1 = true;
    this.src2 = "assets/images/on.png"
    this.on2 = true;

  }
switch1(){
  if (this.on1){
    this.src1 ="assets/images/off.png"
    this.on1= false;
  }else{
this.src1 ="assets/images/on.png"  
this.on1= true;
  }
}

switch2(){
  if (this.on2){
    this.src2 ="assets/images/off.png"
    this.on2= false;
  }else{
this.src2 ="assets/images/on.png"  
this.on2= true;
  }
}
  home() {
      this.navCtrl.popToRoot(HomePage)

    }

  vibrate() {
    this.vibration.vibrate(3000)
  }










//  distance(){
//    let usersLocation;
// this.geolocation.getCurrentPosition().then((position) => {
//
//    usersLocation = { lat :position.coords.latitude ,  lng : position.coords.longitude }
//    locations.map((location) => {
//
//     let placeLocation = {
//       lat: location.latitude,
//       lng: location.longitude
//     };
//
//     location.distance = this.getDistanceBetweenPoints(
//         usersLocation,
//         placeLocation,
//         'miles'
//     ).toFixed(2);
//   });
//
// });
//
// }
}
