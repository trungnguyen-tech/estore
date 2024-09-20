import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container } from "react-bootstrap";
import IndexPage from "./pages/indexPage/index.js";
import Footer from "./components/footer/footer";
import Navbar from "./components/header/navbar/navbar";
import BlogDetail from "./pages/blogPage/blogPage.js";
import FAQDetail from "./pages/faqPage/faqPageDetail.js";
import ContactDetail from "./pages/contactPage/contactDetailPage.js";
import PaymentPage from "./pages/paymentPage/paymentDetailPage.js";
import AppProviders from "./context/AppContext.js";
import ProductDetailPage from "./pages/productPage/productPageDetail.js";
import AccountPage from "./pages/accountPage/accountPage.js";
import PrivateRoute from "./pages/accountPage/privateRoute/privateRoute.js";
import AdminRoute from "./pages/adminPage/adminRoute.js";
import AdminPageDetail from "./pages/adminPage/adminPageDetail.js";

function App() {
  useEffect(() => {}, []);
  return (
    <AppProviders>
      <div className="App">
        <Container>
          <BrowserRouter>
            <div className="header">
              <Navbar />
            </div>
            <div className="context">
              <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/product" element={<ProductDetailPage />} />
                <Route path="/blog" element={<BlogDetail />} />
                <Route path="/FAQs" element={<FAQDetail />} />
                <Route path="/contactUs" element={<ContactDetail />} />

                <Route path="/payment" element={<PaymentPage />} />
                {/* ở đây dùng Private bọc phần tử con lại nếu và kiểm tra điều kiện, nếu đúng thì mới truy cập. Còn admin
              cũng tương tự như vậy. nếu không phải role admin thì không truy cập được. */}
                <Route
                  path="/account"
                  element={
                    <PrivateRoute>
                      <AccountPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <AdminRoute>
                      <AdminPageDetail />
                    </AdminRoute>
                  }
                />
              </Routes>
            </div>
          </BrowserRouter>
        </Container>
        <Footer />
      </div>
    </AppProviders>
  );
}

export default App;
