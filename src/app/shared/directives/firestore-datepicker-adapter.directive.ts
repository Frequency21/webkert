import { Directive, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Timestamp } from 'src/app/models/appointment.model';


@Directive({
  selector: '[appFirestoreDatepickerAdapter]',
  providers: [NgModel],
})
export class FirestoreDatepickerAdapterDirective {

  constructor(
    private model: NgModel
  ) { }

  @HostListener('ngModelChange', ['$event'])
  parse(ev): void {
    
    console.log('directive:', ev);

    if (ev instanceof Timestamp) {
      console.log('directive:', ev);
      this.model.valueAccessor.writeValue(ev.toDate());
    }
  }

}