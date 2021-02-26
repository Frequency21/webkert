import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatCardModule,
  ],
  exports: [MovieComponent],
})
export class MovieModule { }
