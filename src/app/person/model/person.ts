import { Profession } from "./profession";

export interface Person {
  id?: number,
  name: string,
  phone: string,
  emai: string,
  profession_id: number,
  profession?: Profession
}
