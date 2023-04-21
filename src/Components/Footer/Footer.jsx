import './Footer.css'
import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import Logo from '../../assets/imgs/res-logo.png'
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return ( 
    <footer className="footer py-5">
      <Container>
        <Row className='py-3'>
          <Col lg='3' md='4' sm='6' className='mb-2'>
            <div className="logo__footer text-start">
              <img src={Logo} alt="Logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae 
              </p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6' className='mb-2'>
            <ListGroup>
              <h5 className="title">Delivery Time</h5>
              <ListGroupItem className='delivery-item border-0 ps-0'> 
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className='delivery-item border-0 ps-0'> 
                <span>Friday - Saturday</span>
                <p>Off-Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6' className='mb-2'>
            <ListGroup>
              <h5 className="title">Contact</h5>
              <ListGroupItem className='delivery-item border-0 ps-0'> 
                <span>Location: Egypt, Assiut , 525st Mubark City</span>
              </ListGroupItem>
              <ListGroupItem className='delivery-item border-0 ps-0'> 
                <span>Phone: 02012345678</span>
              </ListGroupItem>
              <ListGroupItem className='delivery-item border-0 ps-0'> 
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6' className='sletter mb-2'>
            <h5 className="title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="d-flex align-items-center">
          <Col lg='6' md='6' className='mb-3'>
            <p className="copyright m-0">
              Copyright - 2022, website made by Mahmoud Yasser. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg='6' md='6' className='mb-3'>
            <div className="links d-flex align-items-center gap-4">
              <p className="m-0">Follow: </p>
              <span>
                <Link to="/">
                  <i class="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="/">
                  <i class="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link to="/">
                  <i class="ri-youtube-line"></i>
                </Link>
              </span>

              <span>
                <Link to="/">
                  <i class="ri-linkedin-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer