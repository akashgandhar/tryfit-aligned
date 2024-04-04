import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SliderGallery from "@/components/SliderGallery";
import Accordian2 from "@/components/accordian2";
import Carousel from "@/components/carousel";
import Timeline from "@/components/verticalTimeline";
import Link from "next/link";
import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";

export default function OurTeam() {
  const accordianData = [
    {
      title: "Who we are?",
      heading: "Legacy And Transition: From Bhatia Traders To Try Fit Fabrics",
      desc: "Formerly known as “Bhatia Traders” Try fit fabrics was founded in 1990 by Shri Kewal Kumar Bhatia. In due course of time, the company was handed over to his son Mr. Deepak Bhatia and the brand was renamed as “Try fit Fabrics”.",
    },
    {
      title: "What we do?",
      heading: "Empowering Confidence Through Quality Fabrics",
      desc: "Try fit Fabrics, a premier fabric manufacturer, caters to diverse needs with quality textiles. Our customer-centric approach ensures satisfaction at every touchpoint. With four branches in India and expansion plans underway, accessibility is our priority. Renowned for our Sportswear fabrics, blending innovation and tradition, we empower global confidence.",
    },
    {
      title: "Our Qualities",
      heading: "Uncompromising Commitment To Quality",
      desc: "At Try fit Fabrics, our commitment to excellence is unmatched. With a 100% Satisfaction Guarantee and rigorous Quality Control System, we ensure top-tier textiles for our global clientele. Backed by a highly professional team and expert fabric specialists, we redefine industry standards, empowering confidence worldwide.",
    },
  ];
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };
  const [playing, setPlaying] = useState(false);
  const [title, setTitle] = useState("Who we are?");
  const [heading, setHeading] = useState(
    "Legacy And Transition: From Bhatia Traders To Try Fit Fabrics"
  );
  const [desc, setDescription] = useState(
    "Formerly known as “Bhatia Traders” Try fit fabrics was founded in 1990 by Shri Kewal Kumar Bhatia. In due course of time, the company was handed over to his son Mr. Deepak Bhatia and the brand was renamed as “Try fit Fabrics”."
  );
  const handleIframeClick = () => {
    if (playing) {
      // If video is playing, pause it
      setPlaying(false);
    } else {
      // If video is paused, redirect to YouTube
      window.location.href = "https://youtu.be/OoJJvspNEf0?si=qZGX27awae4l2BBp";
    }
  };

  const headingRef = useRef(null);
  const isInView = useInView(headingRef);
  const headingRef2 = useRef(null);
  const isInView2 = useInView(headingRef2);
  const headingRef3 = useRef(null);
  const isInView3 = useInView(headingRef3);

  const leftDivRef = useRef(null);
  const leftIsInView = useInView(leftDivRef);
  const rightDivRef = useRef(null);
  const RightIsInView = useInView(rightDivRef);

  return (
    <div className="overflow-x-hidden">
      <Header />

      {/* Our Team Section */}
      <motion.div
        variants={textVariant(0.5)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        ref={headingRef}
      >
        <div className="flex justify-center mt-32">
          <button className="flex items-center btn_green  py-1 px-8 sm:px-24  rounded-[20px] space-x-2  ">
            <svg
              width="49"
              height="27"
              viewBox="0 0 49 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-flex item-center"
            >
              <circle cx="12" cy="13.5" r="12" fill="#D9D9D9" />
              <circle
                cx="24"
                cy="13.5"
                r="12.5"
                fill="#D9D9D9"
                stroke="#334C1D"
              />
              <circle
                cx="36"
                cy="13.5"
                r="12.5"
                fill="#D9D9D9"
                stroke="#334C1D"
              />
            </svg>
            <div className=" text-sm/[21px]">What Others Say About Us</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="flex  justify-center text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl gap-4 font-heavitas mt-12">
          <h2>
            OUR <span className="text-btn_hover">TEAM</span>
          </h2>
        </div>
        <div className="flex  justify-center text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl gap-4 font-heavitas">
          <h2>
            OUR <span className="text-btn_hover">STRENGTH</span>
          </h2>
        </div>
        <div className=" flex justify-center text-center mt-6 text-2xl  text-white">
          <p className=" font-aventa xl:max-w-5xl pr-8 ml-8 lg:pr-20  md:pr-20 md:ml-20 lg:ml-20 xl:ml-40 xl:pr-40">
            United by a common goal, our team leverages their unique strengths
            to create groundbreaking solutions. Get to know the minds shaping
            the future
          </p>
        </div>
      </motion.div>
      <div className="flex justify-center mt-16 pr-8 ml-8 lg:pr-20  md:pr-20 md:ml-20 lg:ml-20 xl:ml-40 xl:pr-40">
        <iframe
          className=" w-full h-[400px] lg:pr-20 xl:pr-40 md:pr-20 lg:pl-20 xl:pl-40 md:pl-20 rounded-xl"
          src="https://www.youtube.com/embed/OoJJvspNEf0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          muted
        ></iframe>
      </div>

      {/* Dive in Our World    */}
      <motion.div
        variants={textVariant(0.5)}
        initial="hidden"
        animate={isInView2 ? "show" : "hidden"}
        ref={headingRef2}
      >
        <div className="flex flex-col text-white font-heavitas mt-24 text-center">
          <h1 className=" text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl">
            Dive in Our
          </h1>
          <h1 className=" text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-btn_hover  ">
            World.
          </h1>
        </div>
      </motion.div>

      <section className="xl:hidden text-white grid place-items-start pr-8 ml-8 lg:pr-20  md:pr-20 md:ml-20 lg:ml-20">
        <div className=" ">
          {accordianData.map((data, index) => {
            return (
              <Accordian2
                key={index}
                open={index === open}
                title={data.title}
                desc={data.desc}
                heading={data.heading}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
      </section>

      <div className="hidden xl:grid xl:grid-cols-[1fr_1fr] text-white_yellow pr-8 ml-8 lg:pr-20  md:pr-20 md:ml-20 lg:ml-20 xl:ml-40 xl:pr-40 mt-8 sm:mt-28 gap-8 sm:gap-12">
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 1)}
          initial="hidden"
          animate={leftIsInView ? "show" : "hidden"}
          ref={leftDivRef}
          className=" bg-white/10 rounded-[25px]"
        >
          <div className=" mt-8 sm:mt-16 ml-4">
            <span className=" font-ABeeZee bg-black py-1 px-4 rounded-[8px] text-xl sm:text-2xl">
              {title}
            </span>
            <h2 className=" font-gilroy text-xl sm:text-3xl mt-8 sm:mt-11 p-4">
              {heading}
            </h2>
            <p className=" font-ABeeZee mt-8 sm:mt-16 text-xl sm:text-2xl p-4">
              {desc}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.5, 1)}
          initial="hidden"
          animate={RightIsInView ? "show" : "hidden"}
          ref={rightDivRef}
          className="grid grid-rows-[1fr_1fr_1fr]"
        >
          <div className="font-ABeeZee border border-white border-x-0 hover:opacity-100 opacity-50">
            <button
              className="flex flex-col"
              onClick={() => {
                setTitle("Who we are?"),
                  setHeading(
                    "Legacy And Transition: From Bhatia Traders To Try Fit Fabrics"
                  ),
                  setDescription(
                    "Formerly known as “Bhatia Traders” Try fit fabrics was founded in 1990 by Shri Kewal Kumar Bhatia. In due course of time, the company was handed over to his son Mr. Deepak Bhatia and the brand was renamed as “Try fit Fabrics”."
                  );
              }}
            >
              <h1 className=" font-ABeeZee text-btn_hover text-2xl sm:text-4xl mt-6">
                Who we are?
              </h1>
              <p className=" text-left mt-4 sm:mt-5 pb-8 sm:pb-12">
                Formerly known as “Bhatia Traders” Try fit fabrics was founded
                in 1990 by Shri Kewal Kumar Bhatia. In due course of time, the
                company was handed over to his son Mr. Deepak Bhatia and the
                brand was renamed as “Try fit Fabrics”.
              </p>
            </button>
          </div>
          <div className="hover:opacity-100 opacity-50">
            <button
              className="flex flex-col no-underline"
              onClick={() => {
                setTitle("What we do?"),
                  setHeading("Empowering Confidence Through Quality Fabrics"),
                  setDescription(
                    "Try fit Fabrics, a premier fabric manufacturer, caters to diverse needs with quality textiles. Our customer-centric approach ensures satisfaction at every touchpoint. With four branches in India and expansion plans underway, accessibility is our priority. Renowned for our Sportswear fabrics, blending innovation and tradition, we empower global confidence."
                  );
              }}
            >
              <div className="font-ABeeZee border border-white border-x-0">
                <h1 className="text-left font-ABeeZee text-btn_hover text-2xl sm:text-4xl mt-6">
                  What we do?
                </h1>
                <p className="text-left mt-4 sm:mt-5 pb-8 sm:pb-12">
                  Try fit Fabrics is a fabric manufacturing brand that deals in
                  all kinds of fabrics. We’re a customer-centric brand and
                  always aim to make our customers happy.We’re renowned for
                  distinctive new-age Sportswear fabrics. With a private
                  manufacturing unit and warehouse in China.
                </p>
              </div>
            </button>
          </div>
          <div className="hover:opacity-100 opacity-50">
            <button
              className="flex flex-col no-underline"
              onClick={() => {
                setTitle("Our Qualities"),
                  setHeading("Uncompromising Commitment To Quality"),
                  setDescription(
                    "At Try fit Fabrics, our commitment to excellence is unmatched. With a 100% Satisfaction Guarantee and rigorous Quality Control System, we ensure top-tier textiles for our global clientele. Backed by a highly professional team and expert fabric specialists, we redefine industry standards, empowering confidence worldwide."
                  );
              }}
            >
              <div className="font-ABeeZee border border-white border-x-0">
                <h1 className=" text-left font-ABeeZee text-btn_hover text-2xl sm:text-4xl mt-6">
                  Our Qualities
                </h1>
                <p className=" text-left mt-4 sm:mt-5 pb-8 sm:pb-12">
                  More than just fabric, we offer [list of qualities your
                  fabrics possess, e.g., softness, durability, vibrancy]. Our
                  commitment to quality ensures you&apos;ll find the perfect
                  material to bring your creative vision to life, all while
                  experiencing the exceptional touch and performance you
                  deserve.
                </p>
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mind Behind Our Success */}

      <motion.div
        variants={fadeIn("up", "tween", 0.5, 1)}
        initial="hidden"
        animate={isInView3 ? "show" : "hidden"}
        ref={headingRef3}
        className="flex ml-8  justify-center items-center mt-16 pr-8 lg:pr-20  md:pr-20 md:ml-20 lg:ml-20 xl:ml-40 xl:pr-40 "
      >
        <div className="w-full  bg-white/15  rounded-[26px] flex flex-col items-center">
          <div className="flex gap-4">
            <h1 className="font-aventa text-white text-3xl md:text-4xl lg:text-5xl xl:text-7xl mt-6 sm:mt-16">
              The
            </h1>
            <h1 className="font-aventa text-btn_hover text-3xl md:text-4xl lg:text-5xl xl:text-7xl mt-6 sm:mt-16">
              {" "}
              Great Minds
            </h1>
          </div>
          <div className="flex gap-4">
            <h1 className="font-aventa text-white text-3xl md:text-4xl lg:text-5xl xl:text-7xl  ">
              Behind
            </h1>
            <h1 className="font-aventa text-btn_hover text-3xl md:text-4xl lg:text-5xl xl:text-7xl  ">
              {" "}
              Our Success
            </h1>
          </div>
          <div className="mt-8 sm:mt-20">
            <SliderGallery />
          </div>
        </div>
      </motion.div>

      <Carousel />

      <Timeline />
      <Footer />
    </div>
  );
}
