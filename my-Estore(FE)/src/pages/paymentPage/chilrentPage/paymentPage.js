import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InforPaymentCart from "../../../components/inforPaymentCart/InforPaymentCart";
import "./paymentPage.css";
import defaultBanner from "../../../assets/img/default-product.png";
import { useCart } from "../../../context/cartContext";
import { useChangeTab } from "../../../context/supportHandleChangeTab";
import ProductItemsPayment from "../../../components/productItemsPayment/productItemsPayment";

const PaymentDetailPage = () => {
  const { recipientInformation, cart, completePayment, announcement } =
    useCart();
  const { handlePrevStepPayment } = useChangeTab();
  const [cartItems, setCartItems] = useState([]);
  const [showSuccesModal, setShowSuccesModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart) {
      setCartItems(cart.cartItems);
    }
  }, [cart]);

  const handleCompletePayment = async () => {
    await completePayment();
    if (announcement) {
      setShowSuccesModal(true);
    if(announcement === 'Đã thêm vào giỏ hàng thành công'){
      setTimeout(() =>{
        setShowSuccesModal(false);
        navigate("/");
      },5000)
    }
    }
  };

  const handleCloseModal = () => {
    setShowSuccesModal(false);
    navigate("/");
  };

  return (
    <Container className="paymentDetailPage">
      <Row>
        <Col>
          <h5>Thông tin thanh toán: </h5>
          <Card className="p-3 m-3">
            <Card.Body>
              <Card.Text>
                <label>Họ và tên: </label>
                <span>{recipientInformation.recipientName}</span>
              </Card.Text>
              <Card.Text>
                <label>Số điện thoại: </label>
                <span>{recipientInformation.phone}</span>
              </Card.Text>
              <Card.Text>
                <label>Địa chỉ nhận hàng: </label>
                <span>{recipientInformation.address}</span>
              </Card.Text>
              <Card.Text>
                <label>Hình thức thanh toán: </label>
                <span>{recipientInformation.paymentMethod}</span>
              </Card.Text>
              <Card.Subtitle style={{ marginBottom: "10px" }}>
                List Product:
              </Card.Subtitle>
              <Col style={{ maxHeight: "400px", overflowY: "auto" }}>
                {cartItems &&
                  cartItems.map((item, key) => {
                    return <ProductItemsPayment product={item} index={key} />;
                  })}
              </Col>
            </Card.Body>
          </Card>
          <button onClick={() => handlePrevStepPayment()} className="preStep">
            Trở lại thông tin thanh toán
          </button>
        </Col>
        <Col lg={5}>
          <h5>Hóa đơn</h5>
          <InforPaymentCart
            price={cartItems && cartItems.map((item) => item.price)}
          />
          <button onClick={() => handleCompletePayment()} className="complete">
            Xác nhận thanh toán
          </button>
        </Col>
      </Row>
      <Modal className="modalAnnouncement" show={showSuccesModal} onHide={handleCloseModal}>
        <Modal.Body >
          <p>{announcement === 'Đã thêm vào giỏ hàng thành công' ? "Thanh toán thành công" : "Thanh toán thất bại"}</p>
          <i>(Trở lại trang chủ sau 5 giây ...)</i>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default PaymentDetailPage;
