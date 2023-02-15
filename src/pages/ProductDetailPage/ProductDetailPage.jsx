import { useParams } from "react-router-dom"
import "./ProductDetailPage.css"
import ReviewSection from "../../components/ReviewSection/ReviewSection";

export default function ProductDetailPage({products}) {

  let { productName } = useParams();

  let product = products.find(pro => pro.title === productName)

  return (
    <div className="flex">
      <div>
        <h1>{product.title}</h1>
        <div>Product Description</div>
      </div>
      <img src={`${product.poster_path}`} alt="" className="product-image"/>
      <ReviewSection />
    </div>
  )
}