export interface UserType {
  _id?: string;
  email: string;
  name: string;
  password: string;
}

export interface TaskType {
  _id?: string;
  title: string;
  date: string;
  order: number;
  labels: string[];
  userId: string;
}

export interface HolidayType {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  types?: string[];
}
