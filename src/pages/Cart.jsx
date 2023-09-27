import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import "../styles/cart-page.css";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
const Cart = () => {
  //cartItems lưu danh sách các sản phẩm trong giỏ hàng
  const cartItems = useSelector((state) => state.cart.cartItems);
  // totalAmount lưu tổng số tiền của giỏ hàng.
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Your cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {/* // Hiển thị bảng sản phẩm trong giỏ hàng */}
              {cartItems.length === 0 ? (
                <h5 className="text-center">Cart is empty</h5>
              ) : (
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}
              <div className="mt-4">
                {/* Hiển thị tổng tiền và các nút để tiếp tục mua sắm hoặc thanh toán */}
                <h6>
                  Total:
                  <span className="cart__subtotal"> ${totalAmount}</span>
                </h6>
                <p>Shipping fees will be calculated at checkout</p>
                <div className="cart__page-btn">
                  <button className="addToCart__btn me-4">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="addToCart__btn">
                    <Link to="/checkout">Proceed to payment</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  //Props bao gồm các thông tin của sản phẩm trong giỏ hàng
  const { id, image1, title, price, quantity } = props.item;
  const dispatch = useDispatch();
  //deleteItem khi người dùng muốn xóa sản phẩm khỏi giỏ hàng.
  const deleteItem = () => dispatch(cartActions.deleteItem(id));
  return (
    //    {/* Hiển thị thông tin sản phẩm và nút xóa */}
    <tr>
      <td className="text-center cart__img-box">
        <img src={image1} alt="food"></img>
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity} pcs</td>
      <td onClick={deleteItem} className="text-center cart__item-del">
        <i className="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};

export default Cart;
