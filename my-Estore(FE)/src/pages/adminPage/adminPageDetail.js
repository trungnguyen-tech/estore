import React, { useState, useEffect } from "react";
import "./adminPageDetail.css";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ManagementProduct from "./childrenPage/managementProduct";
import ManagementEmpolyee from "./childrenPage/managementEmployee";
import SpinnerDetail from "../../components/spinner/spinnderDetail";

const AdminPageDetail = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <SpinnerDetail />
      </Container>
    );
  }
  return (
    <Container className="customAdminPageDetail">
      <h3>estore's admin page</h3>
      <Tab.Container id="left-tabs-example" defaultActiveKey="product">
        <Row>
          <Col sm={3} className="customLeftTabs p-3">
            <h5>Công cụ quản lý</h5>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="product">
                  <i style={{ color: "black" }} class="fa-solid fa-list"></i>{" "}
                  Quản lý sản phẩm
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="employee">
                  <i
                    style={{ color: "black" }}
                    class="fa-regular fa-circle-user"
                  ></i>{" "}
                  Quản lý tài khoản
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="product">
                <ManagementProduct />
              </Tab.Pane>
              <Tab.Pane eventKey="employee">
                <ManagementEmpolyee />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default AdminPageDetail;
