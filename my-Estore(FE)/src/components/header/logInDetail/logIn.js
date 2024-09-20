import React, { useState } from "react";
import { useAuth } from "../../../context/authContext";
import { Navigate } from "react-router-dom";
import { useChangeTab } from "../../../context/supportHandleChangeTab";
import { Snackbar } from "@mui/material";


const SignIn = () => {
  const { handleClose } = useChangeTab();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const { login, userDatas, err } = useAuth();
      
      const handleCloseSnackBar = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setOpen(false);
      };


  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      await login({ userName, password });
      if (userDatas) {
        handleClose();
        setOpen(true);
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
    }
  };
  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleLogin}>
        <h1>Đăng nhập</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <span>Hoặc đăng nhập bằng tài khoản</span>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="#">Quên mật khẩu?</a>
        {err && <div style={{ color: "red", marginBottom: "10px", fontSize: "12px" }}>{err}</div>}
        <button type="submit">Đăng nhập</button>
      </form>
      {userDatas && <Navigate to="/" />}
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleCloseSnackBar}
        message={<><i class="fa-solid fa-circle-check" style={{color: 'green'}}></i> {err}</>}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "white",
            color: "black",
            fontSize: "16px",
          },
        }}
      />
    </div>
  );
};

export default SignIn;
