import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const AdminRoute = ({ children }) => {

    // Tương tự như PrivePage thì bên này sử dụng cách khác là lấy userDatas để xét. và ngăn chặn người dùng không phải admin truy cập vào
    // trang admin.
    const { userDatas } = useAuth();

    return userDatas && userDatas.role === 'admin' ? children : <Navigate to="/" />;
};

export default AdminRoute;
