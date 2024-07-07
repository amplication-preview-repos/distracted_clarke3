import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RelationshipWhereInput = {
  id?: StringFilter;
  typeField?: "Option1";
  personA?: StringNullableFilter;
  personB?: StringNullableFilter;
};
