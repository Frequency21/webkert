import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private service: FbBaseService<Appointment>, private dialog: MatDialog) { }

  

  ngOnInit(): void { }

}
