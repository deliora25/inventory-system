import { ProductDataType } from "@/types";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

type Props = {
  onClose: () => void;
};

function NewProductForm({ onClose }: Props) {
  const [productList, setProductList] = useState<ProductDataType[]>([]);
  const [newProduct, setNewProduct] = useState<ProductDataType>({
    productName: "",
    categoryName: "",
    quantity: 0,
    id: 0,
  });

  const cancelButtonRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        const data = await response.data;
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: React.UIEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = productList.length
      ? productList[productList.length - 1].id + 1
      : 1;
    const newProductItem = {
      productName: newProduct.productName,
      categoryName: newProduct.categoryName,
      quantity: newProduct.quantity,
      id,
    };
    try {
      const response = await axios.post(
        "http://localhost:4000/products",
        newProductItem
      );
      const allProducts = [...productList, response.data];
      setProductList(allProducts);
      setNewProduct({ productName: "", categoryName: "", quantity: 0, id: 0 });
      router.push("/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-red-400">
            <div className="sm:col-span-4 bg-violet-500">
              <label
                htmlFor="productName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Name
              </label>
              <div className="mt-2">
                <input
                  value={newProduct.productName}
                  onChange={handleChange}
                  name="productName"
                  type="text"
                  placeholder="Product Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label>Category</label>
                <input
                  value={newProduct.categoryName}
                  onChange={handleChange}
                  name="categoryName"
                  type="text"
                  placeholder="Category Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label>Quantity</label>

                <input
                  value={newProduct.quantity}
                  onChange={handleChange}
                  name="quantity"
                  type="number"
                  placeholder="Quantity"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          onClick={onClose}
          ref={cancelButtonRef}
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          onClick={onClose}
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default NewProductForm;
