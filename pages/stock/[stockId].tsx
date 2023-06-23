import Layout from '@/components/layout/Layout';
import { StockItemType } from '@/types';
import Button from '@/components/common/Button';
import axios from 'axios';
import { useRouter } from 'next/router';

type Props = {
  stock: StockItemType;
  stockId: number | string;
};

function StockDetail({ stock, stockId }: Props) {
  const { date, salesChannel, instruction, items, status } = stock;

  const router = useRouter();

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`http://localhost:4000/incomingInvoice/${id}`);

      router.push('/stock');
    } catch (error) {
      console.error(error);
    }
  };

  let salesChannelBranch = '';
  if (salesChannel === 1) {
    salesChannelBranch = 'Main Branch';
  } else if (salesChannel === 2) {
    salesChannelBranch = 'Secondary Branch';
  } else if (salesChannel === 3) {
    salesChannelBranch = 'Online Sales';
  }

  let bgClr = '';

  let stockStatus = '';

  if (status === 1) {
    stockStatus = 'Pending';
    bgClr = 'bg-yellow-400';
  }
  if (status === 2) {
    stockStatus = 'Success';
    bgClr = 'bg-green-400';
  }
  if (status === 3) {
    stockStatus = 'Cancelled';
    bgClr = 'bg-red-500';
  }

  return (
    <Layout>
      <div className="w-fit  bg-transparent sm:items-center items-center  overflow-x-auto text-center">
        <h2>Stock detail of Order ID {stockId}</h2>
        <table className=" border rounded-xl w-full table-auto sm:table:fixed text-center">
          <thead>
            <tr>
              <th className="font-semibold px-6 py-1 border-r-2">Order ID</th>
              <th className="font-semibold px-6 py-1 border-r-2">Date</th>
              <th className="font-semibold px-6 py-1 border-r-2">
                Sales Channel
              </th>
              <th className="font-semibold px-6 py-1 border-r-2">
                Instruction
              </th>
              <th className="font-semibold px-6 py-1 border-r-2">Items</th>
              <th className="font-semibold px-6 py-1 border-r-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            <tr>
              <td className="py-2 px-2  border-y-2 border-r-2 text-md">
                {stockId}
              </td>

              <td className="py-2 px-2  border-y-2 border-r-2 text-md">
                {date}
              </td>
              <td className="py-2 px-2  border-y-2 border-r-2 text-md">
                {salesChannelBranch}
              </td>
              <td className="py-2 px-2  border-y-2 border-r-2 text-md">
                {instruction}
              </td>
              <td className="py-2 px-2  border-y-2 border-r-2 text-md">
                {items
                  .map((x) => Number(x.quantity))
                  .reduce((a: number | null, b: number | null) => a + b, 0)}
              </td>
              <td className="py-2 px-2  border-y-2 border-r-2 text-md">
                <div className={`rounded-full border ${bgClr}`}>
                  {stockStatus}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center space-x-4 my-3">
          <Button
            type="button"
            variant="cancelButton"
            className="border-2 border-slate-200 hover:border-2 hover:bg-slate-400 hover:text-slate-100 hover:border-slate-700"
            onClick={() => router.back()}
          >
            Back
          </Button>
          <Button
            type="button"
            variant="cancelButton"
            className="border-2 border-slate-200 hover:border-2 hover:bg-red-600 hover:text-slate-100 hover:border-slate-700"
            onClick={() => handleDelete(stockId)}
          >
            Delete
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default StockDetail;

export const getStaticPaths = async () => {
  const response = await axios.get('http://localhost:4000/products');
  const { data } = response;

  const paths = data.map((stock: StockItemType) => ({
    params: {
      stockId: stock.id.toString(),
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.stockId;
  const stock = await axios.get(`http://localhost:4000/incomingInvoice/${id}`);
  const { data } = stock;

  return {
    props: {
      stock: data,
      stockId: id,
    },
  };
};
