import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/product-card.css";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { useDispatch } from "react-redux";
import { Col, Row } from "reactstrap";

const ProductCard = ({ product }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const dispatch = useDispatch();

  const addToCart = (id, name, price, image1) => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
        image1,
      })
    );
  };

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? product
      : product.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* <Row>
        <Col lg="6" md="6" sm="6" xs="12" className="mb-4">
          <div className="col-auto align-self-center">Select category:</div>
          <div className="col">
            <select
              className="form-select"
              aria-label="Default select example"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Burger">Burger</option>
              <option value="Pizza">Pizza</option>
              <option value="Bread">Bread</option>
            </select>
          </div>
        </Col>
      </Row> */}
      <div className="d-flex" style={{ width: "88vw", flexWrap: "wrap" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              className="product__item mx-2 mt-2"
              key={item.id}
              style={{ width: "20%" }}
            >
              <div className="product__img">
                <img src={item.image1} alt="product-img" className="w-50" />
              </div>
              <div className="product__content">
                <h5>
                  <Link to={`/foods/${item.id}`}>{item.name}</Link>
                </h5>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="product__price">${item.price}</span>
                  <button
                    onClick={() =>
                      addToCart(item.id, item.name, item.price, item.image1)
                    }
                    className="addToCart__btn"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products to display.</p>
        )}
      </div>
    </>
  );
};

export default ProductCard;
