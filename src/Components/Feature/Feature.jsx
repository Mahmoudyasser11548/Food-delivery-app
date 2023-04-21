import './Feature.css'
import { Col , Row } from 'reactstrap'
import featureImg01 from '../../assets/imgs/service-01.png'
import featureImg02 from '../../assets/imgs/service-02.png'
import featureImg03 from '../../assets/imgs/service-03.png'

const features = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Feature = () => {
  return (  
    <>
      <Col lg='12' md='12' className='text-center'>
        <h5 className="subtitle">What we serve</h5>
        <h2 className="feature-title mb-0">Just sit back at home</h2>
        <h2 className="feature-title mb-3">we will <span>take care</span></h2>

        <p className="mb-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, ex.</p>
        <p className="mt-1 mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </Col>
      <Row>
        {
          features.map((item, index) => (
            <Col lg='4' md='4' className='my-5' key={index}>
              <div className="feature-item text-center">
                <div className="feature-img">
                  <img src={item.imgUrl} alt={ `feature-0${index}` } className='w-25 mb-3'/>
                </div>
                <h5 className="feature-title">{item.title}</h5>
                <p className="desc">{ item.desc }</p>
              </div>
            </Col>
          ))
        }
      </Row>
    </>
  );
}

export default Feature