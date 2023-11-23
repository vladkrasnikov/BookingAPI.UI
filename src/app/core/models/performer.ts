import {Reservation} from "./reservation";

export interface Performer {
  id: number;
  name: string;
  description: string;
  workingHourStart: string;
  workingHourEnd: string;
  brandId: number;
  reservation: Reservation[];
}
