import { EventUpdateManyWithoutLocationsInput } from "./EventUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  description?: string | null;
  events?: EventUpdateManyWithoutLocationsInput;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
};
