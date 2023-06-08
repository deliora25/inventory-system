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

export type ItemsType = {
  product: string;
  category: string;
  quantity: number | null;
  id?: number;
};

export type StockAlertType = {
  orderId: string;
  date: string;
  quantity: number;
  order: ItemsType[];
  alertAmount: string;
  status: string;
  id: number;
};

export type StockAlertList = {
  item: StockAlertType[];
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

export type CustomerType = {
  firstName: string;
  lastName: string;
  email: string;
  contact: number | null;
};

export type OrderItemType = {
  id: number;
  date: string;
  customer: CustomerType;
  items: ItemsType[];
  salesChannel?: string;
  destination?: string;
  status: string;
  alertAmount?: string;
  instruction?: string;
};

export type SalesDataType = {
  name: string;
  id: number;
};

export type StatusDataType = {
  name: string;
  bgColor: string;
  id: number;
};

export type ProductType = {
  name: string;
  category: string;
  date: string;
  quantity: number;
  id: number;
};

export type ProductsType = {
  name: ProductType[];
  id: number;
};

export type StockType = {
  orderId: string;
  customer: string;
  date: string;
  salesChannel: string;
  destination: string;
  items: string;
  productName: string;
  status: string;
  id: number;
  category: string;
  instruction: string;
  href: string;
};

export type ProductDataType = {
  productName: string;
  categoryName: string;
  quantity: number;
  id: number;
};
