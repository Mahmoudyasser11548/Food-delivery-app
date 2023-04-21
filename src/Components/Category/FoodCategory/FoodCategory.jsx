import { Col, Row } from "reactstrap";
import products from "../../../assets/products/products";
import { ProductCard } from "../../index";

import bread from '../../../assets/imgs/bread.png'
import hamburger from '../../../assets/imgs/hamburger.png'
import pizza from '../../../assets/imgs/pizza.png'

import './FoodCategory.css'

import { useEffect, useState } from "react";

const FoodCategory = () => {
  const [category, setCategory] = useState('all');
  const [allFoods, setAllFoods] = useState(products);


  useEffect(() => {
    if (category === "all") {
      setAllFoods(products);
    }

    if (category === "burger") {
      const filteredProducts = products.filter((item) => item.category === "Burger");

      setAllFoods(filteredProducts);
    }

    if(category === 'pizza') {
      const FilterProducts = products.filter(item => item.category === 'Pizza')
      setAllFoods(FilterProducts)
    }

    if(category === 'bread') {
      const FilterProducts = products.filter(item => item.category === 'Bread')
      setAllFoods(FilterProducts)
    }
    
  }, [category])
  

  return (  
    <>
      <Row>
        <Col lg="12" className="text-center">
          <h2 className="mb-5">Popular Foods</h2>
        </Col>

        <Col lg="12" className="text-center mb-4">
          <div className="food d-flex align-items-center justify-content-center gap-5">
            <button className={`food-content d-flex align-items-center gap-2 
            ${category === 'all' ? 'food-btnActive' : ''}`} onClick={() => setCategory('all')}>
              All
            </button>

            <button className={`food-content d-flex align-items-center gap-2 
            ${category === 'burger' ? 'food-btnActive' : ''}`} onClick={() => setCategory('burger')}>
              <img src={ hamburger} alt="" />
              Burger
            </button>

            <button className={`food-content d-flex align-items-center gap-2 
            ${category === 'pizza' ? 'food-btnActive' : ''}`} onClick={() => setCategory('pizza')}>
              <img src={ pizza} alt="" />
              Pizza
            </button>

            <button className={`food-content d-flex align-items-center gap-2 
            ${category === 'bread' ? 'food-btnActive' : ''}`} onClick={() => setCategory('bread')}>
              <img src={ bread} alt="" />
              Bread
            </button>
          </div>
        </Col>
        

      </Row>
      <Row>
        {
          allFoods.map((item) => (
            <Col lg='3' md='4' sm="6" key={item.id}>
              <ProductCard item={ item } />
            </Col>
          ))
        }
      </Row>
    </>
  );
}

export default FoodCategory;