import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import ProductCard from "../components/UI/product-card/ProductCard";
import "../styles/product-details.css";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    const productDetails = products.find((product) => product.id === id);
    setProduct(productDetails || null);
  }, [id, products]);

  useEffect(() => {
    if (product) {
      setPreviewImg(product.image1);
    }
  }, [product]);

  const [previewImg, setPreviewImg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const dispatch = useDispatch();

  const addItem = () => {
    if (product) {
      dispatch(
        cartActions.addItem({
          id,
          name: product.name,
          price: product.price,
          image1: product.image1,
        })
      );
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredName, enteredEmail, reviewMsg);
  };
  return (
    <Helmet title="Food Details">
      <CommonSection title={product ? product.name : ""} />
      <section>
        <Container>
          <Row>
            {product && (
              <Col lg="2" md="2">
                <div className="product__images">
                  <div
                    className="img__item mb-3"
                    onClick={() => setPreviewImg(product.image1)}
                  >
                    <img src={product.image1} alt="" className="w-50" />
                  </div>
                  <div
                    className="img__item mb-3"
                    onClick={() => setPreviewImg(product.image2)}
                  >
                    <img src={product.image2} alt="" className="w-50" />
                  </div>
                  <div
                    className="img__item"
                    onClick={() => setPreviewImg(product.image3)}
                  >
                    <img src={product.image3} alt="" className="w-50" />
                  </div>
                </div>
              </Col>
            )}

            <Col lg="4" md="4">
              <div className="product__main-img">
                {previewImg && (
                  <img src={previewImg} alt="" className="w-100" />
                )}
              </div>
            </Col>

            {product && (
              <Col lg="6" md="6">
                <div className="single__product-content">
                  <h2 className="product__title mb-3">{product.name}</h2>
                  <p className="product__price">
                    Price: <span>${product.price}</span>
                  </p>
                  <p className="category mb-5">
                    Category: <span>{product.category}</span>
                  </p>
                  <button onClick={addItem} className="addToCart__btn">
                    Add to Cart
                  </button>
                </div>
              </Col>
            )}

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-2">
                <h6
                  className={tab === "desc" ? "tab__active" : ""}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={tab === "rev" ? "tab__active" : ""}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  {product && <p>{product.desc}</p>}
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review pt-5">
                    <p className="user__name mb-0">John Doe</p>
                    <p className="user__email">johndoe@gmail.com</p>
                    <p className="feedback__text">Great food</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">John Doe</p>
                    <p className="user__email">johndoe@gmail.com</p>
                    <p className="feedback__text">Great food</p>
                  </div>
                  <div className="review">
                    <p className="user__name mb-0">{enteredName}</p>
                    <p className="user__email">{enteredEmail}</p>
                    <p className="feedback__text">{reviewMsg}</p>
                  </div>
                  <form className="form" onSubmit={submitHandler}>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Leave your feedback here"
                        onChange={(e) => setReviewMsg(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="addToCart__btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
