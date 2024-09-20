import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Tab,
  Tabs,
  Table,
  Modal,
  Button,
} from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import { useAuth } from "../../../context/authContext";
import Tooltip from "@mui/material/Tooltip";
import SubmitRegister from "../component/submitRegister";
import SubmitEditInfor from "../component/submitEditInfor";
import "./managementEmployee.css";
import LinearProgress from "@mui/material/LinearProgress";

const ManagementEmpolyee = () => {
  const { dataAccount, signUp, loading, deleteAccount } = useAuth();
  const [userName, setUserName] = useState("");
  const [accountAdmin, setAccountAdmin] = useState([]);
  const [accountCustomer, setAccountCustomer] = useState([]);
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [showAddAccountCus, setShowAddAccountCus] = useState(false);
  const [showModalRemove, setShowModalRemove] = useState(false);

  const formatDay = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    if (dataAccount) {
      setAccountAdmin(dataAccount.filter((item) => item.role === "admin"));
      setAccountCustomer(
        dataAccount.filter((item) => item.role === "customer")
      );
    }
  }, [dataAccount]);

  const handleRemoveAccount = (obj) => {
    setShowModalRemove(true);
    setUserName(obj.userName);
  };

  return (
    <Container className="p-2 m-2 managementAccount">
      <h4>Quản lý tài khoản</h4>
      <Tabs
        defaultActiveKey="employee"
        id="fill-tab-example"
        className="mb-3 customAccountTabs"
        fill
      >
        <Tab eventKey="employee" title="Nhân viên">
          <Tooltip title="Thêm tài khoản admin">
            <button
              className="addNewProduct"
              onClick={() => setShowAddAccount(true)}
            >
              <i class="fa-solid fa-plus"></i>
            </button>
          </Tooltip>

          <Row className="rowTable">
            {loading ? (
              <div style={{width: "100%", marginTop: "20px"}}>
                <LinearProgress />
              </div>
            ) : (
              <Table striped hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Avatart</th>
                    <th>UserName</th>
                    <th>Create At</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody style={{ maxHeight: "300px", overflowY: "auto" }}>
                  {accountAdmin &&
                    accountAdmin.map((item, index) => {
                      return <SubmitEditInfor datas={{ item, index }} />;
                    })}
                </tbody>
              </Table>
            )}
          </Row>
        </Tab>
        <Tab eventKey="customer" title="Khách hàng">
          <Tooltip title="Thêm tài khoản mới">
            <button
              className="addNewProduct"
              onClick={() => setShowAddAccountCus(true)}
            >
              <i class="fa-solid fa-plus"></i>
            </button>
          </Tooltip>

          <Row className="rowTable">
            {loading ? (
              <div style={{ width: "100%", marginTop: "20px" }}>
                <LinearProgress />
              </div>
            ) : (
              <Table striped hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Avatart</th>
                    <th>UserName</th>
                    <th>Create At</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody style={{ maxHeight: "300px", overflowY: "auto" }}>
                  {accountCustomer &&
                    accountCustomer.map((item, index) => {
                      return (
                        <>
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              {item.fullName ? item.fullName : item.userName}
                            </td>
                            <td>{item.email}</td>
                            <td>{item.address ? item.address : "-"}</td>
                            <td>
                              {
                                <Avatar
                                  alt={item.userName.toUpperCase()}
                                  src={item.avatarUrl}
                                />
                              }
                            </td>
                            <td>{item.userName}</td>
                            <td>{formatDay(item.createdAt)}</td>
                            <td>
                              <Tooltip title="Xóa">
                                <button
                                  style={{ color: "red" }}
                                  onClick={() => handleRemoveAccount(item)}
                                >
                                  <i class="fa-solid fa-trash"></i>
                                </button>
                              </Tooltip>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </Table>
            )}
          </Row>
        </Tab>
      </Tabs>
      <Modal show={showAddAccount} onHide={() => setShowAddAccount(false)}>
        <Modal.Header closeButton />
        <Modal.Body>
          <SubmitRegister onSubmit={signUp} role={"admin"} />
          <Button
            form="registerSubmit"
            type="submit"
            onClick={() => setShowAddAccount(false)}
          >
            Xác nhận
          </Button>
        </Modal.Body>
      </Modal>
      <Modal
        show={showAddAccountCus}
        onHide={() => setShowAddAccountCus(false)}
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <SubmitRegister onSubmit={signUp} role="customer" />
          <Button
            form="registerSubmit"
            type="submit"
            onClick={() => setShowAddAccountCus(false)}
          >
            Xác nhận
          </Button>
        </Modal.Body>
      </Modal>
      <Modal show={showModalRemove} onHide={() => setShowModalRemove(false)}>
        <Modal.Body>Xác nhận xóa tài khoản ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalRemove(false)}>
            Hủy
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              deleteAccount(userName);
              setShowModalRemove(false);
            }}
          >
            Xác nhân
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManagementEmpolyee;
