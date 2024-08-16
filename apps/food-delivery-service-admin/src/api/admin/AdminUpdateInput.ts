import { InputJsonValue } from "../../types";

export type AdminUpdateInput = {
  adminId?: number | null;
  permissions?: InputJsonValue;
  role?: string | null;
  userId?: number | null;
};
