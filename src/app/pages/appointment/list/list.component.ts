import { Component, OnInit } from '@angular/core';
import { Observable, Timestamp } from 'rxjs';
import { Appointment } from 'src/app/models/appointment.model';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { AppointmentStateType } from 'src/app/models/appointment-statetype.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [DatePipe]
})
export class ListComponent implements OnInit {

  list: Observable<Appointment[]> = null;
  dataSource: Appointment[] = null;
  displayedColumns: string[] = ['category', 'status', 'startDate', 'endDate', 'description', 'contactMediums', 'relatedEntities', 'lastUpdate', 'actions']

  constructor(private service: FbBaseService<Appointment>, private dialog: MatDialog, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAll();
    this.list.subscribe(
      list => {
        this.dataSource = list;
        console.log(list);
      }
    );
  }

  getAll(): void {
    this.list = this.service.getAll('appointments');
  }

  getHourAndMin(t: number): string {
    if (t === 0) return "none"
    return this.datePipe.transform(t, 'shortTime');
  }

}
