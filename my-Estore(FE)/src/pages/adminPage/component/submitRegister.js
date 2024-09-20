import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

function SubmitRegister({onSubmit, role}) {
  const [validated, setValidated] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [registerRequest, setRegisterRequest] = useState({
    userName: "",
    password: "",
    email: "",
    role: role,
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const password = form.elements["password"].value;
    const confirmPassword = form.elements["confirmPassword"].value;

    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      event.stopPropagation();
    } else {
      setPasswordMatch(true);
    }

    if (form.checkValidity() === false || !passwordMatch) {
      event.stopPropagation();
    } else {
        onSubmit(registerRequest);
    }
    setValidated(true);
  };

  return (
    <Form noValidate id="registerSubmit" validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="userName">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="userName">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="userName"
              required
              value={registerRequest.userName}
              onChange={(e) =>
                setRegisterRequest({
                  ...registerRequest,
                  userName: e.target.value,
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập userName
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            required
            value={registerRequest.email}
            onChange={(e) =>
              setRegisterRequest({
                ...registerRequest,
                email: e.target.value,
              })
            }
          />
          <Form.Control.Feedback type="invalid">
            Hãy nhập Email
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="password">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            placeholder="Mật khẩu"
            required
            value={registerRequest.password}
            onChange={(e) =>
              setRegisterRequest({
                ...registerRequest,
                password: e.target.value,
              })
            }
          />
          <Form.Control.Feedback type="invalid">
            Hãy nhập mật khẩu
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="confirmPassword">
          <Form.Label>Nhập lại mật khẩu</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập lại mật khẩu"
            required
          />
          <Form.Control.Feedback type="invalid">
            Hãy nhập lại mật khẩu
          </Form.Control.Feedback>
          {!passwordMatch && (
            <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
              Mật khẩu không trùng khớp
            </Form.Control.Feedback>
          )}
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Đồng ý với điều khoản và điều kiện"
          feedback="Bạn phải đồng ý trước khi gửi."
          feedbackType="invalid"
        />
      </Form.Group>
    </Form>
  );
}

export default SubmitRegister;
