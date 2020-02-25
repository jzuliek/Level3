import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BartService } from './services/bart.service';
import { StationInfo } from './interfaces/station-info';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedIndex = 0;

    name;
    abbr;
    address;
    city;
    county;
    zipcode;
  
  stationName: StationInfo []=[];

  public appPages = [
    {
      title: 'Inbox',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'Outbox',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private bService: BartService,
    
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  setStation(abbr){
    let departURL1 = 'http://api.bart.gov/api/etd.aspx?cmd=etd&orig=';
    let departURL2 = abbr;
    let departURL3 = '&key=Z2R9-5KQ2-9SYT-DWE9&json=y';
    let departURL = departURL1+departURL2+departURL3;
    console.log(departURL);
   
  }

  ngOnInit() {
    this.stationName = this.bService.sideMenu();
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
