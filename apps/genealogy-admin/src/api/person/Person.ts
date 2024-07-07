export type Person = {
  biography: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  dateOfDeath: Date | null;
  firstName: string | null;
  gender?: "Option1" | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
