import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import { cartUiActions } from '../../Redux/Reducers/cartUiSlice';
import CartProduct from "./CartProduct";
import './CartBasket.css'

const CartBasket = () => {
  const cartItem = useSelector(state=> state.cart.cartItems)
  const totalAmount = useSelector(state=> state.cart.totalAmount)
  const dispatch = useDispatch();

  const toggleCart = () => { 
    dispatch(cartUiActions.toggle())
  }
  
  return (
    <div className='cart-basket'>
      <ListGroup className="cart-box">
        <div className="cart-close">
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart-list">
          {
            cartItem.length === 0 ?
              <h6 className="text-center mt-5">No item added to the cart</h6> :
              cartItem.map((item, index) => <CartProduct item={item} key={index} />)
          }
        </div>

        <div className="cart-bottom d-flex align-items-center justify-content-between">
          <h6 className="mb-0">
            Subtotal : <span>${ totalAmount }</span>
          </h6>
          <button>
            <Link to="/checkout" onClick={toggleCart}>
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
}

export default CartBasket;