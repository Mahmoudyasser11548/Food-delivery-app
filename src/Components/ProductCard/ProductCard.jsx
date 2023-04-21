import { Link } from "react-router-dom";
import './ProductCard.css'
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Reducers/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item
  const dispatch = useDispatch()

  const addToCart = () => { 
    dispatch(addItem({
      id,
      title,
      image01,
      price
    }))
  }
  
  return ( 
    <div className="product-item text-center ">
      <div className="product-img">
        <img src={image01} alt="" className="w-50 mb-3"/>
      </div>
      <div className="product-content">
        <h5 className="product-title">
          <Link to={`/foods/${id}`}>{ title }</Link>
        </h5>
      </div>
      <div className="addtoCart d-flex justify-content-between mt-4">
        <span className="product-price">${ price }</span>
        <button className="addtoCart-btn" onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;