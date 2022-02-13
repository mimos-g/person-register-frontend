import { Profession } from "./profession";

export interface Person {
  id?: number,
  name: string,
  phone: string,
  email: string,
  profession_id: number,
  profession?: Profession
}
