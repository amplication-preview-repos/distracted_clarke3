import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PersonWhereInput = {
  id?: StringFilter;
  lastName?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  dateOfDeath?: DateTimeNullableFilter;
  biography?: StringNullableFilter;
  firstName?: StringNullableFilter;
  gender?: "Option1";
};
