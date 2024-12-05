import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type EventCreateInput = {
  title?: string | null;
  description?: string | null;
  date?: Date | null;
  location?: LocationWhereUniqueInput | null;
};
