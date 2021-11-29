import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendbillPageRoutingModule } from './sendbill-routing.module';

import { SendbillPage } from './sendbill.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SendbillPageRoutingModule
  ],
  declarations: [SendbillPage]
})
export class SendbillPageModule {}
