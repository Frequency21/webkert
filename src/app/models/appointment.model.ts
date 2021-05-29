import { AppointmentStateType } from "./appointment-statetype.model";

import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;
export { Timestamp };

export interface Appointment {
    id: string;
    // üzleti? magán?
    category: string;
    description: string;
    lastUpdate: Date;
    status: AppointmentStateType;
    validFor?: { startDate?: Date, endDate?: Date };

    // telefoncím, email, skypeazonosító, akármi
    contactMediums?: {name: string, value: string}[];

    // nevek
    relatedEntities?: string[];
    relatedPlace?: string;
}