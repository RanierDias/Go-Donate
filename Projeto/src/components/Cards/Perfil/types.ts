export interface iCardPerfil {
  type: "user" | "company";
  thumb: string | undefined;
  photo: string | undefined;
  name: string | undefined;
  list1: { number: number; link: string };
  list2: { number: number; link: string };
}
