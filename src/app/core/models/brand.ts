import {Performer} from "./performer";

export interface Brand {
  id: number;
  name: string;
  description: string;
  address: string;
  companyId: number;
  image: string;
  showFullDescription: boolean;
  performer: Performer[];
}
