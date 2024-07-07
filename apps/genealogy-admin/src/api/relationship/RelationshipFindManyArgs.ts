import { RelationshipWhereInput } from "./RelationshipWhereInput";
import { RelationshipOrderByInput } from "./RelationshipOrderByInput";

export type RelationshipFindManyArgs = {
  where?: RelationshipWhereInput;
  orderBy?: Array<RelationshipOrderByInput>;
  skip?: number;
  take?: number;
};
