import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useProduct } from "../../../../context/productContext";
import { Snackbar } from "@mui/material";

function AddNewProduct() {
  const [validated, setValidated] = useState(false);
  const { addNewProductItem, setShowAdd } = useProduct();
  const [addNewRequest, setAddnNewRequest] = useState({
    productName: "",
    description: "",
    price: 0,
    stock: 0,
    category: "Tivi",
    brand: "",
    color: "",
  });
  const [open, setOpen] = useState(false);

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      addNewProductItem(addNewRequest);
      setShowAdd(false);
    }
    setValidated(true);
    setOpen(true);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomProduct">
            <Form.Label>Tên sản phẩm</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                required
                type="text"
                placeholder="Nhập tên sản phẩm"
                value={addNewRequest.productName}
                onChange={(e) =>
                  setAddnNewRequest({
                    ...addNewRequest,
                    productName: e.target.value,
                  })
                }
              />
              <Form.Control.Feedback type="invalid">
                Hãy nhập tên sản phẩm
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomCategory">
            <Form.Label>Danh mục</Form.Label>
            <Form.Select
              value={addNewRequest.category}
              onChange={(e) => {
                setAddnNewRequest({
                  ...addNewRequest,
                  category: e.target.value,
                });
              }}
              required
              aria-label="Default select example"
            >
              <option defaultChecked value="Tivi">
                Tivi
              </option>
              <option value="May Lanh">Máy lạnh</option>
              <option value="Tu Lanh">Tủ lạnh</option>
              <option value="May Giat">Máy giặt</option>
              <option value="Gia Dung">Gia dụng</option>
              <option value="May Loc Nuoc">Máy lọc nước</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomBrand">
            <Form.Label>Hãng</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Nhập tên hãng"
                aria-describedby="inputGroupPrepend"
                required
                value={addNewRequest.brand}
                onChange={(e) => {
                  setAddnNewRequest({
                    ...addNewRequest,
                    brand: e.target.value,
                  });
                }}
              />
              <Form.Control.Feedback type="invalid">
                Hãy nhập tên hãng
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustomDes">
            <Form.Label>Mô tả sản phẩm:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập mô tả sản phẩm"
              required
              value={addNewRequest.description}
              onChange={(e) => {
                setAddnNewRequest({
                  ...addNewRequest,
                  description: e.target.value,
                });
              }}
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập mô tả sản phẩm
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustomStock">
            <Form.Label>Màu sắc</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập màu"
              required
              value={addNewRequest.color}
              onChange={(e) =>
                setAddnNewRequest({
                  ...addNewRequest,
                  color: e.target.value,
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập màu sắc
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustomPrice">
            <Form.Label>Giá</Form.Label>
            <Form.Control
              type="number"
              placeholder="Hãy nhập giá"
              required
              value={addNewRequest.price}
              onChange={(e) =>
                setAddnNewRequest({
                  ...addNewRequest,
                  price: e.target.value,
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập giá sản phẩm
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustomStock">
            <Form.Label>Số lượng</Form.Label>
            <Form.Control
              type="number"
              placeholder="Số lượng"
              required
              value={addNewRequest.stock}
              onChange={(e) =>
                setAddnNewRequest({
                  ...addNewRequest,
                  stock: e.target.value,
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Hãy nhập số lượng
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Xác nhận hoàn thành đơn"
            feedback="Bạn cần xác nhận đã kiểm tra thông tin trước khi xác nhận đơn"
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Thêm sản phẩm</Button>
      </Form>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleCloseSnackBar}
        message={
          <>
            <i class="fa-solid fa-circle-check" style={{ color: "green" }}></i>{" "}
            Bạn đã thêm sản phẩm mới thành công
          </>
        }
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "white",
            color: "black",
            fontSize: "16px",
          },
        }}
      />
    </>
  );
}

export default AddNewProduct;
