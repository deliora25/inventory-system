import { Button } from "@mui/material";
import { MutableRefObject, useEffect, useState } from "react";
import axios from "axios";
import { ProductDataListType, ProductDataType } from "@/types";

type Props = {
  onClose: () => void;
  cancelButtonRef: MutableRefObject<null>;
  data: ProductDataType[];
};

function NewProduct({ onClose, cancelButtonRef, data }: Props) {
  const [productList, setProductList] = useState<ProductDataType[]>(data);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    quantity: "",
  });
  const apiEndPoint = "http://localhost:4000/products";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async () => {
    const productId = Math.random() * 2;
    const product = {
      name: `${newProduct.name}`,
      category: `${newProduct.category}`,
      quantity: `${newProduct.quantity}`,
      id: `${productId}`,
    };
    await axios.post(apiEndPoint, product);
  };

  return (
    <div className="">
      <div className="container ">
        <form
          className="border-2 p-5 rounded-md border-slate-300 flex-col sm:flex-grid gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Product Name.."
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            className="border-2 mr-3 rounded-md p-1"
          />
          <input
            type="text"
            placeholder="Category..."
            name="category"
            value={newProduct.category}
            onChange={handleChange}
            className="border-2 mr-3 rounded-md p-1"
          />
          <div className="flex flex-col">
            Quantity
            <input
              type="text"
              placeholder="Quantity"
              name="quantity"
              value={newProduct.quantity}
              onChange={handleChange}
              className="border-2 mr-3 rounded-md p-1 w-fit"
            />
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 items-center justify-center">
            <Button
              type="submit"
              className="inline-flex w-full justify-center rounded-md bg-green-800 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
            >
              Confirm
            </Button>
            <Button
              type="button"
              className="mt-3 inline-flex  w-full justify-center rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={onClose}
              ref={cancelButtonRef}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;

// import { Button } from "@mui/material";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const NewProduct = () => {
//   const [products, setProducts] = useState([]);
//   const apiEndpoint = `http://localhost:4000/products`;

//   useEffect(() => {
//     const getData = async () => {
//       const { data: res } = await axios.get(apiEndpoint);
//       setProducts(res);
//     };
//     getData();
//   }, []);

//   const addProduct = async () => {
//     const quantity = Math.random() * 100;
//     const id = Math.random() * 2;
//     const product = {
//       name: "New Product",
//       category: "new",
//       quantity: `${quantity}`,
//       id: `${id}`,
//     };
//     axios.post(apiEndpoint, product);
//     setProducts([product, ...products]);
//   };

//   const handleUpdate = async (product) => {
//     product.name = "Updated";
//     await axios.put(apiEndpoint + "/" + product.id);
//     const productsClone = [...products];
//     const index = productsClone.indexOf(product);
//     productsClone[index] = { ...product };
//     setProducts(productsClone);
//   };

//   const handleDelete = async (product) => {
//     await axios.delete(apiEndpoint + "/" + product.id);
//     setProducts(products.filter((p) => p.id !== product.id));
//   };

//   return (
//     <>
//       <div>
//         <h2>There are {products.length} products in the database</h2>
//         <button onClick={addProduct}>Add Product</button>
//         <table>
//           <thead>
//             <tr>
//               <th>Product Name</th>
//               <th>Category</th>
//               <th>Quantity</th>
//               <th>Update</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <tr key={product.id}>
//                 <td>{product.name}</td>
//                 <td>{product.category}</td>
//                 <td>{product.quantity}</td>
//                 <td>
//                   <button onClick={() => handleUpdate(product)}>Update</button>
//                 </td>
//                 <td>
//                   <button onClick={() => handleDelete(product)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default NewProduct;
