import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "deliveryAddress";

export const OrderTitle = (record: TOrder): string => {
  return record.deliveryAddress?.toString() || String(record.id);
};
