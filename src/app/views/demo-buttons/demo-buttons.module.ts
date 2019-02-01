import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoButtonsComponent } from './demo-buttons.component';
import { SharedModule} from '../../shared/shared.module';
import {routingModule} from './demo-buttons.router';

export const routingComponents = [];

@NgModule({
  declarations: [
    DemoButtonsComponent
  ],
  imports: [
    CommonModule,
    routingModule,
    SharedModule
  ],

})
export class DemoButtonsModule {}
