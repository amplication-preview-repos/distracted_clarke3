import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type EventUpdateInput = {
  title?: string | null;
  description?: string | null;
  date?: Date | null;
  location?: LocationWhereUniqueInput | null;
};
