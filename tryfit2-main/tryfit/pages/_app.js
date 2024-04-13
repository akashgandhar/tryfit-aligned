import EmailPopUp from "@/components/EmailPopUp";
import { CallbackFormContextProvider } from "@/contexts/callbackFormContext";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <CallbackFormContextProvider>
        <EmailPopUp />
        <Component {...pageProps} />
      </CallbackFormContextProvider>
    </>
  );
}
