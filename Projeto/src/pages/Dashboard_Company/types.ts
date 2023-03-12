import { iFundraising, iPosts } from './../../providers/@types';

export interface iResponseFundraising {
  uuid: string,
	email: string
	password:string
	name: string
	id: number,
	isCompany: true,
	city: string
	state: string
	background: string
	image: string
  fundraisings: iFundraising[]
}

export interface iResponsePost {
  uuid: string;
  email: string;
  password: string;
  name: string;
  id: number;
  isCompany: true;
  city: string;
  state: string;
  background: string;
  image: string;
  post: iPosts[];
}

export type { iPosts };
