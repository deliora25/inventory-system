export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type Users = {
  userList: User[];
};

export type UserOnLogin = {
  email: string;
  password: string;
};

export type StockAlert = {
  orderId: string;
  date: string;
  quantity: string;
  alertAmount: string;
  status: string;
  id: number;
};

export type StockAlertList = {
  item: StockAlert[];
};

export type Title = {
  orderId: string;
  date: string;
  quantity: string;
  alertAmount: string;
  status: string;
};
