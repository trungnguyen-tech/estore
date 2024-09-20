import { FloatingLabel, Form, Button } from "react-bootstrap";

const FormMessage = () =>{
    return (
        <>
            <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Tên của bạn"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="xxxx" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Tin nhắn"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
            <Button className="customButtonFormIcon" type="submit">Gửi</Button>
          </FloatingLabel>
        </>
    )
}

export default FormMessage;