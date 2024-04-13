import Swal from "sweetalert2";
import Carousel from "./carousel";
import Modal from "./Modal";
import { useRef, useState } from "react";
import Carousel1 from "./carousel1";
import Link from "next/link";
import { useRouter } from "next/router";
import { useInView, motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

export default function FabricPerformance() {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const headingRef = useRef(null);
  const isInView = useInView(headingRef);
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col gap-4 pb-5 sm:py-10">
      <motion.div
        variants={textVariant(0.5)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        ref={headingRef}
        className="flex-1"
      >
        <div className="flex flex-col justify-center items-center gap-2 px-4 sm:px-6 md:px-8 lg:px-12">
          <a
            href="#SuccessStories"
            className="flex items-center btn_shadow btn_green py-1 px-6 sm:px-12 md:px-24 rounded-[20px] mt-36 space-x-2 "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 49 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-flex item-center shrink-0"
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
            <div className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
              What Others Say About Us
            </div>
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
          </a>{" "}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-btn_hover mt-6 font-heavitas">
              FABRIC.
            </h1>
          </div>
          <div className="inline-flex justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-white font-heavitas">
              PERFORMANCE
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl font-heavitas font-bold text-btn_hover">
              .
            </h1>
          </div>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-btn_hover font-heavitas">
              DELIVERED.
            </h1>
          </div>
          <div className="text-white text-sm sm:text-sm md:text-xl lg:text-2xl font-thin text-center">
            <div className=" gap-3 font-aventa">
              <p className="mr-2">
                &quot; <span className="text-btn_hover">TryFit Fabrics</span> :
                Engineered For Champions, Designed
              </p>
            </div>
            <div className="font-aventa">
              <p>For Comfort. Elevate Your Game with Every Thread.&quot;</p>
            </div>
          </div>
          <Link
            href="/Contact"
            className="bg-btn_hover font-aventa_bold font-bold py-2 px-4 sm:py-3.5 sm:px-10 rounded-[13px] mt-8 md:mt-8 hover:scale-105 transition-all ease-in-out duration-300"
          >
            Approach Us
          </Link>
        </div>
      </motion.div>
      <div id="check" className="flex  justify-end">
        <Carousel1 />
      </div>
    </div>
  );
}
