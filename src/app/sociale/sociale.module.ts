import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialePageRoutingModule } from './sociale-routing.module';

import { SocialePage } from './sociale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialePageRoutingModule
  ],
  declarations: [SocialePage]
})
export class SocialePageModule {}
