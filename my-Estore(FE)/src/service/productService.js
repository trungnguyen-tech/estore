import axios from "axios";

const API_URL = "http://localhost:5017/api/FilterProducts";
const updateAPI_URL = "http://localhost:5017/api/Product";

export const getProducts = async (q, cate, brand, sort) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: q,
        cate: cate,
        brand: brand,
        sort: sort,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Lỗi:", err.response || err.message);
  }
};

export const updateProduct = async (productId, updateRequest) => {
  try {
    const response = await axios.put(
      `${updateAPI_URL}/uppdateProduct/${productId}`,
      JSON.stringify(updateRequest),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error("Lỗi:", err.response || err.message);
  }
};

export const removeProductItem = async (productId) => {
  try {
    const response = await axios.delete(
      `${updateAPI_URL}/removeProduct/${productId}`
    );
    return response.data;
  } catch (err) {
    console.error("Lỗi:", err.response || err.message);
  }
};

export const addNewProduct = async (addNewRequest) => {
  try {
    const response = await axios.post(
      `${updateAPI_URL}/createProduct`,
      JSON.stringify(addNewRequest),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error("Lỗi:", err.response || err.message);
  }
};
