import Input from '@/components/common/Input';
import { OrderItemType } from '@/types';
import React, { useState } from 'react';

type Props = {
  data: OrderItemType[];
};

function NewOrderForm({ data }: Props) {
  const [newOrder, setNewOrder] = useState({
    orderId: 0,
    date: '',
    customer: {
      firstName: '',
      lastName: '',
      contact: '',
      email: '',
    },

    items: [
      {
        category: '',
        product: '',
        quantity: 0,
        itemsId: 0,
      },
    ],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewOrder((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.warn(data);
  return (
    <form>
      <Input
        title="First Name"
        name="firstName"
        type="text"
        value={newOrder.customer.firstName}
        placeholder="First Name"
        onChange={handleChange}
      />
    </form>
  );
}

export default NewOrderForm;
