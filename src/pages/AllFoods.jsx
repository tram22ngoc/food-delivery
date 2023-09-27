import React, { useEffect, useState } from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import "../styles/all-foods.css";
import "../styles/pagination.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/admin/productsSlice";
const AllFoods = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <div className="">
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4 ">
                <ProductCard product={products} key={products.id} />
              </Col>
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
