import React from 'react';
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductsPage.css"


export default function ProductPage(props) {
  return (
    <div>
      <h1>Products</h1>
      <div className="container">
        {
          props.products.map(product => {
            return <ProductCard key={product.title} product={product} />
          })
        }
      </div>
    </div>
  )
}
