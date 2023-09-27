import { ListGroup } from "reactstrap";
import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../../../styles/shopping-cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUISlice";
const Carts = () => {
  // Lấy hàm 'dispatch' để gửi các action đến Redux store
  const dispatch = useDispatch();

  // Lấy danh sách các sản phẩm trong giỏ hàng và tổng giá trị của giỏ hàng từ Redux store
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  // Hàm 'toggleCart' được sử dụng để ẩn/hiện giỏ hàng
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill" />
          </span>
        </div>
        <div className="cart__item-list">
          {/* Kiểm tra nếu giỏ hàng trống, hiển thị thông báo */}
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">Cart is empty</h6>
          ) : (
            // Nếu giỏ hàng không trống, hiển thị danh sách các sản phẩm
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          {/* Hiển thị tổng giá trị của giỏ hàng */}
          <h6>
            Total: <span>${totalAmount}</span>
          </h6>
          {/* Nút 'Checkout' dẫn đến trang thanh toán */}
          <button>
            <Link to="/checkout">Checkout </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
