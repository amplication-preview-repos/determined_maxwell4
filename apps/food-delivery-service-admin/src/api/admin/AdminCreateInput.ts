import { InputJsonValue } from "../../types";

export type AdminCreateInput = {
  adminId?: number | null;
  permissions?: InputJsonValue;
  role?: string | null;
  userId?: number | null;
};
