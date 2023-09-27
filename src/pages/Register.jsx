import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { firestore } from "../firebase/config";

const Register = () => {
  const registerNameRef = useRef();
  const registerPasswordRef = useRef();
  const registerEmailRef = useRef();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const name = registerNameRef.current.value;
    const email = registerEmailRef.current.value;
    const password = registerPasswordRef.current.value;

    try {
      const usersRef = firestore.collection("users");
      await usersRef.add({
        name: name,
        email: email,
        password: password,
      });

      navigate("/login");
      console.log("Successful");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Helmet title="Register">
      <CommonSection title="Register" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    ref={registerNameRef}
                  ></input>
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    ref={registerEmailRef}
                  ></input>
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    ref={registerPasswordRef}
                  ></input>
                </div>
                <button
                  type="submit"
                  onClick={submitHandler}
                  className="addToCart__btn"
                >
                  Sign up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
