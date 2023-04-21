import { Col, Container, Row } from "reactstrap";
import { Helmet, Hero } from "../../Components/index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Cart.css'
import { deleteItem } from "../../Redux/Reducers/cartSlice";

const Cart = () => {
  const cartItem = useSelector(state=> state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  const dispatch = useDispatch()

  const deleteItemfromCart = (id) => { 
    dispatch(deleteItem(id))
  }

  return ( 
    <Helmet title='Cart'>
      <Hero title='Cart'></Hero>

      <section className="cart-section">
        <Container>
          <Row>
            {
              cartItem.length === 0 ?
              <h2 className="text-center my-5">The Cart is empty</h2> :
                cartItem.map((item, index) => (
                  <Col lg='6' md='6' sm='12' key={index} className="cart-container">
                    <div className="product-item-cart text-center d-flex justify-content-between
                    align-items-center">
                    <div className="product-img-cart">
                        <img src={item.image01} alt=""/>
                      </div>
                      <div className="product-content">
                        <h6 className="product-title mb-0">
                          { item.title}
                        </h6>
                      </div>
                      <div className="info d-flex justify-content-between gap-3">
                        <span className="product-price">Price: ${ item.price }</span>
                        <span className="product-quantity">Quan: { item.quantity }px</span>
                      </div>
                      <div className="text-center cart-item-del mt-4">
                        <i class="ri-delete-bin-line" onClick={()=>deleteItemfromCart(item.id)}></i>
                      </div>
                    </div>
                  </Col>

                  
                ))
            }
          </Row>
          
          <div className="cart-checkout">
            <h6 className="mb-0">
              Subtotal: $<span>{ totalAmount }</span>
            </h6>
            <p className="mb-3">
              Taxes and Shipping will Calulate at Checkout
            </p>
            <div className="cart-btns d-flex gap-3">
              <button> 
                <Link to="/foods">
                  Continu Shopping
                </Link>
              </button>
              <button>
                <Link to="/checkout">
                  Proceed to Checkout
                </Link>
              </button>
            </div>
          </div>
        </Container>
      </section>
    </Helmet>
  );
}

export default Cart;