import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OsiPageRoutingModule } from './osi-routing.module';

import { OsiPage } from './osi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OsiPageRoutingModule
  ],
  declarations: [OsiPage]
})
export class OsiPageModule {}
