import React from "react";
import { ListGroupItem } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import "../../../styles/cart-item.css";
const CartItem = ({ item }) => {
  const { id, name, price, image1, quantity, totalPrice} = item;
  const dispatch = useDispatch();
  // Hàm 'increaseItem' để tăng số lượng của một sản phẩm trong giỏ hàng
  const increaseItem = () => {
    dispatch(cartActions.addItem({ id, name, price, image1 }));
  };
  // Hàm 'increaseItem' để giảm số lượng của một sản phẩm trong giỏ hàng
  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };
  // Hàm 'deleteItem' để xóa một sản phẩm khỏi giỏ hàng
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  // Giao diện của một mục trong giỏ hàng
  return (
    <ListGroupItem className="border-0 cart__item" key={id}>
      <div className="cart__item-info d-flex gap-2">
        <img src={image1} alt="product-img" />
        <div className="cart__product-info w-100 d-flex align-items-center justify-content-between gap-4">
          <div>
            <h6 className="cart__product-title">{name}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              x {quantity} = <span>${totalPrice}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              <span onClick={increaseItem} className="increase__btn">
                <i className="ri-add-line" />
              </span>
              <span className="quantity">{quantity}</span>
              <span onClick={decreaseItem} className="decrease__btn">
                <i className="ri-subtract-line" />
              </span>
            </div>
          </div>
          <span className="delete__btn" onClick={deleteItem}>
            <i className="ri-close-line" />
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
