import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PersonWhereInput = {
  biography?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  dateOfDeath?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
  gender?: "Option1";
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
