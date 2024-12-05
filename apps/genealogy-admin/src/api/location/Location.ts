import { Event } from "../event/Event";

export type Location = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  latitude: number | null;
  longitude: number | null;
  events?: Array<Event>;
};
