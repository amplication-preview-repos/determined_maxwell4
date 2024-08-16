export type Notification = {
  createdAt: Date;
  id: string;
  message: string | null;
  notificationId: number | null;
  readStatus: boolean | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  userId: number | null;
};
