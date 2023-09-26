import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../styles/product-card.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { fetchData } from "../../../store/admin/productsSlice";
const ProductCard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
    <div>
      {products.map((product) => (
        <div className="product__item" key={product.id}>
          <div className="product__img">
            <img src={product.image1} alt="product-img" className="w-50" />
          </div>
          <div className="product__content">
            <h5>
              <Link to={`/foods/${product.id}`}>{product.name}</Link>
            </h5>
            <div className="d-flex align-items-center justify-content-between">
              <span className="product__price">${product.price}</span>
              <button
                onClick={() =>
                  addToCart(
                    product.id,
                    product.name,
                    product.price,
                    product.image1
                  )
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
