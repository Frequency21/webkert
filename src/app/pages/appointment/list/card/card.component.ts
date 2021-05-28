import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  appointments: Observable<Appointment[]> = null;

  constructor(private service: FbBaseService<Appointment>, private dialog: MatDialog, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.appointments = this.service.getAll('appointments');
  }

}
