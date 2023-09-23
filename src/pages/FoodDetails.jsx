import React, { useState, useEffect } from 'react';
import products from '../assets/fake-data/products';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/shopping-cart/cartSlice';
import ProductCard from '../components/UI/product-card/ProductCard';
import '../styles/product-details.css';
const FoodDetails = () => {

    // Khởi tạo các state để lưu trữ thông tin sản phẩm và đánh giá
  const [tab, setTab] = useState('desc');
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [reviewMsg, setReviewMsg] = useState('');

    // Sử dụng hook useParams để lấy tham số từ URL
  const { id } = useParams();

    // Tìm sản phẩm dựa trên id từ danh sách sản phẩm
  const product = products.find((product) => product.id === id);

    // Khởi tạo state và lấy ra một số thông tin từ sản phẩm
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;

  // Lọc ra các sản phẩm liên quan dựa trên category
  const relatedProduct = products.filter((item) => category === item.category);

    // Sử dụng useDispatch để gửi action đến Redux store khi thêm sản phẩm vào giỏ hàng
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };
 
    // Xử lý khi người dùng nhấn nút "Submit" trên form đánh giá
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredName, enteredEmail, reviewMsg);
  };

   // Sử dụng useEffect để cập nhật hình ảnh xem trước khi sản phẩm thay đổi
  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  // Sử dụng useEffect để cuộn đến đầu trang khi sản phẩm thay đổi
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

    // Render giao diện của trang chi tiết sản phẩm
  return (

   // Sử dụng Helmet để thiết lập tiêu đề trang
    <Helmet title='Food Details'>
      <CommonSection title={title} />
    {/* Phần nội dung chính của trang */}
      <section>
        <Container>
          <Row>
   {/* Phần chọn hình ảnh sản phẩm */}
            <Col lg='2' md='2'>
              <div className='product__images'>
        {/* Xử lý khi người dùng nhấn vào hình ảnh */}
               <div
                  className='img__item mb-3'
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt='' className='w-50' />
                </div>
                <div
                  className='img__item mb-3'
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt='' className='w-50' />
                </div>
                <div
                  className='img__item'
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt='' className='w-50' />
                </div>
              </div>
            </Col>
        {/* Phần hiển thị hình ảnh sản phẩm lớn */}
            <Col lg='4' md='4'>
              <div className='product__main-img'>
                <img src={previewImg} alt='' className='w-100' />
              </div>
            </Col>
        {/* Phần thông tin sản phẩm */}
            <Col lg='6' md='6'>
              <div className='single__product-content'>
                <h2 className='product__title mb-3'>{title}</h2>
                <p className='product__price'>
                  Price: <span>${price}</span>
                </p>
                <p className='category mb-5'>
                  Category: <span>{category}</span>
                </p>
                <button onClick={addItem} className='addToCart__btn'>
                  Add to Cart
                </button>
              </div>
            </Col>

           {/* Phần chuyển tab mô tả và đánh giá */}
            <Col lg='12'>
              <div className='tabs d-flex align-items-center gap-5 py-2'>
                <h6
                  className={tab === 'desc' ? 'tab__active' : ''}
                  onClick={() => setTab('desc')}
                >
                  Description
                </h6>
                <h6
                  className={tab === 'rev' ? 'tab__active' : ''}
                  onClick={() => setTab('rev')}
                >
                  Review
                </h6>
              </div>

              {/* Hiển thị nội dung tương ứng với tab được chọn */}
              {tab === 'desc' ? (
                <div className='tab__content'>
                  <p>{desc}</p>
                </div>
              ) : (
                <div className='tab__form mb-3'>
                {/* Hiển thị danh sách đánh giá và form đánh giá */}
                  <div className='review pt-5'>
                    <p className='user__name mb-0'>John Doe</p>
                    <p className='user__email'>johndoe@gmail.com</p>
                    <p className='feedback__text'>Great food</p>
                  </div>

                  <div className='review'>
                    <p className='user__name mb-0'>John Doe</p>
                    <p className='user__email'>johndoe@gmail.com</p>
                    <p className='feedback__text'>Great food</p>
                  </div>
                  <div className='review'>
                    <p className='user__name mb-0'>{enteredName}</p>
                    <p className='user__email'>{enteredEmail}</p>
                    <p className='feedback__text'>{reviewMsg}</p>
                  </div>
                  <form className='form' onSubmit={submitHandler}>
                    <div className='form__group'>
                      <input
                        type='text'
                        placeholder='Enter your name'
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                      />
                    </div>
                    <div className='form__group'>
                      <input
                        type='text'
                        placeholder='Enter your email'
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className='form__group'>
                      <textarea
                        rows={5}
                        type='text'
                        placeholder='Leave your feedback here'
                        onChange={(e) => setReviewMsg(e.target.value)}
                        required
                      />
                    </div>
                    <button type='submit' className='addToCart__btn'>
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            {/* Phần sản phẩm liên quan */}
            <Col lg='12' className='mb-5 mt-4'>
              <h2 className='related__product-title'>Maybe you will like it too</h2>
            </Col>

         {/* Hiển thị danh sách sản phẩm liên quan */}
            {relatedProduct.map((item) => (
              <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
