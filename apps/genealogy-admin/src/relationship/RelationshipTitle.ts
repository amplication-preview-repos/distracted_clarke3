import { Relationship as TRelationship } from "../api/relationship/Relationship";

export const RELATIONSHIP_TITLE_FIELD = "personA";

export const RelationshipTitle = (record: TRelationship): string => {
  return record.personA?.toString() || String(record.id);
};
