export type Relationship = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField?: "Option1" | null;
  personA: string | null;
  personB: string | null;
};
