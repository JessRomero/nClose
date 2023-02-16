import { useParams } from "react-router-dom"
import "./ProductDetailPage.css"
//import ReviewSection from "../../components/ReviewSection/ReviewSection";
import Comments from "../../Comments/Comments";

export default function ProductDetailPage({products}) {

  let { productName } = useParams();

  let product = products.find(pro => pro.title === productName)

  return (
    <div className="flex">
      <div className="product-img">
        <h1>{product.title}</h1>
        <div>Product Description</div>
      <img src={`${product.poster_path}`} alt="" className="product-image"/>
      </div>
      <div className="comments">
      <Comments currentUserId="1" />
      </div>
    </div>
    
    )
  }
 
 
 
 /*
 <ReviewSection />
 */