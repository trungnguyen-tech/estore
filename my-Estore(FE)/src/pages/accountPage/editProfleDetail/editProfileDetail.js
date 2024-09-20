import "./editProfileDetail.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../../context/authContext";
import Snackbar from "@mui/material/Snackbar";

const EditProfileDetail = ({ userDatas }) => {
  const userName = userDatas && userDatas.userName;
  const [fullName, setFullName] = useState(
    () => userDatas && userDatas.fullName
  );
  const [email, setEmail] = useState(() => userDatas && userDatas.email);
  const [phoneNumber, setPhoneNumber] = useState(
    () => userDatas && userDatas.phoneNumber
  );
  const [address, setAddress] = useState(() => userDatas && userDatas.address);
  const { uppdateAccount, message } = useAuth();
  const [open, setOpen] = useState(false);

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  

  useEffect(() => {
    setFullName((userDatas && userDatas.fullName) || "");
    setEmail((userDatas && userDatas.email) || "");
    setPhoneNumber((userDatas && userDatas.phoneNumber) || "");
    setAddress((userDatas && userDatas.address) || "");
  }, [userDatas]);

  const handleUppdateAccount = (e) => {
    e.preventDefault();
    uppdateAccount(userName, { fullName, email, phoneNumber, address });
    handleClose();
  };

  const custTomInputsize = {
    width: "80%",
    paddingLeft: "40px",
    fontWeight: "300",
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="profileUser">
      <h5 className="profileTitle">Thông tin cá nhân</h5>
      <span className="profileSubTitle">
        (*Chỉnh sửa thông tin cá nhân của bạn bằng cách nhấn vào nút edit bên
        góc trái nhé.)
      </span>
      <div className="profileInfor">
        <button onClick={handleShow} className="btn-editProfile">
          Edit <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <Row>
          <Col className="inputItem">
            <Form.Label className="labelTitle">Họ và tên:</Form.Label>
            <Form.Control
              style={custTomInputsize}
              type="text"
              value={fullName}
              aria-label="Disabled input example"
              readOnly
            />
            <span className="icon">
              <i class="fa-solid fa-user"></i>
            </span>
          </Col>
          <Col className="inputItem">
            <Form.Label className="labelTitle">Email:</Form.Label>
            <Form.Control
              style={custTomInputsize}
              type="text"
              value={email}
              aria-label="Disabled input example"
              readOnly
            />
            <span className="icon">
              <i class="fa-solid fa-inbox"></i>
            </span>
          </Col>
        </Row>
        <Row>
          <Col className="inputItem">
            <Form.Label className="labelTitle">Số điện thoại:</Form.Label>
            <Form.Control
              style={custTomInputsize}
              type="text"
              value={phoneNumber}
              aria-label="Disabled input example"
              readOnly
            />
            <span className="icon">
              <i class="fa-solid fa-phone"></i>
            </span>
          </Col>
          <Col className="inputItem">
            <Form.Label className="labelTitle">Password:</Form.Label>
            <Form.Control
              style={custTomInputsize}
              type="text"
              value="******"
              aria-label="Disabled input example"
              readOnly
            />
            <span className="icon">
              <i class="fa-solid fa-key"></i>
            </span>
          </Col>
        </Row>
        <Row>
          <Col className="inputItem">
            <Form.Label className="labelTitle">Địa chỉ:</Form.Label>
            <Form.Control
              style={custTomInputsize}
              type="text"
              value={address}
              aria-label="Disabled input example"
              readOnly
            />
            <span className="icon">
              <i class="fa-solid fa-house"></i>
            </span>
          </Col>
          <Col></Col>
        </Row>
      </div>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header style={{alignItems:'baseline'}} closeButton>
          <Modal.Title style={{display: 'flex', flexDirection: 'column'}}>
            Chỉnh sửa thông tin cá nhân
            <p
              style={{
                fontSize: "14px",
                fontWeight: "300",
                fontStyle: "italic",
                color: 'black',
              }}
            >
              (*Hãy chỉnh sửa thông tin của bạn tại đây)
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUppdateAccount} id="formEditProfile">
            <Container>
              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Họ và tên:</Form.Label>
                    <Form.Control
                      value={fullName}
                      type="text"
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      value={email}
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                      value={phoneNumber}
                      type="number"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control
                      value={address}
                      type="text"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button onClick={() => setOpen(true)} form="formEditProfile" variant="primary" type="submit">
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleCloseSnackBar}
        message={<><i class="fa-solid fa-circle-check" style={{color: 'green'}}></i> {message}</>}
        sx={{
          '& .MuiSnackbarContent-root': {
            backgroundColor: 'white',
            color: 'black',
            fontSize: '16px',
          },
        }}
      />
    </div>
  );
};

export default EditProfileDetail;
