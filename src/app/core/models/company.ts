import {Brand} from "./brand";

export interface Company {
  id: number;
  name: string;
  shortName: string;
  description: string;
  isOwner: boolean;
  brand: Brand[];
}
