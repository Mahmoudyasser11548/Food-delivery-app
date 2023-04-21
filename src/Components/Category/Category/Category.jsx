import './Category.css'
import { Col } from 'reactstrap';
import catagoryImg01 from '../../../assets/imgs/category-01.png'
import catagoryImg02 from '../../../assets/imgs/category-02.png'
import catagoryImg03 from '../../../assets/imgs/category-03.png'
import catagoryImg04 from '../../../assets/imgs/category-04.png'
  
const catagories = [
  {
    display: 'Fast Foods',
    imgURL: catagoryImg01
  },
  {
    display: 'Pizza',
    imgURL: catagoryImg02
  },
  {
    display: 'Asian Food',
    imgURL: catagoryImg03
  },
  {
    display: 'Row Meat',
    imgURL: catagoryImg04
  }
]

const Category = () => {
  return ( 
    <>
      {
        catagories.map((item, index) => (
          <Col md='4' lg='3' key={index}>
            <div className="catagory-item d-flex align-items-center mb-3 gap-3">
              <div className="catagory-img">
                <img src={item.imgURL} alt={`catagory-${index}`} />
              </div>
              <h6 className="catagory-title ms-2">{ item.display}</h6>
            </div>
          </Col>
        ))
      }
    </>
  );
}

export default Category