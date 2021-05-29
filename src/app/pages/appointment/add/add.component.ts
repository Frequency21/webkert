import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MatDialog } from "@angular/material/dialog";
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { getAppointmentForm } from 'src/app/shared/forms/appointment.form';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { AppointmentStateType, AppointmentStateTypeLabelMapping } from 'src/app/models/appointment-statetype.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form: FormGroup = getAppointmentForm();
  appointments: Observable<Appointment[]>;
  first: Appointment;
  states = Object.values(AppointmentStateType).filter(val => typeof val === 'number');
  public AppointmentStateTypeLabelMapping = AppointmentStateTypeLabelMapping;

  constructor(private service: FbBaseService<Appointment>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }


  getAll() {
    this.appointments = this.service.getAll('appointments');
    this.appointments.subscribe(res => {
      this.first = res[1];

      Object.entries(this.first).forEach(item => {
        if (item && item[1] && Array.isArray(item[1])) {
          (this.form.get(item[0]) as FormArray).clear();
          for (let i = 0; i < item[1].length; ++i) {
            (this.form.get(item[0]) as FormArray).push(new FormControl(item[1][i]));
          }
        }
      });

      this.form.patchValue(this.first);

    });
  }

  get getRelatedEntities(): FormArray {
    return this.form.get('relatedEntities') as FormArray;
  }
  
  addParticipant() {
    this.first.relatedEntities.push('');
    (this.form.get('relatedEntities') as FormArray).push(new FormControl('', Validators.required));
  }

  removeParticipant() {
    let relatedEntities = this.form.get('relatedEntities') as FormArray;
    relatedEntities.removeAt(relatedEntities.length - 1);
    this.first.relatedEntities.pop();
    console.log(this.first.relatedEntities);
  }

  log(): void {
    console.log(this.form.value);
  }

}
