import "./paymentDetailPage.css";
import React from "react";
import CartDetailPage from "./chilrentPage/CartDetailPage";
import PaymentDetailPage from "./chilrentPage/paymentPage";
import CheckoutPage from "./chilrentPage/checkoutPage";
import { Tab, Tabs } from "react-bootstrap";
import { useChangeTab } from "../../context/supportHandleChangeTab";

const PaymentPage = () => {
  const { keyPayment, setKeyPayment } = useChangeTab();
  return (
    <Tabs
      activeKey={keyPayment}
      onSelect={(k) => setKeyPayment(k)}
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab
        eventKey="cart"
        key="cart"
        title={
          <div className="titleIconPaymentPage">
            <i class="material-icons icon">add_shopping_cart</i>
            <span>Giỏ hàng</span>
          </div>
        }
      >
        <CartDetailPage />
      </Tab>
      <Tab
        disabled
        key="checkout"
        eventKey="checkout"
        title={
          <div className="titleIconPaymentPage">
            <i class="material-icons icon">local_shipping</i>
            <span>Thông tin thanh toán</span>
          </div>
        }
      >
        <CheckoutPage />
      </Tab>
      <Tab
        disabled
        key="payment"
        eventKey="payment"
        title={
          <div className="titleIconPaymentPage">
            <i class="material-icons icon">credit_card</i>
            <span>Thanh toán</span>
          </div>
        }
      >
        <PaymentDetailPage />
      </Tab>
    </Tabs>
  );
};

export default PaymentPage;
