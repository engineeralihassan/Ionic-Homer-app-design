import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgainPassPageRoutingModule } from './again-pass-routing.module';

import { AgainPassPage } from './again-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgainPassPageRoutingModule
  ],
  declarations: [AgainPassPage]
})
export class AgainPassPageModule {}
