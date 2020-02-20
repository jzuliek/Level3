import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url ='https://spreadsheets.google.com/feeds/list/1sI_jjroTBQ7LBTTNS2jZ9Nuhu4K4u7LAmmYoBqPgcIE/1/public/full?alt=json';


  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<any>(this.url);
  }
}
