import { ListGroupItem } from 'reactstrap';
import { addItem, deleteItem, removeItem } from '../../Redux/Reducers/cartSlice';
import { useDispatch } from 'react-redux';
import './CartBasket.css'

const CartProduct = ({item}) => {
  const { id, title, totalPrice, quantity, price, image01 } = item
  const dispatch = useDispatch();

  const addItemToCart = () => { 
    dispatch(addItem({
        id,
        title,
        price,
        image01,
    }))
  }

  const removeItemFromCart = () => { 
    dispatch(removeItem(id))
  }

  const deleteItemFromCart = () => { 
    dispatch(deleteItem(id))
  }


  return ( 
    <ListGroupItem className="border-0 cart-item">
      <div className="cart-info d-flex gap-2">
        <img src={image01} alt="product-img" />

        <div className="cart-product w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart-product-title">{title}</h6>
            <p className=" d-flex align-items-center gap-5 cart-product-price">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className=" d-flex align-items-center justify-content-between increase-decrease-btn">
              <span className="increase-btn" onClick={addItemToCart}>
                <i class="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease-btn" onClick={removeItemFromCart}>
                <i class="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete-btn" onClick={deleteItemFromCart}>
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
}

export default CartProduct;