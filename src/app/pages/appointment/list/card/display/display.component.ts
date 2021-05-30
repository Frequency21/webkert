import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment.model';
import { FbBaseService } from 'src/app/services/fb-base.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Input() appointment: Appointment;

  constructor(private service: FbBaseService<Appointment>, private router: Router) { }

  ngOnInit(): void {
  }

  edit(id: string) {
    this.router.navigateByUrl('/appointment/edit/' + id);
  }

  delete(id: string) {
    this.service.delete('appointments', id);
  }

}
