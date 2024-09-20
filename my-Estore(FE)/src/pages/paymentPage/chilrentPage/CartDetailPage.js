import ProductCartItem from "../../../components/productCartItem/productCartItem";
import { Row, Col, Container, Button } from "react-bootstrap";
import InforPaymentCart from "../../../components/inforPaymentCart/InforPaymentCart";
import ProductItemDetail from "../../../components/productItemDetail/productItemDetail";
import React, { useState, useEffect } from "react";
import { useChangeTab } from "../../../context/supportHandleChangeTab";
import { useCart } from "../../../context/cartContext";
import { useProduct } from "../../../context/productContext";
import "./CartDetailPage.css"

const CartDetailPage = () => {
  const { handleNextStepPayment } = useChangeTab();
  const { cart } = useCart();
  const [listcartItems, setListcartItems] = useState([]);
  const { products } = useProduct();
  const [productsList, setProductList] = useState([]);

  useEffect(() => {
    setListcartItems(cart ? cart.cartItems : []);
    console.log(listcartItems);
    const getRandomProducts = (products, count = 4) => {
      let shuffled = [...products];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled.slice(0, count).map((product) => product.productId);
    };
    if(products){
      const random = getRandomProducts(products);
      const randomProducts = products.filter(item => random.includes(item.productId));
      setProductList(randomProducts);
    }
  }, [cart, products]);


  return (
    <Container>
      <Row className="cartDetailPage">
        <Col
          lg="8"
          className="cartDetailItem"
        >
          
          {listcartItems &&
            listcartItems.map((item, key) => {
              return <ProductCartItem index={key} item={item} />;
            })}
        </Col>
        <Col className="inforPaymentCart">
          <InforPaymentCart
            price={listcartItems && listcartItems.map((item) => item.price)}
          />
          <Button
            onClick={() => {
              handleNextStepPayment();
            }}
            className="btnPayment"
          >
            Nhập thông tin thanh toán
          </Button>
        </Col>
      </Row>
      <h5 style={{marginTop: "20px"}}>Các sản phẩm khác: </h5>
      <Row className="d-flex justify-content-around m-4" lg={4}>
        {productsList && productsList.map((item, index) => {
          return <ProductItemDetail item={item} index={index} />;
        })}
      </Row>
    </Container>
  );
};
export default CartDetailPage;
