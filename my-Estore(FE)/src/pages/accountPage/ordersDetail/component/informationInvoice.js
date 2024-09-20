import { Card } from "react-bootstrap";
import React from "react";

const InformationInvoice = ({ item }) => {
  return (
    <div className="card cardItem">
      <Card.Header>
        <Card.Title className="titleCart">
          {item.product.productName}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Img className="imgItem" src={item.product.productImages[0]} />
        <Card.Text>
          <div className="customInforProduct">
            <span>Thương hiệu: {item.product.brand}</span>
            <span>Màu sắc: {item.product.color}</span>
            <span>Số Lượng: {item.quantity}</span>
            <span style={{ color: "var(--secondary-main)", fontSize: "16px", fontWeight: "400" }}>
              {item.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
        </Card.Text>
      </Card.Body>
    </div>
  );
};

export default InformationInvoice;
