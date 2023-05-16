import DataCard from "./DataCard";
function DataCardList() {
  return (
    <div className="grid lg:grid-cols-4 gap-5 mb-8">
      <div className="rounded bg-white h-32 shadow-sm">
        <DataCard title="Sales Return" url="salesReturn" />
      </div>
      <div className="rounded bg-white h-32 shadow-sm">
        <DataCard title="Purchase" url="purchase" />
      </div>
      <div className="rounded bg-white h-32 shadow-sm">
        <DataCard title="Income" url="income" />
      </div>
      <div className="rounded bg-white h-32 shadow-sm">
        <DataCard title="Revenue" url="revenue" />
      </div>
    </div>
  );
}

export default DataCardList;
