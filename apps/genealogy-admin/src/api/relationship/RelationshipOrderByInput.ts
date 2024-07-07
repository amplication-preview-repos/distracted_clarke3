import { SortOrder } from "../../util/SortOrder";

export type RelationshipOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  personA?: SortOrder;
  personB?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
