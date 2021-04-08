import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Appointment } from "../models/appointment.model";

@Injectable({
  providedIn: 'root'
})
export class FbBaseService<T extends {id?: string}> {
  getAll(collectionName: string): Observable<T[]> {
    return this.afs.collection(collectionName).valueChanges() as Observable<T[]>;
  }

  constructor(private afs: AngularFirestore) { }

  get(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }
}
