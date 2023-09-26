import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/product-card.css";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
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
  return (
    <div className="d-flex" style={{ width: "88vw" }}>
      {product.map((item) => (
        <div className="product__item mx-2" key={item.id}>
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
      ))}
    </div>
  );
};

export default ProductCard;
