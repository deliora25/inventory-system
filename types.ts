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
  product?: string;
  quantity?: number;
  itemsId?: number;
};

export type StockAlertType = {
  orderId: string;
  date: string;
  quantity: number;
  items: ItemsType[];
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

export type OrderItemType = {
  orderId: string;
  customer: string;
  date: string;
  salesChannel: string;
  destination: string;
  items: ItemsType[];
  status: string;
  id: number;
  category: string;
  instruction: string;
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
