import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Input() appointment: Appointment;

  constructor() { }

  ngOnInit(): void {
  }

}
