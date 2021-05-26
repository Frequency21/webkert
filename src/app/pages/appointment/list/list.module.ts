import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatButtonModule
  ]
})
export class ListModule { }
