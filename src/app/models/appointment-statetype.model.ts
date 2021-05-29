export enum AppointmentStateType {
  initialized,
  confirmed,
  cancelled,
  completed,
  failed
}

export const AppointmentStateTypeLabelMapping: Record<AppointmentStateType, string> = {
  [AppointmentStateType.initialized]: 'initialized',
  [AppointmentStateType.confirmed]: 'confirmed',
  [AppointmentStateType.cancelled]: 'cancelled',
  [AppointmentStateType.completed]: 'completed',
  [AppointmentStateType.failed]: 'failed'
}