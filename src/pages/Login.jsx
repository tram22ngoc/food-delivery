import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { firestore } from '../firebase/config';

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = loginNameRef.current.value;
    const password = loginPasswordRef.current.value;
    try {
      const usersRef = firestore.collection("users");
      const query = usersRef.where('email', '==', email);
      const userSnapshot = await query.get();

      if (userSnapshot.empty) {
        console.log('khong tim thay nguoi dung voi email nay !!');
        return;
      }

      const userData = userSnapshot.docs[0].data();
      if (userData.password !== password) {
        console.log('Mat khau sai ')
        return
      }
      console.log('thanh cong')
    } catch (err) {
      console.error(err)
    }
  };
  return (
    <Helmet title='Login'>
      <CommonSection title='Login' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className='form mb-5' onSubmit={submitHandler}>
                <div className='form__group'>
                  <input
                    type='email'
                    placeholder='Email'
                    ref={loginNameRef}
                  ></input>
                </div>
                <div className='form__group'>
                  <input
                    type='password'
                    placeholder='Password'
                    ref={loginPasswordRef}
                  ></input>
                </div>
                <button type='submit' onClick={submitHandler} className='addToCart__btn'>
                  Login
                </button>
              </form>
              <Link to='/register'>First time here? Create an account</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
