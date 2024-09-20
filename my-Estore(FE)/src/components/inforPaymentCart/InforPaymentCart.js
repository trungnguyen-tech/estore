import { Card } from "react-bootstrap";
import React from "react";
import "./inforPaymentCart.css";

const InforPaymentCart = ({ price=[] }) => {
  const disscount = 0;
  const ship = 0;
  const priceProducts = Array.isArray(price) ? price.reduce((sum, a) => sum + a, 0) : 0;
  let total = priceProducts + disscount + ship;
  return (
    <>
      <Card className="inforPaymentCard">
        <Card.Header style={{ width: "100%" }}>
          Thông tin thanh toán
        </Card.Header>
        <Card.Body style={{ width: "100%" }}>
          <Card.Text className="showMoney">
            <span>Tổng tiền: </span>
            <span>
              {priceProducts.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
            {/* Tính tiền ở đây */}
          </Card.Text>
          <Card.Text className="showMoney">
            <span>Mã giảm giá: </span>
            <span>
              {disscount.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </Card.Text>
          <Card.Text className="showMoney">
            <span>Ship: </span>
            <span>
              {ship.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
            {/* tính tiền ở đây */}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ width: "100%" }} className="showMoney">
          <span>Tổng tiền:</span>
          <span>
            {total.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </span>
          {/* tính tiền ở đây */}
        </Card.Footer>
      </Card>
    </>
  );
};
export default InforPaymentCart;
