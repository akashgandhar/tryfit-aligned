import EmailPopUp from "@/components/EmailPopUp";
import { CallbackFormContextProvider } from "@/contexts/callbackFormContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CallbackFormContextProvider>
        <EmailPopUp />
        <Component {...pageProps} />
      </CallbackFormContextProvider>
    </>
  );
}
