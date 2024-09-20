import { useState } from "react";
import { Button, Col, Form, InputGroup, Row, Modal } from "react-bootstrap";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { useAuth } from "../../../context/authContext";

function SubmitEditInfor({ datas }) {
  const { uppdateAccount,deleteAccount } = useAuth();
  const [validated, setValidated] = useState(false);
  const [showEditAccount, setShowEditAccount] = useState(false);
  const [updateRequest, setUpdateRequest] = useState({
    address: datas.item.address,
    phoneNumber: datas.item.phoneNumber,
    email: datas.item.email,
    fullName: datas.item.fullName,
  });
  const userName = datas ? datas.item.userName : "";
  const [showModalRemove, setShowModalRemove] = useState(false);


  const formatDay = (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }else{
        uppdateAccount(userName, updateRequest);
    }

    setValidated(true);
  };

  return (
    <>
      <tr>
        <td>{datas.index + 1}</td>
        <td>
          {datas.item.fullName ? datas.item.fullName : datas.item.userName}
        </td>
        <td>{datas.item.email}</td>
        <td>{datas.item.address}</td>
        <td>
          {
            <Avatar
              alt={datas.item.userName.toUpperCase()}
              src={datas.item.avatarUrl}
            />
          }
        </td>
        <td>{datas.item.userName}</td>
        <td>{formatDay(datas.item.createdAt)}</td>
        <td>
          <Tooltip title="Sửa tài khoản">
            <button style={{color: 'var(--primary-main)'}} onClick={() => setShowEditAccount(true)}><i class="fa-solid fa-pen-to-square"></i></button>
          </Tooltip>
          <Tooltip title="Xóa tài khoản">
            <button style={{color: 'red'}} onClick={() => setShowModalRemove(true)}><i class="fa-solid fa-trash"></i></button>
          </Tooltip>
        </td>
      </tr>

      <Modal
        size="lg"
        show={showEditAccount}
        onHide={() => setShowEditAccount(false)}
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="FullName">
                <Form.Label>Tên của bạn:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nhập tên"
                  value={updateRequest.fullName}
                  onChange={(e) =>
                    setUpdateRequest({
                      ...updateRequest,
                      fullName: e.target.value,
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Hãy nhập tên của bạn
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="Phone">
                <Form.Label>Số điện thoại</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">+84</InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="Số điện thoại"
                    aria-describedby="phone"
                    required
                    value={updateRequest.phone}
                    onChange={(e) =>
                      setUpdateRequest({
                        ...updateRequest,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Hãy nhập số điện thoại
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom03">
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập địa chỉ"
                  value={updateRequest.address}
                  onChange={(e) =>
                    setUpdateRequest({
                      ...updateRequest,
                      address: e.target.value,
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Hãy nhập địa chỉ của bạn
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="email">@</InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Hãy nhập Email"
                    aria-describedby="email"
                    required
                    value={updateRequest.email}
                    onChange={(e) =>
                      setUpdateRequest({
                        ...updateRequest,
                        email: e.target.value,
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Hãy nhập Email
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" onClick={() => setShowEditAccount(false)}>
              Xác Nhận
            </Button>
          </Form>
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
              deleteAccount(datas.item.userName);
            }}
          >
            Xác nhân
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SubmitEditInfor;
