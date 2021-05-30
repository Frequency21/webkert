import { Component, OnInit } from '@angular/core';
import { Observable, Timestamp } from 'rxjs';
import { Appointment } from 'src/app/models/appointment.model';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  list: Observable<Appointment[]> = null;
  dataSource: Appointment[] = null;
  displayedColumns: string[] = ['category', 'status', 'startDate', 'endDate', 'description', 'contactMediums', 'relatedEntities', 'lastUpdate', 'actions']

  constructor(private service: FbBaseService<Appointment>, private router: Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAll();
    this.list.subscribe(
      list => {
        this.dataSource = list;
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

  edit(id: string) {
    this.router.navigateByUrl('/appointment/edit/' + id);
  }

  delete(id: string) {
    this.service.delete('appointments', id);
  }

}
