import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule
  ]
})
export class AddModule { }
