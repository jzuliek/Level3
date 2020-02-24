import { Injectable } from '@angular/core';
import { StationInfo } from '../interfaces/station-info';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BartService {

  private stationURL = 'http://api.bart.gov/api/stn.aspx?cmd=stns&key=Z2R9-5KQ2-9SYT-DWE9&json=y';
  private departURL = 'http://api.bart.gov/api/etd.aspx?cmd=etd&orig=ALL&key=Z2R9-5KQ2-9SYT-DWE9&json=y';

  private stnInfo;

  private stations: StationInfo[] = [];

  constructor(private http: HttpClient) {
    this.getStation();


  }
  getStation() {
    this.stnInfo = this.http.get(this.stationURL);
    this.stnInfo.subscribe(
      x => {

        for (let stn of x.root.stations.station) {
          let info: StationInfo = {
            name: stn.name,
            abbr: stn.abbr,
            address: stn.address,
            city: stn.city,
            zipcode: stn.zipcode
          }
          this.stations.push(info);
        }
        console.log(this.stations)
      }
    )

  }

  sideMenu(){
    return this.stations;
  }




}
