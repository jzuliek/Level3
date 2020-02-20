import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamePagePage } from './game-page.page';

const routes: Routes = [
  {
    path: '',
    component: GamePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamePagePageRoutingModule {}
