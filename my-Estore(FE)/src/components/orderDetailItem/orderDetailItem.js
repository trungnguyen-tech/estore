import React, { useState } from "react";
import "./orderDetailItem.css";
import { Modal, Container, Col, Row, Card } from "react-bootstrap";
import InformationInvoice from "../../pages/accountPage/ordersDetail/component/informationInvoice";

const OrderDetailItem = ({ cartItem }) => {
  const [show, setShow] = useState(false);
  const dateString = cartItem.purchaseDate;
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  const totalPrice = cartItem?.cartItems
    ?.reduce((sum, a) => {
      return (sum += a.price);
    }, 0)
    .toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

  return (
    <tr>
      <td>{`MHD${cartItem.cartId}`}</td>
      <td>{cartItem.cartItems.length}</td>
      <td>{totalPrice}</td>
      <td>{formattedDate}</td>
      <td>
        <i>Đã thanh toán</i>
      </td>
      <td>
        <button onClick={() => setShow(true)}>
          <i class="fa-solid fa-eye"></i>
        </button>
      </td>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Hóa đơn</Modal.Title>
        </Modal.Header>
        <Modal.Body className="customModalOrder">
          <Container className="p-3">
            <Row>
              <Col>
                <Card className="p-3">
                  <Card.Text>
                    Họ và tên người nhận:{" "}
                    {cartItem.recipientName
                      ? cartItem.recipientName
                      : cartItem.userName}
                  </Card.Text>
                  <Card.Text>Địa chỉ: {cartItem.address}</Card.Text>
                  <Card.Text>SĐT: {cartItem.phone}</Card.Text>
                  <Card.Text>
                    Phương thức thanh toán: {cartItem.paymentMethod}
                  </Card.Text>
                  <Card.Text>Tổng tiền đơn hàng: {totalPrice}</Card.Text>
                </Card>
              </Col>
              <Col lg={7} style={{ maxHeight: "400px", overflowY: "auto" }}>
                {cartItem?.cartItems?.map((item, index) => {
                  return <InformationInvoice item={item} index={index} />;
                })}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </tr>
  );
};

export default OrderDetailItem;
