import { InputJsonValue } from "../../types";

export type RoleUpdateInput = {
  permissions?: InputJsonValue;
  roleId?: number | null;
  roleName?: string | null;
};
