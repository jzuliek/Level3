import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SceneFace } from '../interfaces/scene-face';
import { Endings } from '../interfaces/endings';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.page.html',
  styleUrls: ['./game-page.page.scss'],
})
export class GamePagePage implements OnInit {

  displayScene: SceneFace;
  displayEnd: Endings;
  endBool: boolean = false;

  constructor(private dService:DataService) { }


  ngOnInit() {
    this.displayScene = this.dService.getFirstScene();
  }

  nextScene(id:number){
    console.log(id);
    if( this.displayScene.ending === 't'){
      this.endBool = true;
      this.displayEnd = this.dService.getEndscene(id);
    }
    this.displayScene = this.dService.nextScene(id);

  }


}
