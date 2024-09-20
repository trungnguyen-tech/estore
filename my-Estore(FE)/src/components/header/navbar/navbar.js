import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CartDetails from "../cartDetail/cartDetail";
import LoginDetail from "../logInDetail/loginDetail";
import ProfileDetails from "../../profileDetail/profileDetail";
import SpinnerDetail from "../../spinner/spinnderDetail";
import { useAuth } from "../../../context/authContext";
import { useChangeTab } from "../../../context/supportHandleChangeTab";

const Navbar = () => {
  const { userDatas, isLoading } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {setKeyProductTabs} = useChangeTab();

  //Dùng để check trạng thái của userData. Nếu userData không nhận được dữ liệu từ Local Storage thì trả false.
  useEffect(() => {
    if (userDatas) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userDatas]);

  return (
    <div className="navbarDetail navbar navbar-expand ">
      <NavLink
        exact="true"
        to="/"
        className={({ isActive }) =>
          "nav-link" + (isActive ? "acctiveSelection" : "")
        }
      >
        <a className="imgLogo navbar-brand">EStore</a>
      </NavLink>
      <div className="navbar-nav navList">
        <NavLink
          exact="true"
          to="/"
          className={({ isActive }) => (isActive ? "acctiveSelection" : "")}
        >
          <a className="navbar-item nav-link">Home</a>
        </NavLink>
        <NavLink
          exact="true"
          to="/product"
          className={({ isActive }) => (isActive ? "acctiveSelection" : "")}
          onClick={() => setKeyProductTabs('tivi')}
        >
          <a className="navbar-item nav-link">Product</a>
        </NavLink>
        <NavLink
          exact="true"
          to="/blog"
          className={({ isActive }) => (isActive ? "acctiveSelection" : "")}
        >
          <a className="navbar-item nav-link">Blog</a>
        </NavLink>
        <NavLink
          exact="true"
          to="/FAQs"
          className={({ isActive }) => (isActive ? "acctiveSelection" : "")}
        >
          <a className="navbar-item nav-link">FAQ</a>
        </NavLink>
        <NavLink
          exact="true"
          to="/contactUs"
          className={({ isActive }) => (isActive ? "acctiveSelection" : "")}
        >
          <a className="navbar-item nav-link">Contact Us</a>
        </NavLink>
      </div>
      <ul className="navbar-nav navIcon">
        <li className="nav-link" id="cart">
          <CartDetails />
        </li>
        <li className="nav-link">
          {isLoading ? (
            <SpinnerDetail />
          ) : isLoggedIn ? (
            <ProfileDetails />
          ) : (
            <LoginDetail />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
