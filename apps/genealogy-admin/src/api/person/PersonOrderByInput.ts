import { SortOrder } from "../../util/SortOrder";

export type PersonOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  lastName?: SortOrder;
  dateOfBirth?: SortOrder;
  dateOfDeath?: SortOrder;
  biography?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
};
