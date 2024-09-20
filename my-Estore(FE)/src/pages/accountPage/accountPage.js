import React, {useEffect, useState} from "react";
import "./accountPage.css";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Avatar } from "@mui/material";
import EditProfileDetail from "./editProfleDetail/editProfileDetail";
import OrderDetail from "./ordersDetail/orderDetail";
import SecurityDetail from "./securityDetail/securityDetail";
import ContactUsDetail from "./contactUsDetail/contactUsDetail";
import WishListDetail from "./wishListDetail/wishListDetail";
import { useAuth } from "../../context/authContext";
import { NavLink, Navigate } from "react-router-dom";

const AccountPage = () => {
  const { logout, userDatas } = useAuth();
  const handleLogout = () => {
    logout();
    <Navigate to="/" />
  };

  return (
    <Container className="accountPage">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col className="navMenu" sm={3}>
            <div className="avatarUser">
              <Avatar src={userDatas && userDatas.avatarUrl} />
              <span className="nameUser">
                {userDatas && userDatas.fullName}
              </span>
            </div>
            <Nav variant="pills" className="flex-column customNavMenuItem">
              <Nav.Item>
                <Nav.Link eventKey="first">
                  <i class="fa-solid fa-user-pen"></i>{" "}
                  <span>Thông tin cá nhân</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  <i class="fa-solid fa-bag-shopping"></i>{" "}
                  <span>Lịch sử mua hàng</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  <i class="fa-solid fa-heart-circle-check"></i>
                  <span>Yêu thích</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">
                  <i class="fa-solid fa-shield-halved"></i>
                  <span>Bảo mật</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">
                  <i class="fa-solid fa-phone-volume"></i>{" "}
                  <span>Liên hệ với chúng tôi</span>
                </Nav.Link>
              </Nav.Item>
              <NavLink to="/">
                <button onClick={handleLogout} className="btn-Logout">
                  <span style={{ color: "#C91433" }}>Đăng xuất</span>{" "}
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
              </NavLink>
            </Nav>
          </Col>
          <Col sm={9} className="m-2 p-3">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <EditProfileDetail userDatas={userDatas && userDatas} />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <OrderDetail />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <WishListDetail />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <SecurityDetail />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <ContactUsDetail />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default AccountPage;
