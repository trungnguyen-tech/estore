import React, { useState } from "react";
import "./cartDetail.css";
import Badge from "@mui/material/Badge";
import { Modal, Container, Row, Col } from "react-bootstrap";
import defaultProduct from "../../../assets/img/default-product.png";
import InforPaymentCart from "../../inforPaymentCart/InforPaymentCart";
import { useNavigate } from "react-router-dom";
import ProductCartItem from "../../productCartItem/productCartItem";
import { useCart } from "../../../context/cartContext";
import { useChangeTab } from "../../../context/supportHandleChangeTab";

const CartDetails = () => {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);
  const navigate = useNavigate();
  const { cart } = useCart();
  const { setKeyPayment } = useChangeTab();

  const handleNavigate = () => {
    handleClose();
    navigate("/payment");
    setKeyPayment("cart");
  };

  return (
    <div className="cartDetail" style={{ cursor: "pointer" }}>
      <Badge
        onClick={handleShow}
        badgeContent={cart?.cartItems?.length}
        sx={{
          "& .MuiBadge-badge": {
            backgroundColor: "red",
            color: "white",
            fontSize: "10px",
            minWidth: "10px",
            height: "17px",
          },
        }}
      >
        <i className="fa-solid fa-cart-shopping"></i>
      </Badge>
      <Modal size="lg" show={lgShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Giỏ hàng của bạn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            {
              <Row>
                <Col md={8} style={{ maxHeight: "400px", overflowY: "auto" }}>
                  {cart?.cartItems && cart.cartItems.length > 0 ? (
                    cart.cartItems.map((item, index) => (
                      <ProductCartItem item={item} key={index} />
                    ))
                  ) : (
                    <div style={{width: "100%",height:"300px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                      <img
                        style={{ width: "200px" }}
                        src={defaultProduct}
                        alt="Default product"
                      />
                    </div>
                  )}
                </Col>
                <Col lg="4">
                  <InforPaymentCart
                    price={cart?.cartItems?.map((item) => item.price)}
                  />
                  <button
                    className="navigationPayment"
                    onClick={handleNavigate}
                  >
                    Tiến hành thanh toán{" "}
                    <i class="fa-solid fa-angles-right"></i>
                  </button>
                </Col>
              </Row>
            }
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CartDetails;
