// import React from 'react';
// import { UseFormRegister } from 'react-hook-form';

// type OrderInputData = {
//   category: string;
//   product: string;
//   quantity: number;
// };

// type Props = {
//   register: UseFormRegister<OrderInputData>;
// };

// function NewOrderInput({ register }: Props) {
//   return (
//     <div className="flex gap-4 items-center justify-center">
//       <div className="flex flex-col">
//         <label htmlFor="category">Category</label>
//         <select {...register('items.0.category')} className="h-fit">
//           <option value="">Select...</option>
//           <option value="Category 1">Category 1</option>
//           <option value="Category 2">Category 2</option>
//           <option value="Category 3">Category 3</option>
//         </select>
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="productName">Product Name</label>
//         <input
//           {...register('items.0.product')}
//           className="rounded-sm border-2"
//         />
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="quantity">Quantity</label>
//         <input
//           {...register('items.0.quantity')}
//           className="rounded-sm border-2"
//           type="number"
//         />
//       </div>
//     </div>
//   );
// }

// export default NewOrderInput;
