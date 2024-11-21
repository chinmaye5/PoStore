import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

export default function Product() {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
        <Breadcrums product={product} />
        <ProductDisplay product={product} ></ProductDisplay>
        <RelatedProducts category={product.category} currentProductId={product.id} />
    </div>
  );
}