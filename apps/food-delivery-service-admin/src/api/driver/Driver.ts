import { JsonValue } from "type-fest";

export type Driver = {
  availabilityStatus?: "Option1" | null;
  createdAt: Date;
  currentLocation: JsonValue;
  driverId: number | null;
  earnings: number | null;
  id: string;
  orderHistory: JsonValue;
  ratings: number | null;
  updatedAt: Date;
  userId: number | null;
  vehicleDetails: JsonValue;
};
