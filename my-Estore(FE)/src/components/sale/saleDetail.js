import React from "react";
import "./saleDetail.css";
const Sale = () => {
  const dataSale = [
    {
      imgUrl:
        "https://cdn.tgdd.vn/Products/Images/7498/321978/quat-dieu-hoa-sunhouse-shd7745-1.jpg",
      title: "Quạt điều hòa sunhouse",
      price: 3500000,
      disscount: 50,
    },
    {
      imgUrl:
        "https://cdn.tgdd.vn/Products/Images/1944/283843/may-giat-panasonic-inverter-95-kg-na-v95fc1lvt1.jpg",
      title: "Máy giặt panasonic",
      price: 12000000,
      disscount: 35,
    },
    {
      imgUrl:
        "https://cdn.tgdd.vn/Products/Images/3385/309481/may-loc-nuoc-ro-nong-nguoi-lanh-karofi-kad-x56-11-loi-1.jpg",
      title: "Máy lọc nước karofi",
      price: 6000000,
      disscount: 10,
    },
    {
      imgUrl:
        "https://cdn.tgdd.vn/Products/Images/2002/299824/may-lanh-nagakawa-inverter-1-hp-nis-c09r2t281.jpg",
      title: "Máy lạnh nagakawa",
      price: 6000000,
      disscount: 20,
    },
  ];

  return (
    <div className="row saleDetail">
      <div className="col-3 saleTitle">
        <div className="saleTitleContext">
          <h4>Deal giá hời</h4>
          <p>tại SHOP!!!</p>
        </div>
        <a href="#" className="saleTitleSeeAll">
          View all <i class="fa-solid fa-angles-right"></i>
        </a>
        <div className="saleTitlebg"></div>
      </div>
      <div className="col row saleProducts">
        {dataSale &&
          dataSale.map((item) => {
            return (
              <div className="card col saleProductItem">
                <img src={item.imgUrl} className="card-img-top imgSale"></img>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <div className="card-text salePrice">
                    <p className="salePriceItem">
                      {item.price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                    <p style={{color: "var(--secondary-main)", fontSize: "14px"}}>
                      {(
                        item.price -
                        (item.price / 100) * item.disscount
                      ).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  </div>
                </div>
                <div className="discount">-{item.disscount}%</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Sale;
