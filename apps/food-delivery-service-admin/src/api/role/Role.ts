import { JsonValue } from "type-fest";

export type Role = {
  createdAt: Date;
  id: string;
  permissions: JsonValue;
  roleId: number | null;
  roleName: string | null;
  updatedAt: Date;
};
