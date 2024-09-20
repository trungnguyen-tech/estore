import React from "react";
import "./productItemsPayment.css";
import { Container, Row, Col } from "react-bootstrap";

const ProductItemsPayment = ({ product }) => {
  return (
    <Container className="productItemPayment">
      <Row>
        <Col lg={2}>
          <img src={product.product.productImages[0]} />
        </Col>
        <Col>
          <h6>{product.product.productName}</h6>
          <p>Số lượng: {product.quantity}</p>
          <div className="footerContent">
            <p>Thương hiệu: {product.product.brand}</p>
            <p className="price">
              {product.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default ProductItemsPayment;
