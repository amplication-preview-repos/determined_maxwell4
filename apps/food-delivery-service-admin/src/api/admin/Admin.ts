import { JsonValue } from "type-fest";

export type Admin = {
  adminId: number | null;
  createdAt: Date;
  id: string;
  permissions: JsonValue;
  role: string | null;
  updatedAt: Date;
  userId: number | null;
};
