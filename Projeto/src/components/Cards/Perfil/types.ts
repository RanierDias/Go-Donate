export interface iCardPerfil {
  type: "user" | "company";
  thumb: string;
  photo: string;
  name: string;
  list1: { number: number; link: string };
  list2: { number: number; link: string };
}
