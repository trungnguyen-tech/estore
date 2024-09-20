import React, { useState, useContext } from "react";
import "./loginDetail.css";
import SignUp from "./signUp";
import SignIn from "./logIn";
import { Modal, Button } from "react-bootstrap";
import { useChangeTab } from "../../../context/supportHandleChangeTab";


function LoginDetail() {
  const {handleShow, handleClose, show} = useChangeTab();
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };
  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div>
      <Button className="LoginBtn" variant="" onClick={handleShow}>
        Đăng nhập
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        dialogClassName="custom-modal"
      >
        <Modal.Body>
          <div
            className={`custom-content containerLogin ${
              isRightPanelActive ? "right-panel-active" : ""
            }`}
            id="container"
          >
            <Button variant="" onClick={handleClose} className="close-btn">
              <i class="fa-solid fa-xmark"></i>
            </Button>
            <SignUp />
            <SignIn />
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    Bạn đã có tài khoản ?
                  </p>
                  <button
                    className="ghost"
                    id="signIn"
                    onClick={handleSignInClick}
                  >
                    Đăng nhập ngay
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Bro</h1>
                  <p>Bạn chưa có tài khoản ?</p>
                  <button
                    className="ghost"
                    id="signUp"
                    onClick={handleSignUpClick}
                  >
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LoginDetail;
