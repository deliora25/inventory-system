import Layout from "@/components/layout/Layout";
import { ProductDataType } from "@/types";
import { Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";

type Props = {
  products: ProductDataType[];
};

export default function ProductPage({ products }: Props) {
  return (
    <Layout>
      <div>
        <div className="flex">
          <h2>PRODUCT LIST</h2>
          <Button>+ New Product</Button>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <Link href={"/products/" + item.id}>{item.name}</Link>
                  </td>

                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>{item.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const apiEndPoint = "http://localhost:4000/products";
  const response = await axios.get(apiEndPoint);
  const data = await response.data;

  return {
    props: {
      products: data,
    },
  };
}
