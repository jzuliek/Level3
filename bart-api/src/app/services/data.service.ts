import { Injectable, RootRenderer } from '@angular/core';
import { Station } from '../interfaces/station';
import { HttpClient } from '@angular/common/http';
import { Departure } from '../interfaces/departure';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  stationURL = "http://api.bart.gov/api/stn.aspx?cmd=stns&key=Z2R9-5KQ2-9SYT-DWE9&json=y";

  town:string;
  address:string;
  city:string; 
  county:string;
  zipcode:string;

  depart: Departure[] = [];

  stations: Station[] = [];

  departure: Departure[] = [];

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(this.stationURL);
  }

  getDepart(url) {
    return this.http.get<any>(url);
  }



  getDestination(url) {
    this.depart.length = 0;
    this.getDepart(url).subscribe(
      x => {
        for (const d of x.root.station[0].etd) {
          let info: Departure =
          {
            destination: d.destination,

            estimate: [],
          }
          for (const e of d.estimate) {
            info.estimate.push(e);
          }

          this.depart.push(info);
        }
      }

      );
      console.log(this.depart);
  }


  getStations() {
    this.stations.length = 0;
    this.getData().subscribe(
      x => {
        for (const s of x.root.stations.station) {
          const info: Station =
          {
            name: s.name,

            abbr: s.abbr,

            address: s.address,

            city: s.city,

            county: s.county,
            
            zipcode: s.zipcode
          };
          this.stations.push(info);
        }
        console.log(this.stations);
      }
    );
  }
}
