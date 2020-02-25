import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SceneFace } from '../interfaces/scene-face';
import { Endings } from '../interfaces/endings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url ='https://spreadsheets.google.com/feeds/list/1sI_jjroTBQ7LBTTNS2jZ9Nuhu4K4u7LAmmYoBqPgcIE/1/public/full?alt=json';
  private urlE = 'https://spreadsheets.google.com/feeds/list/1sI_jjroTBQ7LBTTNS2jZ9Nuhu4K4u7LAmmYoBqPgcIE/2/public/full?alt=json';
  ///anything marked between notes is new notes and for refrence 
  
  private googleSheet;
  private endSheet;

  private callScene: SceneFace[] =[];
  private endScene: Endings[] = [];

  private audio = new Audio();
  //
  

  constructor(private http: HttpClient) { 
    this.parseData();
    this.getEnd();
    
  }
  //retrieve data from google sheet
 
  
  parseData(){
    this.googleSheet = this.http.get(this.url);
    this.googleSheet.subscribe(
      x=>{
        //begin to parse data
        for (let s of x.feed.entry){
          let info:SceneFace ={
            id: s.gsx$id.$t as number,
            scene: s.gsx$scene.$t,
            choice1: s.gsx$choice1.$t,
            choice2: s.gsx$choice2.$t,
            result1: s.gsx$result1.$t,
            result2: s.gsx$result2.$t,
            ending: s.gsx$ending.$t 
          };
          this.callScene.push(info)
        }

        console.log(this.callScene);
    });   

  }

  getEnd(){
    this.endSheet = this.http.get(this.urlE);
    this.endSheet.subscribe(
      x => {
        for(let e of x.feed.entry){
          let ends: Endings ={
            endId: e.gsx$id.$t as number,
            ending: e.gsx$endingscene.$t,
            endType: e.gsx$endingtype.$t
            
          };
          this.endScene.push(ends);
        }
        console.log(this.endScene);
      })
    
  }


  nextScene(id:number){
    /// might have to -1 if you started at 1
    return this.callScene[id-1];

  }
  getFirstScene():SceneFace{
    return this.callScene[0];
  }

  getEndscene(endId:number){
    return this.endScene[endId-16]

  }

  playMusic(){
    this.audio.src= '../assets/fart.mp3';
    this.audio.autoplay =true;
    
  }
  stopM(){
    
    this.audio.pause();
  }


  
  /////////

  getData(){
    return this.http.get<any>(this.url);
  }
  getEndings(){
    return this.http.get<any>(this.urlE);
    
  }
}
