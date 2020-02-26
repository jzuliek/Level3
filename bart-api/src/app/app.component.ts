import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Station } from './interfaces/station';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  appPages: Station[] = this.dService.stations;


  constructor(
    private dService: DataService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  setStation(abbr:string, name:string, address:string, city:string, county:string, zipcode:string){
    let dUrl1 = 'http://api.bart.gov/api/etd.aspx?cmd=etd&orig=';
    let dUrl2 = abbr;
    let dUrl3 = '&key=Z2R9-5KQ2-9SYT-DWE9&json=y';
    let dUrl = dUrl1+dUrl2+dUrl3;
    console.log(dUrl);
    this.dService.town = name;
    this.dService.address = address;
    this.dService.city = city; 
    this.dService.county = county;
    this.dService.zipcode = zipcode;
    console.log(this.dService.town);
    this.dService.getDestination(dUrl);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.name.toLowerCase() === path.toLowerCase());
    }
  }
}
