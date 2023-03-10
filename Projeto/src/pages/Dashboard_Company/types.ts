export interface iPosts {
  id: number;
  companyId: number;
  title: string;
  name: string;
  description: string;
  date: string;
  time: string;
  city: string;
  state: string;
  type: string;
  image: string;
}

export interface iFundraising {
  id: number;
  companyId: number;
  title: string;
  name: string;
  description: string;
  date: string;
  final_date: string;
  open_time: string;
  closed_time: string;
  address: string;
  city: string;
  state: string;
  phone: string;
}