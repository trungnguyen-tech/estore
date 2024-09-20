import "./securityDetail.css";
import React, { useState } from "react";
import {
  Form,
  Modal,
  Container,
  Row,
  Col,
  Button,
  FloatingLabel,
  Image,
} from "react-bootstrap";

const SecurityDetail = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const custTomInputsize = {
    width: "220px",
    paddingLeft: "40px",
    fontWeight: "300",
    height: "40px",
    fontSize: "14px",
  };
  return (
    <div className="securityDetail">
      <h5 className="profileTitle">Bảo mật</h5>
      <span className="profileSubTitle">(Thay đổi mật khẩu của bạn)</span>
      <div className="context">
        <Form.Label className="labelTitle">Mật khẩu:</Form.Label>
        <Form.Control
          style={custTomInputsize}
          type="text"
          placeholder="Password"
          aria-label="Disabled input example"
          readOnly
        />
        <span className="icon iconLeft">
          <i class="fa-solid fa-key"></i>
        </span>

        <button onClick={handleShow} className="icon iconRight">
          <i
            style={{ color: "var(--primary-main)" }}
            class="fa-regular fa-pen-to-square"
          ></i>
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Image
                  src="https://pathwayport.net/saasland/images/reset_pass.png"
                  rounded
                  className="bannerChangePass"
                />
              </Col>
              <Col className="changePass">
                <Form id="changePassword">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Mật khẩu mới"
                    className="mb-3"
                  >
                    <Form.Control type="password" placeholder="Password" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Nhập lại mật khẩu mới"
                  >
                    <Form.Control type="password" placeholder="Password" />
                  </FloatingLabel>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="btnAction">
          <button className="btn-acction btn-cancel" onClick={handleClose}>
            Hủy
          </button>
          <button
            className="btn-acction btn-access"
            type="submit"
            form="changePassword"
            onClick={handleClose}
          >
            Xác nhận
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default SecurityDetail;
