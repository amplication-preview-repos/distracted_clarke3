import { Person as TPerson } from "../api/person/Person";

export const PERSON_TITLE_FIELD = "lastName";

export const PersonTitle = (record: TPerson): string => {
  return record.lastName?.toString() || String(record.id);
};
