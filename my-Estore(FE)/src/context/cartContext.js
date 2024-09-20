import React, {
  useContext,
  useState,
  createContext,
  useEffect,
  useRef,
} from "react";
import {
  getHistoryOrder,
  getCart,
  addToCart,
  completeCheckout,
  removeCartItem,
} from "../service/cartService";
import { useAuth } from "./authContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const { userDatas } = useAuth();
  const prevUserDatas = useRef(null);
  const [recipientInformation, setRecipientInformation] = useState({});
  const [announcement, setAnnouncement] = useState('');
  const [historyOrder, setHistoryOrder] = useState('');

  const fetchCart = async () => {
    if (userDatas?.userName) {
      setLoading(true);
      try {
        const response = await getCart(userDatas.userName);
        const resData = await getHistoryOrder(userDatas.userName);
        setCart(response);
        setHistoryOrder(resData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (userDatas?.userName && prevUserDatas.current !== userDatas.userName) {
      fetchCart();
      prevUserDatas.current = userDatas.userName;
    }
  }, [userDatas]);

  useEffect(() => {
    if (announcement) {
      fetchCart();
    }
  }, [announcement]);

  const addProductToCart = async (productId, quantity) => {
    const addToCartRequest = {
      userName: userDatas ? userDatas.userName : "",
      productId,
      quantity,
    };
    setLoading(true);
    try {
      await addToCart(addToCartRequest);
      setAnnouncement('Đã thêm vào giỏ hàng thành công');
      await fetchCart();
    } catch (error) {
      console.log("error:", error);
      setAnnouncement('Thêm vào giỏ hàng thất bại');
    } finally {
      setLoading(false);
    }
  };

  const completePayment = async () => {
    const completePaymentRequest = {
      userName: userDatas ? userDatas.userName : "",
      recipientName: recipientInformation.recipientName,
      address: recipientInformation.address,
      phone: recipientInformation.phone,
      paymentMethod: recipientInformation.paymentMethod,
    };
    setLoading(true);
    try {
      await completeCheckout(completePaymentRequest);
      fetchCart();
      setAnnouncement('Đã thêm vào giỏ hàng thành công');
    } catch (err) {
      console.error("error: ", err);
      setAnnouncement('Thêm vào giỏ hàng thất bại');
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (productId) =>{
    setLoading(true);
    try{
      await removeCartItem(productId);
      fetchCart();
      setAnnouncement('Đã xóa sản phẩm');
    }catch(err){
      console.error("error:", err);
    } finally{
      setLoading(false);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        recipientInformation,
        setRecipientInformation,
        completePayment,
        announcement,
        removeItem,
        historyOrder,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
