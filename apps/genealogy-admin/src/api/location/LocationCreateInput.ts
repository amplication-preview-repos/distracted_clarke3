import { EventCreateNestedManyWithoutLocationsInput } from "./EventCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  name?: string | null;
  description?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  events?: EventCreateNestedManyWithoutLocationsInput;
};
