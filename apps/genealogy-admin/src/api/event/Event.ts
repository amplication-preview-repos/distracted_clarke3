import { Location } from "../location/Location";

export type Event = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  location?: Location | null;
  title: string | null;
  updatedAt: Date;
};
