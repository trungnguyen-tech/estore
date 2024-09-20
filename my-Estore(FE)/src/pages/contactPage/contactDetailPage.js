import { Container, Row, Col } from "react-bootstrap";
import FormMessage from "../../components/contact-Message/fromMessage";
import "./contactDetail.css";
import React, { useState, useEffect } from "react";
import SpinnerDetail from "../../components/spinner/spinnderDetail";

const ContactDetail = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <SpinnerDetail/>
      </Container>
    );
  }

  return (
    <Container className="contactDetail">
      <Row>
        <Col>
          <div className="messageUs">
            <h5>Hãy gửi tin nhắn cho chúng tôi</h5>
            <p>
              Chúng tôi ở đây để hỗ trợ bạn từng bước. Cho dù bạn có câu hỏi,
              cần hỗ trợ kỹ thuật hay chỉ đơn giản là muốn chia sẻ phản hồi của
              mình, đội ngũ tận tâm của chúng tôi sẵn sàng lắng nghe và cung cấp
              hỗ trợ nhanh chóng.
            </p>
          </div>
        </Col>
        <Col className="formMessage">
          <FormMessage />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <Row className="iconContact">
            <Col className="iconContactItem">
              <div className="h4">
                <i class="fa-solid fa-map-location"></i>
              </div>
              <span className="h5">Địa chỉ:</span>
              <span className="iconContactItem-content">
                1A Nguyễn Văn Lượng, phường 6, Q.Gò vấp, Tp.Hồ Chí Minh
              </span>
            </Col>
            <Col className="iconContactItem">
              <div className="h4">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <span className="h5">Emai</span>
              <span className="iconContactItem-content">
                pinnguyencloud@gmail.com
              </span>
            </Col>
            <Col className="iconContactItem">
              <div className="h4">
                <i class="fa-solid fa-phone"></i>
              </div>
              <span className="h5">Phone</span>
              <span className="iconContactItem-content">089.610.1610</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactDetail;
