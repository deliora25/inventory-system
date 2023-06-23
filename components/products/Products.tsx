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
    <div className="items-center ">
      <div>
        <div className=" sm:grid sm:grid-cols-2 m-2 items-center">
          <h2 className="col-span-1">PRODUCTS LIST</h2>
          <Button
            type="button"
            variant="submitButton"
            className="ml-3  !px-5 w-fit  sm:w-fit col-span-2 sm:col-span-1"
            onClick={handleOpen}
          >
            NEW
          </Button>
          <NewProductModal onOpen={isClicked} onClose={onClose} />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Product"
            onChange={(e) => setSearch(e.target.value)}
            className="w-fit"
          />
        </div>
      </div>
      <ProductItemsList search={search} products={products} />
    </div>
  );
}

export default Products;
