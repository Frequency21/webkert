import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Appointment } from 'src/app/models/appointment.model';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { getAppointmentForm } from 'src/app/shared/forms/appointment.form';
import { AppointmentStateType, AppointmentStateTypeLabelMapping } from 'src/app/models/appointment-statetype.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  appointment: Appointment;
  form: FormGroup = getAppointmentForm();
  public AppointmentStateTypeLabelMapping = AppointmentStateTypeLabelMapping;
  states = Object.values(AppointmentStateType).filter(val => typeof val === 'number');

  constructor(private service: FbBaseService<Appointment>, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.service.getById('appointments', params?.id).subscribe(res => {
      this.appointment = res;
      this.patchForm();
    });
  }

  patchForm() {
    Object.entries(this.appointment).forEach(item => {
      if (item && item[1] && Array.isArray(item[1])) {
        (this.form.get(item[0]) as FormArray).clear();
        for (let i = 0; i < item[1].length; ++i) {
          if (typeof item[1][i] === 'object') {
            let formGroup = new FormGroup({});
            Object.entries(item[1][i]).forEach((attr) => {
              formGroup.addControl(attr[0], new FormControl(attr[1]));
            });
            (this.form.get(item[0]) as FormArray).push(formGroup);
          } else {
            (this.form.get(item[0]) as FormArray).push(new FormControl(item[1][i]));
          }
        }
      }
    });
    this.form.patchValue(this.appointment);
  };


  get getRelatedEntities(): FormArray {
    return this.form.get('relatedEntities') as FormArray;
  }

  get getContactMediums(): FormArray {
    return this.form.get('contactMediums') as FormArray;
  }

  addMedium() {
    let formGroup = new FormGroup({});
    formGroup.addControl('name', new FormControl());
    formGroup.addControl('value', new FormControl());
    this.appointment.contactMediums.push({ name: '', value: '' });
    (this.form.get('contactMediums') as FormArray).push(formGroup);
  }

  removeMedium(i: number) {
    let contactMediums = this.form.get('contactMediums') as FormArray;
    contactMediums.removeAt(i);
    this.appointment.contactMediums.splice(i, 1);
  }

  addParticipant() {
    this.appointment.relatedEntities.push('');
    (this.form.get('relatedEntities') as FormArray).push(new FormControl('', Validators.required));
  }

  removeParticipant() {
    let relatedEntities = this.form.get('relatedEntities') as FormArray;
    relatedEntities.removeAt(relatedEntities.length - 1);
    this.appointment.relatedEntities.pop();
  }

  back() {
    this.location.back();
  }

  submit() {
    if (this.form.valid) {
      let appointment: Appointment = this.form.value;
      appointment.lastUpdate = new Date();
      this.service.update('appointments', this.appointment.id, appointment).then(console.log);
      this.back();
    }
  }

  log(): void {
    console.log(this.form.value);
  }

}
