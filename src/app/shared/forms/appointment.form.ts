import { FormArray, FormControl, FormGroup } from "@angular/forms";


export function getAppointmentForm(): FormGroup {
  return new FormGroup({
    category: new FormControl(),
    description: new FormControl(),
    lastUpdate: new FormControl(),
    status: new FormControl(),
    validFor: new FormGroup({
      startDate: new FormControl(),
      endDate: new FormControl()
    }),
    contactMediums: new FormArray([]),
    relatedEntities: new FormArray([]),
    relatedPlace: new FormControl()
  })
}