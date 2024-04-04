import EmailPopUp from "@/components/EmailPopUp";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <EmailPopUp />
      <Component {...pageProps} />
    </>
  );
}
