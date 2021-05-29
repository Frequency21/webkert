import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CardComponent } from './card.component';
import { CardRoutingModule } from './card-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DisplayModule } from './display/display.module';
import { AddModule } from '../../add/add.module';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    CardRoutingModule,
    MatDialogModule,
    DisplayModule,
    AddModule
  ],
  providers: [DatePipe]
})
export class CardModule { }
