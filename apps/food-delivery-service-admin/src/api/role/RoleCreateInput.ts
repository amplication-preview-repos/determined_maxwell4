import { InputJsonValue } from "../../types";

export type RoleCreateInput = {
  permissions?: InputJsonValue;
  roleId?: number | null;
  roleName?: string | null;
};
