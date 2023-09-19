import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className='footer__logo text-start'>
              <img src={logo} alt='logo' />
              <h5>Foodie</h5>
              <span>
              <p>Pizza Monday 1K</p>  
              <p>CHICKEN LOVE</p>  
              <p>Buy 1 get 3</p>
              </span>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Monday - Friday</span>
                <p>9:00am - 22:00pm</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Saturday - Sunday</span>
                <p>8:00am - 22:30pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Address: 731,CMT8, TP.HCM</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Phone: 039876543</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: piza@foodie.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Newsletter</h5>
            <p>Subcribe our newsletter</p>
            <div className='newsletter'>
              <input type='email' placeholder='Enter your email'></input>
              <span>
                <i class='ri-send-plane-line'></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright__text'>
              Copyright made by Tram , under guidance from Muhibur
              Rahman
            </p>
          </Col>
          <Col lg='6' md='6'>
            <div className='social__links d-flex align-items-center gap-4 justify-content-end'>
              <p className='m-0'>Follow us: </p>
              <span>
                <Link to='https://www.facebook.com/tramngoc1999'>
                  <i className='ri-facebook-circle-fill'></i>
                </Link>
              </span>
              <span>
                <Link to='https://github.com/tramnguyenhere'>
                  <i className='ri-github-fill'></i>
                </Link>
              </span>
              <span>
                <Link to='https://www.linkedin.com/in/tramnguyenhere/'>
                  <i className='ri-linkedin-box-fill'></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
