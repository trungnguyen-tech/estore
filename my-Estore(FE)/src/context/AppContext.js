import React from "react";
import { AuthProvider } from "./authContext";
import { ProductProvider } from "./productContext";
import { ChangeTabProvider } from "./supportHandleChangeTab";
import { CartProvider } from "./cartContext";

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <ChangeTabProvider>{children}</ChangeTabProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default AppProviders;
