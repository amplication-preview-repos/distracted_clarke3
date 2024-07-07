import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";

export type LocationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  events?: EventListRelationFilter;
};
