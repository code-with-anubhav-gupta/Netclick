"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [showAddressPopup, setShowAddressPopup] = useState(false);
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
  const [userSignupData, setUserSignupData] = useState({
    username: "",
    phone: "",
    category:"",
    email: "",
    password: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        showAddressPopup,
        setShowAddressPopup,
        userLoginData,
        setUserLoginData,
        userSignupData,
        setUserSignupData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
