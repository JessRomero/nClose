import React from 'react';
//import { checkToken } from '../../utilities/users-service';
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductsPage.css"

export default function ProductPage(props) {
  return (
    <div className="container">
      {
        props.products.map(product => {
          return <ProductCard key={product.title} product={product} />
        })
      }
    </div>
  )
}

















/*
export default function ProductsPage() {
  return (
    <section className="products-page">
      <div className='jumbotron'>
        <h1 class="display-4">Products</h1>
      </div>
      <div className="row">
        <div className="col-9">DISPLAY PRODUCTS</div>
      </div>
    </section>
  )
}
*/



/*
async function handleCheckToken() {
  const expDate = await checkToken();
  console.log(expDate);
  <>
    <h1>ProductsPage</h1>
    <button onClick={handleCheckToken}>Check When My Login Expires</button>
  </>
}

*/