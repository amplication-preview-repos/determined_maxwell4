import { Permission as TPermission } from "../api/permission/Permission";

export const PERMISSION_TITLE_FIELD = "permissionName";

export const PermissionTitle = (record: TPermission): string => {
  return record.permissionName?.toString() || String(record.id);
};
