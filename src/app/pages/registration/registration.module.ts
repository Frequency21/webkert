import { RegistrationRoutingModule } from './registration-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule, RegistrationRoutingModule
  ],
  exports: [ RegistrationComponent ]
})
export class RegistrationModule { }
