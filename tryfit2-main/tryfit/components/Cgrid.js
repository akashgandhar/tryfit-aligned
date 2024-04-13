import { useInView, motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Cgrid() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef);

  const topDivRef = useRef(null);
  const TopisInView = useInView(topDivRef);

  const bottomDivRef = useRef(null);
  const BottomisInView = useInView(bottomDivRef);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [intrested, setIntrested] = useState("");
  const [phone, setPhone] = useState("");

  const [isCostomerLoading, setIsCostomerLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsCostomerLoading(true);

    if (!name || !email || !intrested || !phone) {
      alert("Please fill all the fields");
      setIsLoading(false);
      setIsCostomerLoading(false);
      return;
    }

    try {
      emailjs
        .send(
          "service_7te7yap",
          "template_h6ya07h",
          {
            from_name: { name },
            from_email: "pru.bhatia14@gmail.com",
            to_email: "pru.bhatia14@gmail.com",
            message: message,
            phone: phone,
            intrested_in: intrested,
            email: email,
          },
          "jIRcU-bum0P1ADl0z"
        )
        .then((result) => {
          console.log(result);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("error", error);
          alert("Error");
          setIsLoading(false);
        });

      emailjs
        .send(
          "service_7te7yap",
          "template_h6ya07h",
          {
            from_name: name,
            from_email: "pru.bhatia14@gmail.com",
            to_email: email,
            message: message,
            phone: phone,
            intrested_in: intrested,
            email: email,
          },
          "jIRcU-bum0P1ADl0z"
        )
        .then((result) => {
          console.log(result);
          if (result.status === 412) {
            alert("Error");
            setIsCostomerLoading(false);
            setIsLoading(false);
          }
          setIsCostomerLoading(false);
        })
        .catch((error) => {
          console.log("error", error);
          alert("Error");
          setIsCostomerLoading(false);
          setIsLoading(false);
        });
    } catch (error) {
      setIsCostomerLoading(false);
      setIsLoading(false);
      console.log("fff", error);
    }
  };

  return (
    <div className="grid xl:grid-cols-[1.2fr_0.8fr] lg:grid-cols-[1.2fr_0.8fr] pr-8 ml-8 md:pr-20 sm:ml-8 md:ml-20 lg:ml-20 xl:ml-40 mt-12 gap-6">
      <motion.div
        variants={fadeIn("right", "tween", 0.5, 1)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        ref={headingRef}
        className=""
      >
        <span className=" flex flex-col  bg-light_background rounded-[25px]">
          <h1 className="font-aventa text-dark_green lg:text-4xl md:text-4xl text-4xl xl:text-5xl mt-16 xl:ml-16 sm:ml-16 md:ml-16 ml-8">
            <span className="border-b-2 border-underline">GET IN TOUCH</span>
          </h1>
          <form className=" flex flex-col xl:ml-16 sm:ml-16 md:ml-16 ml-8 mt-16 font-aventa">
            <div className=" flex flex-col gap-10 w-full pr-10 ">
              <span className="w-full border-b border-[#547E4C] ">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Name *"
                  className="flex input input-placeholder w-full text-dark_green "
                />
              </span>
              <span className="w-full border-b border-[#547E4C] ">
                <input
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  type="text"
                  placeholder="Message *"
                  className="flex input input-placeholder w-full text-dark_green "
                />
              </span>
              <span className="w-full border-b border-[#547E4C] ">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="text"
                  placeholder="Phone Number *"
                  className="flex input input-placeholder w-full  text-dark_green "
                />
              </span>
              <span className="w-full border-b border-[#547E4C] ">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  placeholder="Email *"
                  className="flex input input-placeholder w-full text-dark_green "
                />
              </span>
              <span className="w-full border-b border-[#547E4C] ">
                <input
                  onChange={(e) => setIntrested(e.target.value)}
                  value={intrested}
                  type="text"
                  placeholder="Message *"
                  className="flex input input-placeholder w-full text-dark_green pb-24"
                />
              </span>
            </div>
            <button
              disabled={isLoading || isCostomerLoading}
              onClick={handleSubmit}
              className=" mt-10 w-52 items-center text-center rounded-[17px] py-3.5 bg-dark_green text-4xl mb-5"
            >
              {isLoading || isCostomerLoading ? "Loading..." : "Submit"}
            </button>
          </form>
        </span>
      </motion.div>
      <div className="grid grif-rows-[0.7fr_1.3fr] xl:pr-20 gap-3">
        <motion.div
          variants={fadeIn("left", "tween", 0.5, 1)}
          initial="hidden"
          animate={TopisInView ? "show" : "hidden"}
          ref={topDivRef}
          className=""
        >
          <span className="flex flex-col  rounded-[25px] bg-light_pink_packground">
            <h1 className=" text-dark_green md:text-3xl lg:text-2xl xl:text-3xl ml-8 mt-8 font-aventa">
              <span className="border-b-2 border-dark_green">
                STELLAR SERVICE
              </span>
            </h1>
            <p className="text-dark_green font-abessinica md:text-[20px] lg:text-[14px] xl:text-[16px] ml-2 p-5 pb-9">
              Expect a prompt and personalized response from our team. We value
              your time and aim to provide the best assistance possible. Our
              commitment is to address your queries swiftly and effectively.
            </p>
          </span>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.5, 1)}
          initial="hidden"
          animate={BottomisInView ? "show" : "hidden"}
          ref={bottomDivRef}
          className="text-left"
        >
          <span className="flex flex-col p-2 rounded-[25px] bg-light_pink_packground items-start gap-4 h-full px-8">
            <h1 className=" text-dark_green md:text-3xl lg:text-2xl xl:text-3xl text-center mt-8 font-aventa">
              <span className="border-b-2 border-dark_green">
                Connect Us Further
              </span>
            </h1>
            <p className="text-dark_green text-center  text-2xl font-light font-abessinica">
              Reach Us Over Phone
            </p>
            <p className="text-dark_green text-center md:text-3xl lg:text-2xl xl:text-3xl font-semibold">
              +91-9899505468
            </p>
            {/* <p className="text-dark_green text-center md:text-3xl lg:text-2xl xl:text-3xl font-semibold">
              +86-13357565474
            </p> */}
            <p className="text-dark_green text-left  lg:text-xl md:text-xl  xl:text-xl font-abessinica font-light">
              Feel Free To Drop Us A Line Using our Dedicated Email Address:
            </p>
            <p className="text-dark_green text-center mt-2 md:text-3xl lg:text-2xl xl:text-3xl font-semibold xl:pb-20 lg:pb-5 ">
              info@tryfitfabrics.com
            </p>
          </span>
        </motion.div>
      </div>
    </div>
  );
}
