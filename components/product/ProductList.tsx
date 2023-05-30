//icons
import DateRangeIcon from "@mui/icons-material/DateRange";

//types
import { ProductListType, StatusDataType } from "@/types";

//components
import StatusDropdown from "../orders/dropdowns/status/StatusDropdown";
import { Button } from "@mui/material";
import ProductItemList from "./ProductItemList";

type Props = {
  data: ProductListType[];
  statusData: StatusDataType[];
};

function ProductList({ data, statusData }: Props) {
  return <div className="w-full h-full bg-white p-">test</div>;
}

export default ProductList;
