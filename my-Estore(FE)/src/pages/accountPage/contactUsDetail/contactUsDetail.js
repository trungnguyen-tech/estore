import "./contactUsDetail.css";
import { Row, Container, Col } from "react-bootstrap";

const ContactUsDetail = () => {
  return (
    <div className="contactUsDetail">
      <h5 className="profileTitle">Liên hệ với chúng tôi</h5>
      <span className="profileSubTitle">(Contact Us)</span>
      <h3 style={{marginTop: "20px"}}>Bạn có thể liên hệ chúng tôi thông qua:</h3>
      <Row className="contactContext">
        <Col className="informationShop">
            <h5>Electronic Store</h5>
            <span><i class="fa-solid fa-phone"></i> Số điện thoại: 089.610.1610</span>
            <span><i class="fa-solid fa-at"></i> Email: pinnguyencloud@gmail.com</span>
            <span><i class="fa-solid fa-map-location"></i> 
              Địa chỉ: 1A Nguyễn Văn Lượng, phường 6, quận Gò Vấp, Tp.Hồ Chí Minh
            </span>
            <div className="socialShop">
                <p>Hoặc có thể liên hệ qua trang mạng xã hội: </p>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/pinnguyen0582" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://m.me/pinnguyen0582" target="_blank"><i class="fa-brands fa-facebook-messenger"></i></a>
                    <a href="https://www.instagram.com/pin_991016" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>
        </Col>
        <Col className="shopMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6382642659546!2d106.67938277490875!3d10.838970189313686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175285406d43c11%3A0x81e23a7ba30b3479!2zMUEgTmd1eeG7hW4gVsSDbiBMxrDhu6NuZywgUGjGsOG7nW5nIDYsIEfDsiBW4bqlcCwgSOG7kyBDaMOtIE1pbmgsIOODmeODiOODiuODoA!5e0!3m2!1sja!2s!4v1721311170626!5m2!1sja!2s"
            width="500"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>
    </div>
  );
};
export default ContactUsDetail;
