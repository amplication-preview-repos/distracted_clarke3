import { Location } from "../location/Location";

export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  date: Date | null;
  location?: Location | null;
};
