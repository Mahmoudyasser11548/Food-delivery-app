import { Col, Container, Row } from "reactstrap";
import { Helmet, Hero, ProductCard } from "../../Components/index";
import ReactPaginate from 'react-paginate';
import { useState } from 'react'
import './AllFoods.css'
import products from "../../assets/products/products";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [pageNumber, setPageNumber] = useState(0);


  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return ( 
    <Helmet title='All Foods'>
      <Hero title='All Foods'></Hero>

      <Container> 
        <Row>
          <Col lg='12' md='12' className='d-flex justify-content-center align-items-center my-5'>
            <div className="searchbar d-flex justify-content-between align-items-center">
              <input type="text"
                placeholder="I'm Looking for ...."
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
              />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row>
          {
            displayPage.map((item,index) => (
              <Col lg='3' md='4' sm='6' key={index}>
                <ProductCard item={item} />
              </Col>
            ))
          }
        </Row>

        <div>
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel={"Prev"}
            nextLabel={"Next"}
            containerClassName=" paginationBttns "
          />
        </div>
      </Container>
    </Helmet>
  );
}

export default AllFoods;