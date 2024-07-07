import { SortOrder } from "../../util/SortOrder";

export type PersonOrderByInput = {
  biography?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  dateOfDeath?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
