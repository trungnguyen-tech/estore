import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Modal, Image } from "react-bootstrap";
import { useCart } from "../../context/cartContext";
import { Snackbar } from "@mui/material";

const BestSellersItem = ({ item }) => {
  const { addProductToCart, announcement } = useCart();
  const productImg = item.productImages;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [imgMain, setImgMain] = useState(productImg[0]);
  const [fadeClass, setFadeClass] = useState("show");
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  if (quantity < 1) {
    setQuantity(1);
  }
  if (quantity > 9) {
    setQuantity(1);
  }

  const basicAnimation = (item) => {
    setFadeClass("");
    setTimeout(() => {
      setImgMain(item);
      setFadeClass("showImg");
    }, 300);
  };

  useEffect(() => {
    setFadeClass("showImg");
    setImgMain(productImg[0]);
  }, []);

  const handleAddToCart = () => {
    addProductToCart(item.productId, quantity);
    handleClose();
    setOpen(true);
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleShow} className="card col p-3 bestSellerItem">
        <div className="imgItem">
          <img src={productImg[0]} className="card-img-top" alt="123"></img>
        </div>
        <div className="card-text">
          <h5>{item.productName}</h5>
          <div className="footerItem">
            <span>
              {item.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
            <span>Raiting</span>
          </div>
        </div>
      </div>
      <Modal
        className="customModalProductDetail"
        show={show}
        onHide={handleClose}
        size="lg"
      >
        <Modal.Body>
          <Container className="p-3">
            <Row className="gx-5">
              <Col>
                <Row>
                  <button className="btnCloseModal" onClick={handleClose}>
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                  <Col className="customMainImgItem">
                    <Image src={imgMain} className={fadeClass} rounded />
                  </Col>
                </Row>
                <Row className="gx-5 customSubImgBlock">
                  {productImg &&
                    productImg.map((item) => {
                      return (
                        <Col
                          onClick={() => basicAnimation(item)}
                          className="customSubImgItem"
                          key={item}
                        >
                          <Image src={item} rounded />
                        </Col>
                      );
                    })}
                </Row>
              </Col>
              <Col className="customContextModal">
                <h5 style={{ fontSize: "22px" }}>{item.productName}</h5>
                <h6
                  style={{ fontSize: "20px", color: "var(--secondary-main)" }}
                >
                  {item.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h6>
                <p>Màu sắc: {item.color}</p>
                <p>{item.description}</p>
                <p>Thương hiệu: {item.brand}</p>
                <div className="addToCart">
                  <form id="quantitySubmit">
                    <button
                      onClick={() => setQuantity(quantity - 1)}
                      type="button"
                    >
                      <i class="fa-solid fa-minus"></i>
                    </button>
                    <input type="text" readOnly value={quantity} />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      type="button"
                    >
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </form>
                  <button
                    className="btnAddtoCart"
                    onClick={() => handleAddToCart()}
                  >
                    <i class="fa-solid fa-cart-plus"></i> Add to cart
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleCloseSnackBar}
        message={<><i class="fa-solid fa-circle-check" style={{color: 'green'}}></i> {announcement}</>}
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
export default BestSellersItem;
