import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      {/* <section>
        <Container>
          <Row>
            <Col>
              <h2>Liên Hệ</h2>
              <p>
                Để liên hệ với chúng tôi hoặc theo dõi chúng tôi trên các mạng
                xã hội, bạn có thể sử dụng các liên kết sau:
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/foodie"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/foodie/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Địa Chỉ Cửa Hàng</h2>
              <ul>
                <li>CN I: 445 Sư Vạn Hạnh, P.12, Q.10, TP.HCM.</li>
                <li>CN II: 48 Trần Quang Diệu, P.14, Q.3, TP.HCM.</li>
                <li>CN III: 350 Điện Biên Phủ, P.17, Q. Bình Thạnh, TP.HCM.</li>
                <li>
                  CN IV: G-Town 2, 136 Nguyễn Hồng Đào, P.14, Q.Tân Bình,
                  TP.HCM.
                </li>
                <li>CN V: 463 Quang Trung, P.10, Q. Gò Vấp, TP.HCM.</li>
                <li>CN VI: TNP - 26 Lý Tự Trọng, P. Bến Nghé, Q.1, TP.HCM.</li>
                <li>
                  CN VII: TNP (Sense Market) - Đối Diện Số 90 Lê Lai, P. Bến
                  Nghé, Q.1, TP.HCM.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};

export default Contact;
