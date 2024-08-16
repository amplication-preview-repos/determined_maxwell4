import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  profilePicture?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userType?: SortOrder;
  username?: SortOrder;
};
