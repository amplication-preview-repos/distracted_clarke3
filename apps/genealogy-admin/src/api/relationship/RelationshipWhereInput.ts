import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RelationshipWhereInput = {
  id?: StringFilter;
  personA?: StringNullableFilter;
  personB?: StringNullableFilter;
  typeField?: "Option1";
};
