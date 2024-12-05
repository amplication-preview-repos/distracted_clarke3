export type Person = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  lastName: string | null;
  dateOfBirth: Date | null;
  dateOfDeath: Date | null;
  biography: string | null;
  firstName: string | null;
  gender?: "Option1" | null;
};
