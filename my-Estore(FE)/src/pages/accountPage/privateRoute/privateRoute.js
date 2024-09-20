import React from 'react';
import {  Navigate  } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    //Sử dụng cách này để ngăn chặn người dùng có thể truy cập trang : /account;
    // Lấy giá trị từ Loccal Storage và kiểm tra giá trị.
    // children là phần tử con được display. trong trường này sẽ là <AccountPageDetail/>.
    const userDatas = JSON.parse(localStorage.getItem('userData'));

    return userDatas ? children : <Navigate to="/" />;
};

export default PrivateRoute;
