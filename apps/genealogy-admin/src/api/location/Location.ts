import { Event } from "../event/Event";

export type Location = {
  createdAt: Date;
  description: string | null;
  events?: Array<Event>;
  id: string;
  latitude: number | null;
  longitude: number | null;
  name: string | null;
  updatedAt: Date;
};
