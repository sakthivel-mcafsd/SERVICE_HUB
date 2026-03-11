export type BookingStatus = 'Pending' | 'Assigned' | 'In Progress' | 'Completed';

export interface Booking {

  id: number;

  service: string;

  description: string;

  status: BookingStatus;

  date: string;

  time: string;

  customer: string;

  provider?: string;

}