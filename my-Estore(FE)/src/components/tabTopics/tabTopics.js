import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import QuestionDetails from "./questionDetail/questionDetail";

function TabTopics() {
  const dataQues = [
    {
      ques: "Tôi có thể mua sản phẩm từ store bằng hình thức trả góp không? ",
      anwers:
        "Có, Store cung cấp tùy chọn mua sản phẩm bằng cả thanh toán tiền mặt và trả góp. Điều này cho phép bạn chọn phương thức thanh toán phù hợp với nhu cầu và ngân sách của mình.",
    },
    {
      ques: "Làm cách nào để tương tác với nội dung tạp chí trên Store? ",
      anwers:
        "Bạn có thể chủ động tương tác với nội dung tạp chí bằng cách để lại nhận xét và tham gia vào phần hỏi đáp. Hãy thoải mái chia sẻ suy nghĩ của bạn, đặt câu hỏi và tương tác với những người đam mê công nghệ trong cộng đồng.",
    },
    {
      ques: "Store có bảo hành cho các sản phẩm của mình không?",
      anwers:
        "Có, Store cung cấp bảo hành cho tất cả các sản phẩm đủ điều kiện. Các chi tiết bảo hành cụ thể có thể khác nhau tùy thuộc vào nhà sản xuất và danh mục sản phẩm. Vui lòng tham khảo mô tả sản phẩm hoặc liên hệ với bộ phận hỗ trợ khách hàng của chúng tôi để biết thêm thông tin.",
    },
    {
      ques: "Store có phải là một nền tảng an toàn để mua sắm trực tuyến không?",
      anwers:
        "Có, Tech Heim cung cấp bảo hành cho tất cả các sản phẩm đủ điều kiện. Các chi tiết bảo hành cụ thể có thể khác nhau tùy thuộc vào nhà sản xuất và danh mục sản phẩm. Vui lòng tham khảo mô tả sản phẩm hoặc liên hệ với bộ phận hỗ trợ khách hàng của chúng tôi để biết thêm thông tin.",
    },
    {
      ques: "Làm thế nào tôi có thể nhận được hỗ trợ mua hàng của tôi hoặc bất kỳ yêu cầu nào khác?",
      anwers:
        "Nếu bạn cần hỗ trợ mua hàng hoặc có bất kỳ câu hỏi nào, nhóm hỗ trợ khách hàng tận tâm của chúng tôi luôn sẵn sàng trợ giúp. Bạn có thể liên hệ với chúng tôi thông qua trang liên hệ trên trang web của chúng tôi và chúng tôi sẽ sẵn lòng hỗ trợ bạn kịp thời.",
    },
  ];
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="1">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <h5>Table of Contents</h5>
            <Nav.Item>
              <Nav.Link eventKey="1">Tổng quát</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2">Câu hỏi về độ "an toàn"</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3">Câu hỏi về dịch vụ khách hàng</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4">Hình thức thanh toán</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="1">
              {dataQues && dataQues.map(item => <QuestionDetails dataQues = {item}/>)}
            </Tab.Pane>
            <Tab.Pane eventKey="2">Second tab content</Tab.Pane>
            <Tab.Pane eventKey="3">3</Tab.Pane>
            <Tab.Pane eventKey="4">4</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TabTopics;
