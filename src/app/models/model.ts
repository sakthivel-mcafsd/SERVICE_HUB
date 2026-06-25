export type BookingStatus = 'Pending' | 'Accepted' | 'In Progress' | 'Completed';

export interface Booking {

  id: number;

  service: string;

  description: string;

  status: BookingStatus;

  date: string;

  time: string;

  customer: string;

  provider?: string;

  Address?:string;
  
  phone?:string;

}


export interface UserProfile {
  id: number;
  name: string;
  email: string;
  role: string;
  gender: string;
  dataOfBirth: string;
  phoneNo: string;
  address: string;
}
export interface UserProfileUpdate {
  id: number;
  name: string;
  gender: string;
  dataOfBirth: string;
  phoneNo: string;
  address: string;
}
export interface ChatMessage {
  messageId: number;
  bookingId: number;
  senderId: number;
  receiverId: number;
  messageText: string;
  sentAt: Date;
  isRead: boolean;
}