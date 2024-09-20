import React from "react";
import { useChangeTab } from "../../context/supportHandleChangeTab";
import { useNavigate } from "react-router-dom";

const Categries = () => {
  const img = [
    {
      title: "Ti Vi",
      img: "https://cdn.tgdd.vn/Products/Images/1942/278546/smart-lg-4k-43-inch-43uq7550psf-1-2.jpg",
      eventKey: 'tivi',
    },
    {
      title: "Máy Lạnh",
      img: "https://cdn.tgdd.vn/Products/Images/2002/299824/may-lanh-nagakawa-inverter-1-hp-nis-c09r2t281.jpg",
      eventKey: 'may-lanh',
    },
    {
      title: "Tủ lạnh",
      img: "https://cdn.tgdd.vn/Products/Images/1943/319618/tu-lanh-lg-inverter-470-lit-multi-door-gr-b50bl-1.jpg",
      eventKey: "tu-lanh",
    },
    {
      title: "Máy giặt",
      img: "https://cdn.tgdd.vn/Products/Images/1944/283843/may-giat-panasonic-inverter-95-kg-na-v95fc1lvt1.jpg",
      eventKey: "may-giat",
    },
    {
      title: "Gia dụng",
      img: "https://cdn.tgdd.vn/Products/Images/2062/239286/kangaroo-kg1b8-2.jpg",
      eventKey: "gia-dung",
    },
    {
      title: "Máy lọc nước",
      img: "https://cdn.tgdd.vn/Products/Images/3385/322078/kangaroo-kg12a8-12-loi-1.jpg",
      eventKey: "may-loc-nuoc",
    },
  ];
  const navigate = useNavigate();
  const {setKeyProductTabs} = useChangeTab();

  const handleChangeTab = (eventKey) =>{
    navigate("/product");
    setKeyProductTabs(eventKey);
  }
  
  return (
    <div className="row gx-5 card-group categries">
      {img &&
        img.map((item) => {
          return (
            <a
            style={{ cursor: 'pointer'}}
              onClick={() => handleChangeTab(item.eventKey)}
              className="col p-3 card"
            >
              <img src={item.img} className="card-img-top" alt="1"></img>
              <p className="card-text">{item.title}</p>
            </a>
          );
        })}
    </div>
  );
};

export default Categries;
