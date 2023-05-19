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

export type DataAmount = {
  name: string;
  value: number;
  id: number;
};

export type PieChartInput = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
};
