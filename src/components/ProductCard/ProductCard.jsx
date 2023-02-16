import { Link } from "react-router-dom"

export default function ProductCard(props) {
  return (
    <>
      <Link to={`/products/${props.product.title}`} className="product-link">
        <div style={{"background": `url(${props.product.poster_path}) no-repeat center center`, "WebkitBackgroundSize": "cover"}} className="item-card">
          <div className="title">
            <h1 className="products-title-h1">{props.product.title}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}