"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [showAddressPopup, setShowAddressPopup] = useState(false);
  const [serviceAddress, setServiceAddress] = useState("");
  const [serviceDetails, setServiceDetails] = useState({
    address: "",
    date: "",
    time: "",
    description: "",
    budget: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const resetServiceDetails = () => {
    setServiceDetails({
      address: "",
      date: "",
      time: "",
      description: "",
      budget: "",
    });
  };

  const updateServiceDetails = (field, value) => {
    setServiceDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        showAddressPopup,
        setShowAddressPopup,
        serviceAddress,
        setServiceAddress,
        serviceDetails,
        updateServiceDetails,
        resetServiceDetails,
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
