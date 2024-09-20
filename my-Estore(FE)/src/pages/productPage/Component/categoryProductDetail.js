import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductItemDetail from "../../../components/productItemDetail/productItemDetail";
import { useProduct } from "../../../context/productContext";
import defaultImg from "../../../assets/img/default-product.png";
import CircularProgress from "@mui/material/CircularProgress";

const CategoryProductDetail = ({ category }) => {
  const { products, loading } = useProduct();
  const filterCategory =
    products && products.filter((item) => item.category === category);
  if (loading) {
    return (
      <div style={{display: "flex", justifyContent: "center", height: "400px", alignItems: "center"}}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <Container className="p-3">
      <Row
        lg={4}
        style={{
          display: "flex",
          padding: "10px",
          justifyContent: "space-between",
        }}
      >
        {filterCategory ? (
          filterCategory.map((key) => {
            return <ProductItemDetail item={key} />;
          })
        ) : (
          <Col
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img src={defaultImg} />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CategoryProductDetail;
