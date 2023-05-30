import { useRouter } from "next/router";
import React from "react";

function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>ProductDetail for product {productId}</div>;
}

export default ProductDetail;
