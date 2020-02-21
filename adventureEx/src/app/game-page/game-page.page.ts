import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SceneFace } from '../interfaces/scene-face';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.page.html',
  styleUrls: ['./game-page.page.scss'],
})
export class GamePagePage implements OnInit {

  constructor(private dService:DataService) { }

  displayScene:SceneFace;

  ngOnInit() {
    this.displayScene = this.dService.getFirstScene();
    console.log(this.displayScene);
  }

  nextScene(id){
    console.log(id);
    this.displayScene = this.dService.nextScene(id);

  }


}
