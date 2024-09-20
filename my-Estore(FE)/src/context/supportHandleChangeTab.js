import React, { useState, createContext, useContext } from "react";

const ChangeTabContext = createContext();

export const ChangeTabProvider = ({ children }) => {
  const [keyPayment, setKeyPayment] = useState("cart");

  const handleNextStepPayment = () => {
    if (keyPayment === "cart") setKeyPayment("checkout");
    else if (keyPayment === "checkout") setKeyPayment("payment");
  };

  const handlePrevStepPayment = () => {
    if (keyPayment === "checkout") setKeyPayment("cart");
    else if (keyPayment === "payment") setKeyPayment("checkout");
  };

  // handle ShowModal Login
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handle navigation ProductTabs
  const [keyProductTabs, setKeyProductTabs] = useState('tivi');

  return (
    <ChangeTabContext.Provider
      value={{
        handleNextStepPayment,
        keyPayment,
        setKeyPayment,
        handlePrevStepPayment,
        show,
        handleClose,
        handleShow,
        keyProductTabs,
        setKeyProductTabs,
      }}
    >
      {children}
    </ChangeTabContext.Provider>
  );
};

export const useChangeTab = () => useContext(ChangeTabContext);
