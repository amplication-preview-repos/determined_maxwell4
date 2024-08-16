import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  address?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  phoneNumber?: string | null;
  profilePicture?: InputJsonValue;
  roles?: InputJsonValue;
  userId?: number | null;
  userType?: "Option1" | null;
  username?: string;
};
