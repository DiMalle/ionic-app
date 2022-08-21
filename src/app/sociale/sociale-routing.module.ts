import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialePage } from './sociale.page';

const routes: Routes = [
  {
    path: '',
    component: SocialePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialePageRoutingModule {}
