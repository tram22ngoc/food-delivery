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

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFileredProducts] = useState([]);


  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

   // Lọc sản phẩm dựa trên từ khóa tìm kiếm
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFileredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
             {/* Phần tìm kiếm */}
          <Col lg='6' md='6' sm='6' xs='12'>

           {/* Input để nhập từ khóa tìm kiếm */}
              <div className='search__widget d-flex align-items-center justify-content-between'>
                <input
                  type='text'
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className='ri-search-line'></i>
                </span>
              </div>
            </Col>

            <Col lg='6' md='6' sm='6' xs='12' className='mb-4'>

               {/* Dropdown để chọn cách sắp xếp sản phẩm */}
              <div className='sorting__widget text-end'>
                <select className='w-50'>
                  <option>Default</option>
                  <option value='high-price'>High price</option>
                  <option value='low-price'>Low price</option>
                </select>
              </div>
            </Col>

            {/* Hiển thị danh sách sản phẩm */}
            {searchTerm === ""
              ? (
                  <Col lg="3" md="4" sm="6" xs="6" className="mb-4" >
                    <ProductCard product={products} />
                  </Col>
                )
              :  (
                  <Col lg="3" md="4" sm="6" xs="6" className="mb-4" >
                    <ProductCard product={filteredProducts} />
                  </Col>
                )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
