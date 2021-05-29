import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Timestamp } from '../models/appointment.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FbBaseService<T extends { id?: string }> {

  public static convertDate(firebaseObject: any) {
    if (!firebaseObject) return null;

    for (const [key, value] of Object.entries(firebaseObject)) {

      // covert items inside array
      if (value && Array.isArray(value)) {
        // console.log('inside array', key, value);
        firebaseObject[key] = value.map(item => this.convertDate(item));
      }

      // convert inner objects
      if (value && typeof value === 'object') {
        // console.log('nevermind', key, value);
        firebaseObject[key] = this.convertDate(value);
      }

      // convert simple properties
      if (value && value.hasOwnProperty('seconds')) {
        // console.log(key, value, 'catch ya')
        firebaseObject[key] = (value as Timestamp).toDate();
      }
    }
    return firebaseObject;
  }


  getAll(collectionName: string): Observable<T[]> {
    return this.afs.collection(collectionName).valueChanges().pipe(
      map((data: any) => FbBaseService.convertDate(data))
    ) as Observable<T[]>;
  }

  constructor(private afs: AngularFirestore) { }

  get(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }
}
