import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Accordian from "@/components/accordian";
import MyMapComponent from "@/components/googlemap";
import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
const accordianData = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    title: "This is Demo title 1",
    desc: "New Description",
  },
];

export default function Contact() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  const headingRef = useRef(null);
  const isInView = useInView(headingRef);
  const headingRef2 = useRef(null);
  const isInView2 = useInView(headingRef2);
  const headingRef3 = useRef(null);
  const isInView3 = useInView(headingRef3);
  const headingRef4 = useRef(null);
  const isInView4 = useInView(headingRef4);
  const headingRef5 = useRef(null);
  const isInView5 = useInView(headingRef5);
  const headingRef6 = useRef(null);
  const isInView6 = useInView(headingRef6);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [intrested, setIntrested] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="overflow-x-hidden">
      <Header />
      {/* Contact us section */}
      <motion.div
        variants={textVariant(0.5)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        ref={headingRef}
        className="text-white pr-8 ml-8 lg:pr-20  md:pr-20 md:ml-20 lg:ml-20 xl:ml-40 xl:pr-40"
      >
        <div className="flex flex-col mt-40 text-center bg-white/15 rounded-[23px] ">
          <h1 className="font-aventa md:text-3xl lg:text-4xl xl:text-5xl pt-16">
            CONTACT US
          </h1>
          <div>
            <h1 className="flex justify-center mt-12 text-2xl md:text-5xl lg:text-6xl xl:text-7xl gap-3 font-heavitas">
              LETS DO <span className="text-btn_hover">AWESOME</span>
            </h1>
            <h1 className="flex justify-center text-2xl md:text-5xl lg:text-6xl xl:text-7xl gap-3 font-heavitas pb-10">
              THINGS
            </h1>
          </div>
        </div>
      </motion.div>
      {/* Get in Touch Section */}
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 1)}
        initial="hidden"
        animate={isInView2 ? "show" : "hidden"}
        ref={headingRef2}
        className="text-white"
      >
        <h1 className="md:ml-20 lg:ml-20 ml-8 xl:ml-40 mt-44 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-aventa_bold">
          Get In Touch
        </h1>
      </motion.div>
      {/* Send A Message */}

      <div className="text-white md:ml-20 lg:ml-20 xl:ml-40 grid xl:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr] ml-8 pr-8 lg:pr-20  md:pr-20 xl:pr-40 ">
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 1)}
          initial="hidden"
          animate={isInView3 ? "show" : "hidden"}
          ref={headingRef3}
          className=" xl:border-r-2 lg:border-r-2 border-white"
        >
          <h2 className=" mt-16 md:text-3xl lg:text-3xl xl:text-4xl text-btn_hover font-aventa">
            Send A Message
          </h2>
          <p className=" mt-5 text-xl font-aventa">
            Just fill up this form and we will get right back to you{" "}
          </p>

          <form className=" mt-16 flex flex-col">
            <div className="flex flex-col ">
              <span className="border-b flex  mr-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="outline-none bg-black/0 input-placeholder2 input2"
                />
              </span>
              <span className="border-b flex  mr-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="outline-none bg-black/0   input-placeholder2 input2 mt-16 "
                />
              </span>
            </div>
            <div className="flex flex-col mt-16 ">
              <span className="border-b flex  mr-5">
                <input
                  type="text"
                  placeholder="Intrested In"
                  className="outline-none bg-black/0 input-placeholder2 input2"
                />{" "}
              </span>
              <span className="border-b flex  mr-5">
                <input
                  type="text"
                  placeholder="Phone No."
                  className="outline-none bg-black/0 input-placeholder2 input2 mt-16 "
                />
              </span>
            </div>
            <span className="border-b flex  mr-5">
              <input
                type="text"
                placeholder="Message"
                className="outline-none bg-black/0 input-placeholder2 input2 mt-16 xl:mr-16 lg:mr-16"
              />
            </span>
          </form>
          <button className="bg-btn_hover hover:scale-[102%] ease-in-out duration-300 transition-all text-black py-2 px-12 mt-8 text-4xl rounded-[7px] font-aventa flex items-center gap-2">
            Sumbit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.5, 1)}
          initial="hidden"
          animate={isInView4 ? "show" : "hidden"}
          ref={headingRef4}
          className=" mt-24 font-aventa"
        >
          <div className=" ml-5 flex flex-col">
            <div className="inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className=" text-4xl ml-2 text-btn_hover">Call Us</h2>
            </div>
            <p className="mt-2 ml-4 text-xl">
              Your questions and feedback are important to us. Feel free to get
              in touch at your convenience; we&apos;re always here to support
              you.
            </p>
          </div>
          <div className="ml-5 mt-16 flex-col">
            <div className="inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-4xl ml-2 text-btn_hover">Visit Us</h2>
            </div>
            <p className="mt-2 ml-4 text-xl">
              &quot;Come see us in person! Our doors are open, and we&apos;re
              eager to welcome you. Experience our services firsthand and let us
              make your visit memorable.&quot;
            </p>
          </div>
          <div className="ml-5 mt-16 flex-col">
            <div className="inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <h2 className="text-4xl ml-2 text-btn_hover">Mail Us</h2>
            </div>
            <p className="mt-2 ml-4 text-xl">
              &quot;Drop us a line! Your emails are more than just messages to
              us. We&apos;re keen on reading your thoughts and are ready to
              respond with the information and assistance you need.&quot;
            </p>
          </div>
        </motion.div>
      </div>
      {/* Find Us On Maps */}
      {/* FAQ Section */}
      <div className=" text-white mt-44 grid xl:grid-cols-[1fr_1fr]">
        <motion.div
          variants={fadeIn("down", "tween", 0.5, 1)}
          initial="hidden"
          animate={isInView5 ? "show" : "hidden"}
          ref={headingRef5}
          className=" flex flex-col md:items-center lg:items-center xl:items-start  ml-8 md:ml-20 lg:ml-20 xl:ml-40 pr-8 lg:pr-20  md:pr-20 xl:pr-40"
        >
          <div className=" text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-heavitas">
            <h2 className="text-btn_hover">FREQUENTLY</h2>
            <h2>ASKED</h2>
            <h2 className="text-btn_hover">QUESTIONS</h2>
          </div>
          <h2 className=" mt-14 md:text-3xl lg:text-3xl xl:text-3xl font-aventa">
            For even further queries or doubts feel free to call us at
          </h2>
          <button className="bg-btn_hover mt-16 flex xl:px-24 text-black items-center justify-center py-8 rounded-[16px] text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-aventa">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" w-9 h-9 mr-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            Contact Us
          </button>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          initial="hidden"
          animate={isInView6 ? "show" : "hidden"}
          ref={headingRef6}
          className="ml-8 xl:ml-0 md:ml-20 lg:ml-20 pr-8 lg:pr-20 mt-10 xl:mt-0 md:pr-20 xl:pr-40"
        >
          <h2 className=" font-aventa_bold text-4xl">Why FAQs</h2>
          <h2 className=" mt-4 text-2xl  font-aventa">
            These are some of the most frequent qeustion recieved do go through
            this, But we are always there for you
          </h2>
          <section className="text-white h-[600px] grid place-items-start">
            <div className=" ">
              {accordianData.map((data, index) => {
                return (
                  <Accordian
                    key={index}
                    open={index === open}
                    title={data.title}
                    desc={data.desc}
                    toggle={() => toggle(index)}
                  />
                );
              })}
            </div>
          </section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
