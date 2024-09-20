import "./footer.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="contentFooter">
        <Row className="mainFooter">
          <Col className="footerCompany footerLayout ">
            <p className="h6 small">Doanh nghiệp</p>
            <a className="small">Giới thiệu chung</a>
            <a className="small">Blog</a>
            <a className="small">Returns</a>
            <a className="small">Tình trạng đơn hàng</a>
          </Col>
          <Col className="footerInfo footerLayout ">
            <p className="h6 small">Info</p>
            <a className="small">How it work?</a>
            <a className="small">our promises</a>
            <a className="small">FAQ</a>
          </Col>
          <Col className="footerContact footerLayout">
            <p className="h6 small">Thông tin liên hệ</p>
            <p className="small">1A Nguyễn Văn Lượng, Gò Vấp,HCM</p>
            <p className="small">+8489.610.1610</p>
            <p className="small">pinnguyencloud@gmail.com</p>
          </Col>
          <Col className="footerUpdates footerLayout ">
            <p className="h6 small">
              Đăng ký nhận mail về khuyến mãi và sản phẩm mới
            </p>
            <Col className="inputEmailEntry">
              <span className="inputIcon leftIcon">
                <i class="fa-solid fa-user"></i>
              </span>
              <span className="inputIcon rightIcon">
                <i class="fa-regular fa-paper-plane"></i>
              </span>
              <input
                className="form-control form-control-sm emailEntry"
                placeholder="Email"
              />
            </Col>
            <Col className="iconSocial">
              <a href="#">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-twitch"></i>
              </a>
            </Col>
          </Col>
        </Row>
        <Button className="backToHeaderPage btn">
          <i class="fa-solid fa-angle-up"></i>
        </Button>
        <Row className="policy">
          <Col className="pinshop">
            <p className="h6 small">
              <i class="fa-solid fa-circle-info"></i> 2024 PinNguyen
            </p>
          </Col>
          <Row className="frame col">
            <a className="col small">cookie settings</a>
            <a className="col small">Privacy Policy</a>
            <a className="col small">Term and Conditions</a>
            <a className="col small">Imprint</a>
          </Row>
        </Row>
        <div className="elip"></div>
      </Container>
    </div>
  );
};
export default Footer;
