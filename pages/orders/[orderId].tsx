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
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Sales Channel</th>
            <th>Destination</th>
            <th>Items</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{order.id}</td>
            <td>{order.date}</td>
            <td>{order.customer.firstName}</td>
            <td>{order.salesChannel}</td>
            <td>{order.destination}</td>
            <td>
              {order.items.map((x) => x.quantity).reduce((a, b) => a + b, 0)}
            </td>
            <td>{order.status}</td>
          </tr>
        </tbody>
      </table>

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
