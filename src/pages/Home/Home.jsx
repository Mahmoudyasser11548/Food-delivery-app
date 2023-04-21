import { Category, Feature, FoodCategory, Helmet, ProductCard, TestimonialSlider } from "../../Components/index";
import { Container, Col, Row, ListGroup, ListGroupItem} from "reactstrap";
import Hero from '../../assets/imgs/hero.png'
import TestimonialsImg from '../../assets/imgs/network.png'
import { Link } from "react-router-dom";
import './Home.css'

import whyImg from '../../assets/imgs/location.png'
import products from "../../assets/products/products";
import { useEffect, useState } from "react";

const Home = () => {
  const [hotPizza, setHotPizza] = useState(products);


  useEffect(() => { 
    const HotPizza = products.filter((item) => item.category === 'Pizza')
    const slicePizza = HotPizza.slice(0, 4)
    setHotPizza(slicePizza)
  }, [])


  return ( 
    <Helmet title='Home'> 
      <section className="hero py-3">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg='6' md='6'>
              <div className="hero-content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4"><span>HUNGRY?</span> Just wait <br /> food at
                <span> your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="btns d-flex align-items-center gap-5 mt-4">
                  <button className="order d-flex align-items-center justify-content-between">
                    Order Now <i class="ri-arrow-right-s-line"></i></button>
                  <button className="menu">
                    <Link to='foods'>See all foods</Link>
                  </button>
                </div>

                <div className="services d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping">
                      <i class="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping">
                      <i class="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg='6' md='6' className="hero-img-sec">
              <div className="hero-img">
                <img src={Hero} alt="Hero" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Category />
          </Row>
        </Container>
      </section>

      <section className="features">
        <Container>
          <Feature />
        </Container>
      </section>

      <section className="allfoods">
        <Container>
          <FoodCategory />
        </Container>
      </section>
      
      <section className="why">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="whyimg">
                <img src={whyImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="why-content">
                <h2 className="why-title">Why <span>Tasty Treat</span> ?</h2>
                <p className="desc mb-3">Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit.
                  Aspernatur alias exercitationem excepturi
                  nihil dolorem beatae, enim voluptates earum hic ullam. Vitae, placeat?
                  Modi beatae necessitatibus reiciendis praesentium vero exercitationem
                </p>
                <ListGroup className="choose-list mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Col lg='12' md='12'>
            <h2 className="text-center mb-5">Hot Pizza</h2>
          </Col>
          <Row>
          {hotPizza.map((item) => (
            <Col lg='3' md='4' sm="6" key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="testimonial mb-4">
                <h5 className="testimonial-title mb-4">Testimonial</h5>
                <h2 className="mb-4">What our <span>customers </span>are saying ?</h2>
                <p className="testimonial-desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere vel quam veniam tempora! Cupiditate eveniet ab
                  nisi labore dolorem inventore sit rem beatae! Ullam,
                  asperiores. Esse aperiam nostrum voluptatem vel!
                </p>
              <TestimonialSlider />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="testimonials-img">
                <img src={TestimonialsImg} alt="" className="w-100"/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;