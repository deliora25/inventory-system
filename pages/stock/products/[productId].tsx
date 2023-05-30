import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;

  return <div>ProductDetail {productId}</div>;
}

export default ProductDetail;
