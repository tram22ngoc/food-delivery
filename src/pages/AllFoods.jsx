import React, { useEffect, useState } from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import "../styles/all-foods.css";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/admin/productsSlice";
const AllFoods = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  // eslint vô hiệu hóa mảng dòng tiếp theo trả về
  const searchedProduct = products.filter((item) => {
    return (
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const productPerPage = 8;
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
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-4">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="high-price">High price</option>
                  <option value="low-price">Low price</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="">
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4 ">
                <ProductCard product={products} key={products.id} />
              </Col>
            </div>
          </Row>

          <div>
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel="Prev"
              nextLabel="Next"
              containerClassName="paginationBtns"
            />
          </div>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
