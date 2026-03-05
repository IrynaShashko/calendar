export interface TaskType {
  _id?: string; 
  title: string;
  date: string; 
  order: number;
  labels: string[];
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
