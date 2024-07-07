export type Relationship = {
  createdAt: Date;
  id: string;
  personA: string | null;
  personB: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
