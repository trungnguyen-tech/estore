import "./checkout.css";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useChangeTab } from "../../../context/supportHandleChangeTab";
import { useAuth } from "../../../context/authContext";
import { useCart } from "../../../context/cartContext";

const CheckoutPage = () => {
  const { handleNextStepPayment, handlePrevStepPayment } = useChangeTab();
  const { setRecipientInformation } = useCart();
  const [formData, setFormData] = useState({
    isChecked: true,
    inputDisabled: true,
  });
  const { userDatas } = useAuth();
  const [recipientInfor, setRecipientInfor] = useState({});

  useEffect(() => {
    if (userDatas) {
      setRecipientInfor({
        ...recipientInfor,
        userName: userDatas.userName,
        recipientName: userDatas.fullName,
        address: userDatas.address,
        phone: userDatas.phoneNumber,
        paymentMethod: "",
      });
    }
  }, [userDatas]);

  const handleCheckedChange = (e) => {
    const checked = e.target.checked;
    setFormData({
      ...formData,
      isChecked: checked,
      inputDisabled: checked,
    });
  };

  const handleNextPage = () => {
    if (recipientInfor) {
      setRecipientInformation(recipientInfor);
    }
    handleNextStepPayment();
  };

  return (
    <Container className="checkOutPage mb-5">
      <Row className="checkOutPage-Content">
        <Col lg={8} className="checkOutPage-ContentItems">
          <Card className="p-3 checkOutPage-ContentItem">
            <Form>
              <Form.Check
                checked={formData.isChecked}
                onChange={handleCheckedChange}
                type="switch"
                id="custom-switch"
                label="Tôi là người nhận đơn"
              />
              <Form.Group className="mb-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Họ và tên:"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Nguyễn Văn A"
                    name="name"
                    value={recipientInfor.recipientName}
                    onChange={(e) =>
                      setRecipientInfor({
                        ...recipientInfor,
                        recipientName: e.target.value,
                      })
                    }
                    disabled={formData.inputDisabled}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Số điện thoại:"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="090.xxx.xxx"
                    name="phone"
                    value={recipientInfor.phone}
                    onChange={(e) =>
                      setRecipientInfor({
                        ...recipientInfor,
                        phone: e.target.value,
                      })
                    }
                    disabled={formData.inputDisabled}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group style={{ position: "relative" }} className="mb-3">
                <Form.Label>Giao hàng tới:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name="address"
                  aria-label="Disabled input example"
                  value={recipientInfor.address}
                  onChange={(e) =>
                    setRecipientInfor({
                      ...recipientInfor,
                      address: e.target.value,
                    })
                  }
                  disabled={formData.inputDisabled}
                />
              </Form.Group>
              <label>Hình thức thanh toán</label>
              <Form.Select
                aria-label="Default select example"
                name="paymentMethod"
                onChange={(e) =>
                  setRecipientInfor({
                    ...recipientInfor,
                    paymentMethod: e.target.value,
                  })
                }
              >
                <option value="">
                  --Vui lòng chọn phương thức thanh toán--
                </option>
                <option value="Thanh toán khi nhận hàng">Thanh toán khi nhận hàng</option>
                <option value="Chuyển khoản ngân hàng">Chuyển khoản ngân hàng</option>
                <option value="Thẻ tín dụng">Thẻ tín dụng/ Napas/ Visa</option>
              </Form.Select>
            </Form>
          </Card>
          <button
            onClick={() => {
              handlePrevStepPayment();
            }}
            className="prevPage"
          >
            Trở lại trang giỏ hàng
          </button>
        </Col>
        <Col className="checkoutInfoPayment">
          <Button
            onClick={() => {
              handleNextPage();
            }}
            className="btnPayment"
          >
            <i class="fa-solid fa-angles-right"></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default CheckoutPage;
