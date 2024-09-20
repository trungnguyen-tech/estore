import React, { createContext, useContext, useState, useEffect } from "react";
import { authenticateUser, uppdateProfile, getAccount, removeAccount } from "../service/authService";
import { registerAccont } from "../service/registerService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userDatas, setUserDatas] = useState(null);
  const [isHaveAcc, setIsHaveAcc] = useState(false);
  const [announcement, setAnnouncement] = useState();
  const [err, setErr] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [dataAccount, setDataAccount] = useState();

  const fetchAccount = async () =>{
    setLoading(true);
    try{
      const res = await getAccount();
      setDataAccount(res ? res : []);
    }
    catch(err){
      console.error("Đã có lỗi xảy ra");
    }
    finally{
      setLoading(false);
    }
  }
useEffect(() =>{
  fetchAccount();
},[])
console.log("dataAccount", dataAccount);
  // dùng useEffect để mỗi khi refesh / mount thì sẽ tự động lấy giá trị trong LocalStorage -> userDatas
  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data && data !== "undefined") {
      setUserDatas(JSON.parse(data));
    }
  }, [isHaveAcc, announcement, message]);

  // Nếu thành công thì lưu dữ liệu vào trong Local Storage.
  const login = async (loginRequest) => {
    try {
      const data = await authenticateUser(loginRequest);
      if (data) {
        localStorage.setItem("userData", JSON.stringify(data));
        setIsHaveAcc(true);
        setErr("Đăng nhập thành công.");
      }
    } catch (error) {
      console.log(error.response.data);
      if (error.response) {
        setErr(error.response.data);
        // Cập nhật thông báo lỗi từ error.response.data
      } else {
        setErr("Đăng nhập thất bại");
      }
    }
  };

  const signUp = async (signUpRequest) => {
    try {
      await registerAccont(signUpRequest);
      fetchAccount();
      setAnnouncement("Bạn đã đăng ký thành công");
    } catch {
      setAnnouncement("Đăng ký thất bại.");
    }
  };

  // Set giá trị lại null và xóa giá trị trong Local Storage.
  const logout = () => {
    setUserDatas(null);
    setIsHaveAcc(false);
    localStorage.removeItem("userData");
  };

  const uppdateAccount = async (userName, uppdateAccountRequest) => {
    try {
      const message = await uppdateProfile(userName, uppdateAccountRequest);
      uppdateLocalStorage(uppdateAccountRequest);
      fetchAccount();
      setMessage(message);
    } catch (err) {
      setMessage("Không thành công!");
      console.log(err.message);
    }
  };

  const deleteAccount = async (userName) => {
    setLoading(true);
    try{
      const message = await removeAccount(userName);
      fetchAccount();
      setMessage(message);
    }
    catch(err){
      setMessage("Không thành công!");
      console.log(err.message);
    }
    finally{
      setLoading(false);
    }
  }

  //Uppdate khi user/admin thay đổi dữ liệu và cập nhật nó để display.
  const uppdateLocalStorage = (newData) => {
    let existingData = JSON.parse(localStorage.getItem("userData")) || {};
    if (existingData && existingData !== "undefined") {
      for (const key in existingData) {
        for (const item in newData) {
          if (item === key) {
            existingData[key] = newData[item];
          }
        }
      }
    }

    localStorage.setItem("userData", JSON.stringify(existingData));
  };

  return (
    <AuthContext.Provider
      value={{
        userDatas,
        login,
        logout,
        signUp,
        announcement,
        uppdateAccount,
        err,
        message,
        setErr,
        dataAccount,
        loading,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
