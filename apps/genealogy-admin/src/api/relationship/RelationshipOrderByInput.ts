import { SortOrder } from "../../util/SortOrder";

export type RelationshipOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  personA?: SortOrder;
  personB?: SortOrder;
};
