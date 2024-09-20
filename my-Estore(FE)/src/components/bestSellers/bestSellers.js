import BestSellersItem from "./bestSellersItem";
import { useProduct } from "../../context/productContext";
import { useEffect, useState } from "react";

const BestSellers = ({ title }) => {
  const { products } = useProduct();
  const { fetchProducts } = useProduct();
  const [filters, setFilters] = useState({
    q: "",
    cate: "",
    brand: "",
    sort: null,
  });

  const resetFilters = () => {
    setFilters({
      q: "",
      cate: "",
      brand: "",
      sort: "",
    });
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        resetFilters();
      }
    };
    // sự kiện visibilitychange sẽ được kích hoạt khi nội dung của tab được hiển thị hay bị ẩn đi.
    document.addEventListener("visibilitychange", handleVisibilityChange);
    //Hàm dọn dẹp. Mục dích tránh bảo đảm sự kiện listener không được gắn nhiều lần nếu effect chạy lại.
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    fetchProducts(filters);
  }, [filters]);
  const [productsList, setProductList] = useState([]);
  useEffect(() => {
    const getRandomProducts = (products, count = 4) => {
      let shuffled = [...products];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled.slice(0, count).map((product) => product.productId);
    };
    if (products) {
      const random = getRandomProducts(products);
      const randomProducts = products.filter((item) =>
        random.includes(item.productId)
      );
      setProductList(randomProducts);
    }
  }, [products]);

  return (
    <div className="bestSellerDetails">
      <div className="headerContent">
        <h3>{title}</h3>
        <a className="card-link">
          View all <i class="fa-solid fa-angle-right"></i>
        </a>
      </div>
      <div className=" row bestSellerItems">
        {productsList &&
          productsList.map((item, index) => {
            return <BestSellersItem item={item} index={index} />;
          })}
      </div>
    </div>
  );
};
export default BestSellers;
