import { JsonValue } from "type-fest";

export type User = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  phoneNumber: string | null;
  profilePicture: JsonValue;
  roles: JsonValue;
  updatedAt: Date;
  userId: number | null;
  userType?: "Option1" | null;
  username: string;
};
