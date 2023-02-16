import { useParams } from "react-router-dom"
import "./ProductDetailPage.css"
import Comments from "../../Comments/Comments";

export default function ProductDetailPage({ products }) {

  let { productName } = useParams();

  let product = products.find(pro => pro.title === productName)

  return (
    <div className="flex">
      <div className="product-img">
        <h1 className="pd-title">{product.title}</h1>
        <img src={`${product.poster_path}`} alt="" className="product-image" />
      </div>
        <div className="description">{product.description}</div>
      <div className="comments">
        <Comments currentUserId="1" />
      </div>
    </div>

  )
}