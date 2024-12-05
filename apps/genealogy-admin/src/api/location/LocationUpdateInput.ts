import { EventUpdateManyWithoutLocationsInput } from "./EventUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  name?: string | null;
  description?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  events?: EventUpdateManyWithoutLocationsInput;
};
