import React, { useState, useEffect } from "react";
import { Form, FloatingLabel, Row, Col } from "react-bootstrap";
import { useProduct } from "../../../context/productContext";

const FilterProduct = () => {
  const { fetchProducts } = useProduct();
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
  useEffect(() => {
    fetchProducts(filters);
  }, [filters]);

  return (
    <Row style={{ width: "50%", display: "flex", alignItems: "center" }}>
      <Col lg={8} style={{ height: "57px" }}>
        <FloatingLabel
          controlId="floatingInput"
          label="Nhập sản phẩm tìm kiếm"
          className="mb-3"
        >
          <Form.Control
            value={filters.q}
            onChange={(e) =>
              setFilters({
                ...filters,
                q: e.target.value,
              })
            }
            type="text"
            placeholder="Nhập tên sản phẩm"
          />
        </FloatingLabel>
      </Col>
      <Col>
        <Form.Select
          aria-label="Default select example"
          id="sort-select"
          defaultValue=""
          value={filters.sort}
          onChange={(e) =>
            setFilters({
              ...filters,
              sort: e.target.value,
            })
          }
        >
          <option value="">Không sắp xếp</option>
          <option value="False">Giá: Thấp đến Cao</option>
          <option value="True">Giá: Cao đến Thấp</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default FilterProduct;
