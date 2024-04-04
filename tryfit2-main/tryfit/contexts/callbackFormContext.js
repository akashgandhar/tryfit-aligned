import React, { createContext, useContext, useState } from "react";

// Create the CallbackFormContext
const CallbackFormContext = createContext();

// Create the CallbackFormContextProvider component
const CallbackFormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const updateFormData = (key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
    setFormData({});
  };

  return (
    <CallbackFormContext.Provider
      value={{ formData, updateFormData, handleSubmit, isLoading }}
    >
      {children}
    </CallbackFormContext.Provider>
  );
};

const useCallbackForm = () => useContext(CallbackFormContext);

export { CallbackFormContext, CallbackFormContextProvider, useCallbackForm };
