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

export type OrderItemType = {
  orderId: string;
  customer: string;
  date: string;
  salesChannel: string;
  destination: string;
  items: number;
  status: string;
  id: number;
  product: string;
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
  quantity: string;
  id: number;
};

export type ProductsType = {
  name: ProductType[];
  id: number;
};

export type ProductListType = {
  id: number;
  name: string;
  href: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
};
