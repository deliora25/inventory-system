import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { DataAmount } from "@/types";

type Props = {
  item: DataAmount;
};

function DataCard({ item }: Props) {
  const { name, value } = item;

  return (
    <div className="flex flex-col sm:max-w-sm md:max-w-screen-xl ">
      <div className="text-left text-lg font-normal m-2">
        <h2>{name}</h2>
      </div>
      <hr />
      <div className="grid font-semibold text-2xl ">
        <div className="flex flex-grid ">
          <AttachMoneyIcon className="ml-2 mt-1 " />
          <p className="justify-self-center">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default DataCard;
