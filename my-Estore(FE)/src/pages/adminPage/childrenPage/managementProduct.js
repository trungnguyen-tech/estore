import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Form,
  FloatingLabel,
  Modal,
} from "react-bootstrap";
import { useProduct } from "../../../context/productContext";
import AddNewProduct from "../component/inputComponents/addNewProduct";
import EditProduct from "../component/inputComponents/editProduct";
import "./managementProduct.css";
import Tooltip from "@mui/material/Tooltip";
import LinearProgress from "@mui/material/LinearProgress";

const ManagementProduct = () => {
  const { products, setShowAdd, showAdd, fetchProducts, loading } =
    useProduct();
  const [filters, setFilters] = useState({
    q: "",
    cate: "",
    brand: "",
    sort: null,
  });

  const resetFilters = () => {
    setFilters({
      q: "",
      cate: "",
      brand: "",
      sort: "",
    });
  };
  const [showModalRemove, setShowModalRemove] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        resetFilters();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      resetFilters();
    };
  }, []);

  useEffect(() => {
    fetchProducts(filters);
  }, [filters]);

  return (
    <Container className="p-2 m-2 managementProduct">
      <h4>Danh sách sản phẩm</h4>
      <Row className="filterProducts">
        <Col lg={8}>
          <FloatingLabel
            controlId="floatingInput"
            label="Tìm kiếm sản phẩm"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              value={filters.q}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  q: e.target.value,
                })
              }
            />
          </FloatingLabel>
        </Col>
        <Col>
          <Form.Select
            aria-label="Default select example"
            value={filters.cate}
            onChange={(e) =>
              setFilters({
                ...filters,
                cate: e.target.value,
              })
            }
          >
            <option defaultChecked value="">
              --Danh mục--
            </option>
            <option value="Tivi">Tivi</option>
            <option value="May Lanh">Máy lạnh</option>
            <option value="Tu Lanh">Tủ lạnh</option>
            <option value="May Giat">Máy giặt</option>
            <option value="Gia Dung">Gia dụng</option>
            <option value="May Loc Nuoc">Máy lọc nước</option>
          </Form.Select>
        </Col>
      </Row>
      <Tooltip title="Thêm sản phẩm mới">
        <button onClick={() => setShowAdd(true)} className="addNewProduct">
          <i class="fa-solid fa-plus"></i>
        </button>
      </Tooltip>

      <Row className="rowTable">
        {loading ? (
          <div style={{ width: "100%", marginTop: "10px" }}>
            <LinearProgress />
          </div>
        ) : (
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Danh mục</th>
                <th>Hãng</th>
                <th>Giá</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            {
              <tbody style={{ maxHeight: "300px", overflowY: "auto" }}>
                {products &&
                  products.map((item, index) => {
                    return <EditProduct product={{ item, index }} />;
                  })}
              </tbody>
            }
          </Table>
        )}
      </Row>
      <Modal
        show={showAdd}
        size="lg"
        onHide={() => setShowAdd(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <AddNewProduct />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ManagementProduct;
