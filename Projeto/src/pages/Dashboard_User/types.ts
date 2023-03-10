export interface iPostsService {
  id: 1;
  userId:1;
  name: string;
  description: string;
  city: string;
  state: string;
  time: string;
  date: string;
}


export interface iParticipation {
  id: number;
  companyId:number;
  userId: number;
  title: string;
  name: string;
  date:string;
  description: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  final_date: string;
  open_time: string;
  closed_time: string;
  image: string;
}