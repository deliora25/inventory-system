import { ProductDataType } from '@/types';
import React, { useState } from 'react';
import Button from '../common/Button';
import NewProductModal from '../modals/product/NewProductModal';
import ProductItemsList from './ProductItemsList';

type Props = {
  products: ProductDataType[];
};

function Products({ products }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const [search, setSearch] = useState('');

  const handleOpen = () => {
    setIsClicked(true);
  };

  const onClose = () => {
    setIsClicked(false);
  };

  return (
    <div>
      <div>
        <div className="flex">
          <h2>PRODUCT LIST</h2>
          <Button type="button" onClick={handleOpen}>
            + New Product
          </Button>
          <NewProductModal onOpen={isClicked} onClose={onClose} />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Product"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <ProductItemsList search={search} products={products} />
    </div>
  );
}

export default Products;
