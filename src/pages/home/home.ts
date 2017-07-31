import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';
import { Vibration } from '@ionic-native/vibration';
import { Geolocation } from '@ionic-native/geolocation';
import { Geofence, SMS} from 'ionic-native';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

import { SetAlarmPage } from '../set-alarm/set-alarm';
import { AboutPage } from '../about/about';




@Component({
  selector: 'pafe-home',
  templateUrl: 'home.html'
})
export class HomePage {

    map: GoogleMap;
    destination: any;
    public rootPage: any = HomePage;
    hidden: boolean;

    constructor(private geolocation: Geolocation, private vibration: Vibration, public navCtrl: NavController,
      public platform: Platform, private nativeGeocoder: NativeGeocoder) {

        platform.ready().then(() => {
            this.loadMap();
        });
          this.geofenceDetect();
    }

    geofenceDetect(){
      // if(Geofence.getWatched().length > 0){
      //   this.hidden = false }else{
      //     this.hidden = true
      //   }
      Geofence.getWatched().then(function (geofencesJson) {
  var geofences = JSON.parse(geofencesJson);
  if(geofences.length > 0){
        this.hidden = false }else{
          this.hidden = true
        }
});
    }


    setAlarm() {
      this.nativeGeocoder.forwardGeocode(this.destination)
        .then((coordinates: NativeGeocoderForwardResult) => this.navCtrl.push(SetAlarmPage,{
          destination: this.destination}))
        .catch((error: any) => this.navCtrl.push(SetAlarmPage,{
          destination: this.destination}));

      // this.navCtrl.push(SetAlarmPage,{
      //     destination: this.destination
      //   })

      }
      cancel(){
        Geofence.removeAll();
        
      }

      setting() {
          this.navCtrl.push(AboutPage)

        }

      vibrate() {
    this.vibration.vibrate(3000)
  }

    loadMap(){

        let location = new GoogleMapsLatLng(-34.9290,138.6010);
            this.geolocation.getCurrentPosition().then((position) => {    //      console.log()
          location = new GoogleMapsLatLng(position.coords.latitude, position.coords.longitude)
          console.log(position.coords.latitude)
        }).catch((error: any) => console.log(error));

        this.map = new GoogleMap('map', {
          'backgroundColor': '#4DC68F',
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': location,
            'zoom': 15.4,
            'bearing': 50,
            'tilt': 30
          }
        });

        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
            console.log('Map is ready!');
        });

    }



    checkdistance() {
    let temp = this.destination.split(",")
    let lat2 = temp[0];
    let lon2 = temp[1];
      this.geolocation.getCurrentPosition().then((resp) => {


    }).catch((error) => {
    console.log('Error getting location', error);
    });







    }
    getDistance(lat1,lon1,lat2,lon2) {
    let R = 6371; // Radius of the earth in km
    let dLat = this.deg2rad(lat2-lat1);
    let dLon = this.deg2rad(lon2-lon1);
    let a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let d = R * c;
    return d;
   }

   deg2rad(deg) {
    return deg * (Math.PI/180)
   }



}