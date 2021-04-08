import { AppointmentStateType } from "./appointment-statetype.model";

export interface Appointment {
    id: string;
    // üzleti? magán?
    category: string;
    creationDate: Date;
    description: string;
    lastUpdate: Date;
    status: AppointmentStateType;

    // validFor
    startDate?: Date;
    endDate?: Date;
    // validFor ends

    // urleket tartalmazó string tömb
    // pl.: google doksin megosztott fájlok
    // attachment?: string[];
    // telefoncím, email, skypeazonosító, akármi
    contactMediums?: { name: string, value: string };
    // nevek
    relatedEntities?: string[];
    relatedPlace?: string;
}