import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment.model';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: Observable<Appointment[]> = null;
  dataSource: Appointment[] = null;
  displayedColumns: string[] = ['category', 'status', 'startDate', 'endDate', 'description', 'contactMediums', 'relatedEntities', 'lastUpdate']

  constructor(private service: FbBaseService<Appointment>, private dialog: MatDialog) { }

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

}
