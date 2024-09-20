import React, {
  useContext,
  createContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import {
  getProducts,
  addNewProduct,
  removeProductItem,
  updateProduct,
} from "../service/productService";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  const fetchProducts = async (request) => {
    setLoading(true);
    try {
      setError(null);
      const response = await getProducts(
        request.q,
        request.cate,
        request.brand,
        request.sort
      );
      setProducts(response); 
    } catch (err) {
      console.error(err);
      setError("Không thể lấy dữ liệu sản phẩm");
    } finally {
      setLoading(false);
    }
  };

  const addNewProductItem = async (itemRequest) => {
    setLoading(true);
    setError(null);
    try {
      const res = await addNewProduct(itemRequest);
      console.log(res);
      fetchProducts();
    } catch (err) {
      console.error("Đã xảy ra lỗi khi thêm sản phẩm", err);
      setError("Không thể thêm sản phẩm");
    } finally {
      setLoading(false);
    }
  };

  const updateProductItem = async (productId, itemRequest) => {
    setLoading(true);
    setError(null);
    try {
      const res = await updateProduct(productId, itemRequest);
      console.log(res);
      fetchProducts();
    } catch (err) {
      console.error("Đã xảy ra lỗi khi cập nhật sản phẩm", err);
      setError("Không thể cập nhật sản phẩm");
    } finally {
      setLoading(false);
    }
  };

  const removeProduct = async (productId) => {
    setLoading(true);
    setError(null);
    try {
      const res = await removeProductItem(productId);
      console.log(res);
      fetchProducts();
    } catch (err) {
      console.error("Đã xảy ra lỗi khi xoá sản phẩm", err);
      setError("Không thể xoá sản phẩm");
    } finally {
      setLoading(false);
    }
  };

  const contextValue = useMemo(
    () => ({
      products,
      loading,
      error,
      fetchProducts,
      addNewProductItem,
      updateProductItem,
      removeProduct,
      showAdd,
      setShowAdd,
    }),
    [products, loading, error, showAdd]
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
