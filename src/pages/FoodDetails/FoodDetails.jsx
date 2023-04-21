import { Col, Container, Row } from "reactstrap";
import { Helmet, Hero, ProductCard } from "../../Components/index";
import products from "../../assets/products/products";
import { useParams } from "react-router-dom";
import { useState } from 'react';
import './FoodDetails.css'
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Reducers/cartSlice";


const FoodDetails = () => {
  const {id} = useParams()
  const product = products.find((item) => item.id === id)
  const [tab, setTab] = useState('desc')
  const [previewImg, setPreviewImg] = useState(product.image01)
  const { title, price, category, desc, image01 } = product;
  const relatedProduct = products.filter((item) => category === item.category);

  const dispatch = useDispatch()


  const addItemToCart = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredName, enteredEmail, reviewMsg);
  };


  return (  
    <Helmet title='Food Details'>
      <Hero title='Product-1'></Hero>

      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className="product-imgs">
                <div className="product-image mb-2" onClick={()=>setPreviewImg(product.image01)}>
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div className="product-image mb-2" onClick={()=>setPreviewImg(product.image02)}>
                  <img src={product.image02} alt="" className="w-50" />
                </div>
                <div className="product-image mb-2" onClick={()=>setPreviewImg(product.image03)}>
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg='4' md='4' >
              <div className="product-primary-img"><img src={ previewImg } alt="" className="w-100"/></div>
            </Col>
            <Col lg='6' md='6'>
              <div className="product-info">
                <h2 className="product-title mb-3">{ title }</h2>
                <div className="product-price mb-3">Price: <span>${price}</span></div>
                <div className="category mb-5">Category: <span>{ category }</span></div>
                <button className="addtoCart-btn" onClick={addItemToCart}>Add to cart</button>
              </div>
            </Col>
          </Row>

          <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={` ${tab === "desc" ? "tab-active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={` ${tab === "rev" ? "tab-active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab-content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab-form mb-3">
                  <div className="review pt-5">
                    <p className="user-name mb-0">Jhon Doe</p>
                    <p className="user-email">jhon1@gmail.com</p>
                    <p className="feedback-text">great product</p>
                  </div>

                  <div className="review">
                    <p className="user-name mb-0">Jhon Doe</p>
                    <p className="user-email">jhon1@gmail.com</p>
                    <p className="feedback-text">great product</p>
                  </div>

                  <div className="review">
                    <p className="user-name mb-0">Jhon Doe</p>
                    <p className="user-email">jhon1@gmail.com</p>
                    <p className="feedback-text">great product</p>
                  </div>
                  <form className="form" onSubmit={submitHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Write your review"
                        onChange={(e) => setReviewMsg(e.target.value)}
                        required
                      />
                    </div>

                    <button type="submit" className="addtoCart-btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related-Product-title">You might also like</h2>
            </Col>
          <Row>
            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default FoodDetails;