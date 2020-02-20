import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePagePageRoutingModule } from './game-page-routing.module';

import { GamePagePage } from './game-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePagePageRoutingModule
  ],
  declarations: [GamePagePage]
})
export class GamePagePageModule {}
