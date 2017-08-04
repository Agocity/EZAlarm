webpackJsonp([0],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutPage = (function () {
    function AboutPage(geolocation, vibration, navCtrl) {
        this.geolocation = geolocation;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.src1 = "assets/images/on.png";
        this.on1 = true;
        this.src2 = "assets/images/on.png";
        this.on2 = true;
    }
    AboutPage.prototype.switch1 = function () {
        if (this.on1) {
            this.src1 = "assets/images/off.png";
            this.on1 = false;
            __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* global */].notification = false;
        }
        else {
            this.src1 = "assets/images/on.png";
            this.on1 = true;
            __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* global */].notification = true;
        }
    };
    AboutPage.prototype.switch2 = function () {
        if (this.on2) {
            this.src2 = "assets/images/off.png";
            this.on2 = false;
            __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* global */].vibration = false;
        }
        else {
            this.src2 = "assets/images/on.png";
            this.on2 = true;
            __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* global */].vibration = true;
        }
    };
    AboutPage.prototype.home = function () {
        this.navCtrl.popToRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    AboutPage.prototype.vibrate = function () {
        this.vibration.vibrate(3000);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/Gio/IonicProjects/EzStop/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar hideBackButton color ="good">\n    <ion-title style= "text-align: center;">\n     Setting\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content style= "background-color: #f4f4f4 !important;" padding>\n\n    <ion-item color= "light" style= "border-style: solid; border-width: 0px 0px 1px 0px; border-color: #4DC68F;  padding: 0px 0px 20px 0px;" large>\n      <ion-label color= "grey" style= "font-size: 26px;"><b>Notifications</b>   \n        <img src={{src1}} (click)= "switch1()" style= "float: right; width: 80px;" >\n</ion-label>\n    </ion-item>\n    \n\n    <ion-item color= "light" style= "border-style: solid; border-width: 0px 0px 1px 0px; border-color: #4DC68F;  padding: 20px 0px 20px 0px;" large>\n      <ion-label color= "grey" style= "font-size: 26px;"><b>Vibration</b>  \n        <img src={{src2}} (click)= "switch2()" style= "float: right; width: 80px;" >\n</ion-label>\n      <img src= "assets/images/group.png" style= "width: 80px;" id="button2">\n\n    </ion-item>\n\n\n\n   <!-- <br/><ion-buttons large>\n     <button color ="good" ion-button (click)="vibrate()" block>Vibrate Test</button>\n   </ion-buttons> -->\n   <button ion-button (click)="home()" id="click1"  color="good" ><img src= "assets/images/search2.png" style= "width: 30px; height: 30px;"> </button>\n\n   \n   <!-- <img src= "assets/images/group.png" style= "width: 80px;" id="button1"> -->\n\n    <!-- <img src= "assets/images/group.png" style= "width: 80px;" id="button2"> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Gio/IonicProjects/EzStop/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return global; });
var global = {
    hidden: false,
    finaldestination: "",
    notification: true,
    vibration: true,
    destination: null
};
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetAlarmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_geolocation__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_global__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { LocationTracker } from '../../providers/location-tracker/location-tracker';




/**
 * Generated class for the SetAlarmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SetAlarmPage = (function () {
    function SetAlarmPage(backgroundGeolocation, vibration, alertCtrl, alerCtrl, navCtrl, navParams, platform, geolocation, nativeGeocoder) {
        this.backgroundGeolocation = backgroundGeolocation;
        this.vibration = vibration;
        this.alertCtrl = alertCtrl;
        this.alerCtrl = alerCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.gender = "f";
        this.radius = 100;
        this.destination = navParams.get('destination');
        console.log(this.destination);
        this.platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Geofence */].initialize().then(function () { return console.log('Geofence Plugin Ready'); }, function (err) { return console.log(err); });
        });
    }
    SetAlarmPage.prototype.reverseLocation = function () {
        var _this = this;
        this.nativeGeocoder.forwardGeocode(this.destination)
            .then(function (coordinates) {
            _this.setGeofence(_this.radius, coordinates);
            __WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* global */].hidden = true;
            __WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* global */].finaldestination = _this.destination;
            _this.navCtrl.popToRoot();
        })
            .catch(function (error) {
            __WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* global */].hidden = true;
            __WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* global */].finaldestination = _this.destination;
            _this.navCtrl.popToRoot();
        });
    };
    SetAlarmPage.prototype.home = function () {
        this.navCtrl.pop(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    SetAlarmPage.prototype.setting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__about_about__["a" /* AboutPage */]);
    };
    SetAlarmPage.prototype.setGeofence = function (value, coordinates) {
        var _this = this;
        console.log("hi");
        var location = coordinates;
        console.log(location.longitude);
        console.log(location.latitude);
        // this.reverseLocation();
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true
        }).then(function (resp) {
            __WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* global */].destination = resp;
            var longitude = location.longitude;
            var latitude = location.latitude;
            var radius = value;
            var fence;
            if (__WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* global */].notification && __WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* global */].vibration) {
                fence = {
                    id: "myGeofenceID1",
                    latitude: latitude,
                    longitude: longitude,
                    radius: radius,
                    transitionType: 1,
                    notification: {
                        id: 1,
                        title: 'ALERT',
                        text: '!!YOU ARE IN NEAR PROXIMITY OF YOUR STOP!!',
                        openAppOnClick: true
                    }
                };
            }
            else if (__WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* global */].notification) {
                fence = {
                    id: "myGeofenceID1",
                    latitude: latitude,
                    longitude: longitude,
                    radius: radius,
                    transitionType: 1,
                    notification: {
                        id: 1,
                        title: 'ALERT',
                        text: '!!YOU ARE IN NEAR PROXIMITY OF YOUR STOP!!',
                        openAppOnClick: true
                    }
                };
            }
            else {
                fence = {
                    id: "myGeofenceID1",
                    latitude: latitude,
                    longitude: longitude,
                    radius: radius,
                    transitionType: 1
                };
            }
            __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Geofence */].addOrUpdate(fence).then(function () { return _this.success = true; }, function (err) { return _this.error = "Failed to add or update the fence."; });
            //     Geofence.onTransitionReceived().subscribe(resp => {
            //       this.vibration.vibrate(3000)
            //    SMS.send('3239897826', 'Your stop is in close proximity!!!');
            //  });
            if (__WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* global */].vibration) {
                //vibration logic
                __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Geofence */].onTrasitionReceived().then(function () {
                    for (var i = 0; i < 5; i++) {
                        setTimeout(function () {
                            _this.vibration.vibrate(1000);
                        }, 5000);
                    }
                });
            }
            __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Geofence */].addOrUpdate(fence).then(function () { return _this.success = true; }, function (err) { return _this.error = "Failed to add or update the fence."; });
            //     Geofence.onTransitionReceived().subscribe(resp => {
            //       this.vibration.vibrate(3000)
            //    SMS.send('3239897826', 'Your stop is in close proximity!!!');
            //  });
        }).catch(function (error) {
            _this.error = error;
        });
    };
    SetAlarmPage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'New Friend!',
            message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
            buttons: ['Ok']
        });
        alert.present();
    };
    //  start(){
    //   this.locationTracker.startTracking();
    // }
    //
    // stop(){
    //   this.locationTracker.stopTracking();
    // }
    SetAlarmPage.prototype.showConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: 'You have set your alarm!',
            message: '',
            buttons: [
                {
                    text: 'Close',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    SetAlarmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SetAlarmPage');
    };
    return SetAlarmPage;
}());
SetAlarmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-set-alarm',template:/*ion-inline-start:"/Users/Gio/IonicProjects/EzStop/src/pages/set-alarm/set-alarm.html"*/'<!--\n  Generated template for the SetAlarmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color ="good">\n    <ion-title>SetAlarm</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style= "background-color: #f4f4f4 !important;" padding class="page">\n  <!-- <img src= "assets/images/Tab.png" style= "width: 80px;" id="button"> -->\n<img src= "assets/images/logo.png" style= "width: 100px;" id="cta">\n\n  <br/><br/><ion-card-header color="great" style= "text-align: center; font-weight: bold;">\n    <h5>Your destination is:</h5>\n  </ion-card-header>\n   \n  <ion-card-header style= "text-align: center; ">\n    <h3>{{destination}}</h3>\n    <button ion-button large id="cta" (click)="reverseLocation()" color="good" style= "font-size: 19px; width: 75%; height: 50px;">Set/1 Mile</button>\n\n  </ion-card-header>\n\n\n\n  <!-- <br/><br/><div class="bottom-container">\n     <ion-item>\n       <ion-range [(ngModel)]="radius" #radiusVal min="0" max="200" color="primary" pin="true" snaps="true" step="50">\n       </ion-range>\n     </ion-item> -->\n\n     <!-- <button ion-button (click)="home()" id="click1"  color="good"><img src= "assets/images/search2.png" style= "width: 30px; height: 30px;"> </button>\n\n     <button ion-button  (click)="setting()" id="click2" color="good"><img src= "assets/images/setting.png" style= "width: 30px; height: 30px;"></button> -->\n   \n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Gio/IonicProjects/EzStop/src/pages/set-alarm/set-alarm.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
], SetAlarmPage);

//# sourceMappingURL=set-alarm.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(396);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_set_alarm_set_alarm__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_active_active__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_vibration__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_background_geolocation__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_geocoder__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_set_alarm_set_alarm__["a" /* SetAlarmPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_active_active__["a" /* ActivePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_set_alarm_set_alarm__["a" /* SetAlarmPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_active_active__["a" /* ActivePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__["a" /* Keyboard */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, geolocation) {
        this.geolocation = geolocation;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Gio/IonicProjects/EzStop/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Gio/IonicProjects/EzStop/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/Gio/IonicProjects/EzStop/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Gio/IonicProjects/EzStop/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivePage = (function () {
    function ActivePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ActivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivePage');
    };
    ActivePage.prototype.removeFence = function () {
        __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Geofence */].removeAll();
        this.navCtrl.popToRoot();
    };
    return ActivePage;
}());
ActivePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-active',template:/*ion-inline-start:"/Users/Gio/IonicProjects/EzStop/src/pages/active/active.html"*/'<!--\n  Generated template for the ActivePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>active</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page">\n  <div class="loader"></div>\n\n  <div class="bottom-container">\n      <ion-label color="secondary" id="lbl">MONITORING CURRENTLY ACTIVATED</ion-label>\n    <button ion-button large outline block (click)="removeFence()" id="cta" color="primary">Stop Alert</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Gio/IonicProjects/EzStop/src/pages/active/active.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ActivePage);

//# sourceMappingURL=active.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__set_alarm_set_alarm__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_global__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = HomePage_1 = (function () {
    function HomePage(keyboard, geolocation, vibration, navCtrl, platform, nativeGeocoder) {
        var _this = this;
        this.keyboard = keyboard;
        this.geolocation = geolocation;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.nativeGeocoder = nativeGeocoder;
        this.rootPage = HomePage_1;
        this.hidden = __WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* global */].hidden;
        console.log(__WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* global */].hidden);
        this.keyboardClosed = true;
        keyboard.onKeyboardShow()
            .subscribe(function (data) {
            _this.keyboardClosed = false; //your code goes here
        });
        keyboard.onKeyboardHide()
            .subscribe(function (data) {
            _this.keyboardClosed = true; //your code goes here
        });
        platform.ready().then(function () {
            _this.loadMap();
            _this.moveCamera();
        });
        //  this.moveCamera()
    }
    HomePage.prototype.geofenceDetect = function () {
        this.hidden = true;
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.finaldestination = __WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* global */].finaldestination;
        this.hidden = __WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* global */].hidden;
        console.log(this.hidden);
        console.log(__WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* global */].hidden);
        //         if(global.hidden){
        //           console.log('hi')
        //         this.map.addMarker({
        //    'position': global.destination,
        //    'title': global.finaldestination
        //  })
        //       }
    };
    HomePage.prototype.moveCamera = function () {
        var _this = this;
        this.map.getMyLocation(function (position) {
            console.log(position.latLng.lat + "AND" + position.latLng.lng);
            _this.map.moveCamera({
                'target': position.latLng,
                'zoom': 15,
                'bearing': 140
            });
        }).catch(function (error) {
            console.log("Hi" + error);
        });
    };
    HomePage.prototype.setAlarm = function () {
        var _this = this;
        this.nativeGeocoder.forwardGeocode(this.destination)
            .then(function (coordinates) { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__set_alarm_set_alarm__["a" /* SetAlarmPage */], {
            destination: _this.destination
        }); })
            .catch(function (error) { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__set_alarm_set_alarm__["a" /* SetAlarmPage */], {
            destination: _this.destination
        }); });
        // this.navCtrl.push(SetAlarmPage,{
        //     destination: this.destination
        //   })
    };
    HomePage.prototype.cancel = function () {
        __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Geofence */].removeAll();
        __WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* global */].hidden = false;
        this.hidden = false;
    };
    HomePage.prototype.setting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.vibrate = function () {
        this.vibration.vibrate(3000);
    };
    HomePage.prototype.loadMap = function () {
        var location = new __WEBPACK_IMPORTED_MODULE_2_ionic_native__["d" /* GoogleMapsLatLng */](-34.9290, 138.6010);
        this.geolocation.getCurrentPosition().then(function (position) {
            location = new __WEBPACK_IMPORTED_MODULE_2_ionic_native__["d" /* GoogleMapsLatLng */](position.coords.latitude, position.coords.longitude);
            console.log(position.coords.latitude);
        }).catch(function (error) { return console.log(error); });
        this.map = new __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* GoogleMap */]('map', {
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
        this.map.on(__WEBPACK_IMPORTED_MODULE_2_ionic_native__["c" /* GoogleMapsEvent */].MAP_READY).subscribe(function () {
            console.log('Map is ready!');
        });
    };
    HomePage.prototype.checkdistance = function () {
        var temp = this.destination.split(",");
        var lat2 = temp[0];
        var lon2 = temp[1];
        this.geolocation.getCurrentPosition().then(function (resp) {
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    HomePage.prototype.getDistance = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    HomePage.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    return HomePage;
}());
HomePage = HomePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'pafe-home',template:/*ion-inline-start:"/Users/Gio/IonicProjects/EzStop/src/pages/home/home.html"*/'\n<ion-header>\n\n</ion-header>\n\n<ion-content style= "background-color: #4DC68F !important;">\n  <div id="map" style= "height: 100%; ">\n  <ion-searchbar (search)="setAlarm()" [(ngModel)] = "destination" placeholder="Set your destination" autocomplete= "on"></ion-searchbar>\n\n  <button ion-button (click)="setting()" id="click2" *ngIf="keyboardClosed && !hidden" color="good"><img src= "assets/images/setting.png" style= "width: 30px; height: 30px;"></button>\n <button ion-button (click)="moveCamera()" id="click3" *ngIf= "keyboardClosed" color="good"><img src= "assets/images/location.png" style= "width: 30px; height: 30px;"></button>\n\n <div style= "padding-top: 79%;" *ngIf= "hidden" > <ion-card style="width: 95%;" id="cta">\n  <ion-card-content >\n   <h2>Destination: {{finaldestination}}</h2>\n  </ion-card-content>\n</ion-card>\n<img src="assets/images/cancel.png" (click)="cancel()" style="height: 43px;" id="cta">\n</div>\n  </div></ion-content>'/*ion-inline-end:"/Users/Gio/IonicProjects/EzStop/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__["a" /* Vibration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__["a" /* Vibration */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" && _f || Object])
], HomePage);

var HomePage_1, _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=home.js.map

/***/ })

},[391]);
//# sourceMappingURL=main.js.map