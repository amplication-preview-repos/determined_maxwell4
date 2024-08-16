export type Promotion = {
  activeStatus: boolean | null;
  createdAt: Date;
  description: string | null;
  discount: number | null;
  endDate: Date | null;
  id: string;
  promotionId: number | null;
  restaurantId: number | null;
  startDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
