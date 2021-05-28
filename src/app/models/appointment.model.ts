import { AppointmentStateType } from "./appointment-statetype.model";
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface Appointment {
    id: string;
    // üzleti? magán?
    category: string;
    description: string;
    lastUpdate: Timestamp;
    status: AppointmentStateType;
    validFor?: { startDate?: Timestamp, endDate?: Timestamp };

    // telefoncím, email, skypeazonosító, akármi
    contactMediums?: [{ name: string, value: string }];

    // nevek
    relatedEntities?: string[];
    relatedPlace?: string;
}