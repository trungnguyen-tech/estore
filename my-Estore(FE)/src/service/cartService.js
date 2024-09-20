import axios from "axios";

const API_URL = "http://localhost:5017/api/Cart";

export const addToCart = async (addRequest) => {
  try {
    const response = await axios.post(
      `${API_URL}/addToCart`,
      JSON.stringify(addRequest),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Đã có lỗi xảy ra: ", error.response || error.message);
  }
};

export const completeCheckout = async (checkoutRequest) => {
  try {
    const response = await axios.post(
      `${API_URL}/completeCheckout`,
      JSON.stringify(checkoutRequest),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Đã có lỗi xảy ra: ", error.response || error.message);
  }
};

export const getCart = async (userName) => {
  try {
    const response = await axios.get(`${API_URL}/getCart`, {
      params: {
        userName: userName,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Đã có lỗi xảy ra: ", error.response || error.message);
  }
};

export const getHistoryOrder = async (userName) => {
  try {
    const response = await axios.get(`${API_URL}/getHistoryOrder`, {
      params: {
        userName: userName,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Đã có lỗi xảy ra: ", error.response || error.message);
  }
};

export const removeCartItem = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL}/removeItem`, {
      params: {
        cartItemid: productId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Đã có lỗi xảy ra: ", error.response || error.message);
  }
};
