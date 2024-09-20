import React, { useState } from "react";
import { useProduct } from "../../../../context/productContext";
import { Modal, Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import { Tooltip } from "@mui/material";
import { Snackbar } from "@mui/material";

const EditProduct = ({ product }) => {
  const { removeProduct, updateProductItem } = useProduct();
  const [showEdit, setShowEdit] = useState(false);
  const [validated, setValidated] = useState(false);
  const [open, setOpen] = useState(false);
  const [updateRequest, setUpdateRequest] = useState({
    productName: product.item.productName,
    description: product.item.description,
    price: product.item.price,
    stock: product.item.stock,
    category: product.item.category,
    brand: product.item.brand,
  });
  const [showModalRemove, setShowModalRemove] = useState(false);

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      updateProductItem(product.item.productId, updateRequest);
      setShowEdit(false);
    }
    setValidated(true);
  };
  const checkCategory = (category) => {
    switch (category) {
      case "Tivi":
        return "Tivi";
      case "May Lanh":
        return "Máy lạnh";
      case "Tu Lanh":
        return "Tủ lạnh";
      case "May Giat":
        return "Máy giặt";
      case "Gia Dung":
        return "Gia dụng";
      case "May Loc Nuoc":
        return "Máy lọc nước";
    }
  };

  return (
    <>
      <tr>
        <td>{product.index + 1}</td>
        <td>{`MSSP${product.item.productId}`}</td>
        <td style={{ maxWidth: "200px" }}>{product.item.productName}</td>
        <td>{checkCategory(product.item.category)}</td>
        <td>{product.item.brand}</td>
        <td>
          {product.item.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </td>
        <td>{product.item.stock}</td>
        <td>
          <Tooltip title="Sửa sản phẩm">
            <button
              style={{ color: "var(--primary-main)" }}
              onClick={() => setShowEdit(true)}
              className="btnEditProduct"
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
          </Tooltip>
          <Tooltip title="Xóa sản phẩm">
            <button
              style={{ color: "red" }}
              onClick={() => setShowModalRemove(true)}
              className="btnRemoveProduct"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </Tooltip>
        </td>
      </tr>
      <Modal
        size="lg"
        show={showEdit}
        onHide={() => {
          setShowEdit(false);
          setUpdateRequest({
            productName: product.item.productName,
            description: product.item.description,
            price: product.item.price,
            stock: product.item.stock,
            category: product.item.category,
            brand: product.item.brand,
          });
        }}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustomProduct">
                <Form.Label>Tên sản phẩm</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Nhập tên sản phẩm"
                    value={updateRequest.productName}
                    onChange={(e) =>
                      setUpdateRequest({
                        ...updateRequest,
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
                  value={updateRequest.category}
                  required
                  aria-label="Default select example"
                  onChange={(e) =>
                    setUpdateRequest({
                      ...updateRequest,
                      category: e.target.value,
                    })
                  }
                >
                  <option value="Tivi">Tivi</option>
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
                    value={updateRequest.brand}
                    onChange={(e) =>
                      setUpdateRequest({
                        ...updateRequest,
                        brand: e.target.value,
                      })
                    }
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
                  value={updateRequest.description}
                  onChange={(e) =>
                    setUpdateRequest({
                      ...updateRequest,
                      description: e.target.value,
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Hãy nhập mô tả sản phẩm
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustomStock">
                <Form.Label>Số lượng</Form.Label>
                <Form.Control
                  type="number"
                  value={updateRequest.stock}
                  placeholder="Số lượng"
                  required
                  onChange={(e) =>
                    setUpdateRequest({
                      ...updateRequest,
                      stock: e.target.value,
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Hãy nhập số lượng
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustomPrice">
                <Form.Label>Giá</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Hãy nhập giá"
                  required
                  value={updateRequest.price}
                  onChange={(e) =>
                    setUpdateRequest({
                      ...updateRequest,
                      price: e.target.value,
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Hãy nhập giá sản phẩm
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
            <Button onClick={() => setOpen(true)} type="submit">Xác nhận</Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={showModalRemove} onHide={() => setShowModalRemove(false)}>
        <Modal.Body>Xác nhận xóa sản phẩm ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalRemove(false)}>
            Hủy
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              removeProduct(product.item.productId);
              setShowModalRemove(false);
              setOpen(true);
            }}
          >
            Xác nhân
          </Button>
        </Modal.Footer>
      </Modal>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleCloseSnackBar}
        message={
          <>
            <i class="fa-solid fa-circle-check" style={{ color: "green" }}></i>{" "}
            Thao tác thành công
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
};

export default EditProduct;
