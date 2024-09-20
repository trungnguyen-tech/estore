import React, { useState, useEffect } from "react";
import "./productPageDetail.css";
import { Tab, Tabs, Container } from "react-bootstrap";
import { Avatar } from "@mui/material";
import iconTivi from "../../assets/icon/iconProduct/tivi.png";
import iconMayLanh from "../../assets/icon/iconProduct/may-lanh.png";
import iconGiaDung from "../../assets/icon/iconProduct/gia-dung.png";
import iconMayGiat from "../../assets/icon/iconProduct/may-giat.png";
import iconMayLocNuoc from "../../assets/icon/iconProduct/RO.png";
import iconTuLanh from "../../assets/icon/iconProduct/tu-lanh.png";
import CategoryProductDetail from "./Component/categoryProductDetail";
import FilterProduct from "./Component/filterProduct";
import { useChangeTab } from "../../context/supportHandleChangeTab";
import SpinnerDetail from "../../components/spinner/spinnderDetail";

const ProductDetailPage = () => {
  const dataProductPage = [
    {
      eventKey: "tivi",
      imgSrc: iconTivi,
      title: "Tivi",
      category: "Tivi",
    },
    {
      eventKey: "may-lanh",
      imgSrc: iconMayLanh,
      title: "Máy Lạnh",
      category: "May Lanh",
    },
    {
      eventKey: "tu-lanh",
      imgSrc: iconTuLanh,
      title: "Tủ Lạnh",
      category: "Tu Lanh",
    },
    {
      eventKey: "may-giat",
      imgSrc: iconMayGiat,
      title: "Máy Giặt",
      category: "May Giat",
    },
    {
      eventKey: "gia-dung",
      imgSrc: iconGiaDung,
      title: "Gia Dụng",
      category: "Gia Dung",
    },
    {
      eventKey: "may-loc-nuoc",
      imgSrc: iconMayLocNuoc,
      title: "Máy Lọc Nước",
      category: "May Loc Nuoc",
    },
  ];
  const { keyProductTabs, setKeyProductTabs } = useChangeTab();
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 300);
  }, []);

  if (loadingPage) {
    return (
      <Container
        className="d-flex justify-content-center"
        style={{ height: "100vh" }}
      >
        <SpinnerDetail />
      </Container>
    );
  }
  return (
    <div className="productDetailPage">
      <FilterProduct />
      <Container className="productContextPage">
        <Tabs
          activeKey={keyProductTabs}
          onSelect={(k) => setKeyProductTabs(k)}
          id="justify-tab-example"
          className="mb-3 custom-NavLink"
          justify
        >
          {dataProductPage.map((item) => {
            return (
              <Tab
                key={item.eventKey}
                eventKey={item.eventKey}
                title={
                  <div className="tabIconNav">
                    <Avatar alt="Remy Sharp" src={item.imgSrc} />
                    <span>{item.title}</span>
                  </div>
                }
              >
                <CategoryProductDetail category={item.category} />
              </Tab>
            );
          })}
        </Tabs>
      </Container>
    </div>
  );
};

export default ProductDetailPage;
