import Layout from '@/components/layout/Layout';
import { OrderItemType } from '@/types';

import { Button } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';

type Props = {
  order: OrderItemType;
  orderId: number | string;
};

function SingleOrderDetail({ order, orderId }: Props) {
  const router = useRouter();

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`http://localhost:4000/orders/${id}`);

      router.push('/orders');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <h2>test for {orderId}</h2>
      <div className="w-full bg-transparent m-2 p-8 md:items-center sm:m-0 sm:p-0 overflow-x-auto">
        <table className="border rounded-xl w-full table-auto">
          <thead className=" text-md ">
            <tr>
              <th className="py-1 border-r-2 font-semibold">Order ID</th>
              <th className="py-1 border-r-2 font-semibold">Date</th>
              <th className="py-1 border-r-2 font-semibold">Customer</th>
              <th className="py-1 border-r-2 font-semibold">Sales Channel</th>
              <th className="py-1 border-r-2 font-semibold">Destination</th>
              <th className="py-1 border-r-2 font-semibold">Items</th>
              <th className="py-1 border-r-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="py-2 px-2  border-r-2 border-y-2 text-md">
                {order.id}
              </td>
              <td className="py-2 px-2  border-r-2 border-y-2 text-md">
                {order.date}
              </td>
              <td className="py-2 px-2  border-r-2 border-y-2 text-md">
                {order.customer.firstName}
              </td>
              <td className="py-2 px-2  border-r-2 border-y-2 text-md">
                {order.salesChannel}
              </td>
              <td className="py-2 px-2  border-r-2 border-y-2 text-md">
                {order.destination}
              </td>
              <td className="py-2 px-2  border-r-2 border-y-2 text-md">
                {order.items
                  .map((x) => Number(x.quantity))
                  .reduce((a, b) => a + b, 0)}
              </td>
              <td className="py-2 px-2 border-r-2 border-y-2 text-md ">
                <div className="rounded-full border bg-[#BCE784]">
                  {order.status}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Button onClick={() => handleDelete(order.id)}>Delete</Button>
    </Layout>
  );
}

export default SingleOrderDetail;

export const getStaticPaths = async () => {
  const response = await axios.get('http://localhost:4000/orders');
  const { data } = response;

  const paths = data.map((order: OrderItemType) => ({
    params: {
      orderId: order.id.toString(),
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.orderId;
  const product = await axios.get(`http://localhost:4000/orders/${id}`);
  const { data } = product;

  return {
    props: {
      order: data,
      orderId: id,
    },
  };
};
