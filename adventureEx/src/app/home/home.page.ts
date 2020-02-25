import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //gsx$id
  //gsx$scene
  //gsx$choice1
  //gsx$choice2
  //gsx$result1 
  //gsx$result2
  //gsx$ending

  constructor(private dService: DataService) {
    dService.playMusic();

  }

  play(){
   this.dService.playMusic();
  }
  stop(){
    this.dService.stopM();
  }


}

/*

    dService.getData().subscribe(x => {
      for(let s of x.feed.entry){
        let nFO ={
          scene: s.gsx$scene.$t,
          option1: s.gsx$choice1.$t,

        };
        this.myScenes.push(nFO);
        //console.log(this.myScenes);

        
  
        dService.getEndings().subscribe( e =>{
          for(let i of e. )
        })
        
      }
    }
    )
    dService.getEndings().subscribe(e => {
      for (let i of e.feed.entry){
        let end ={
          endID: i.gsx$id.$t,
          endingS: i.gsx$endingscene.$t,
          endType: i.gsx$endingtype.$t,
        };
        this.endings.push(end);
        console.log(this.endings)
      }
    })

*/
