import { useEffect, useRef } from "react";
import Grid2 from "./Grid-2";
import Grid1 from "./Grid1";
import { useInView, motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

export default function WhatWeDo() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const element = sectionRef.current;
  //       if (element) {
  //         const elementPosition = element.getBoundingClientRect().top;
  //         const windowHeight = window.innerHeight;
  //         if (elementPosition < windowHeight) {
  //           element.classList.add("slide-in");
  //         }
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     handleScroll(); // Trigger on mount
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <div className=" text-white ml-8 md:ml-20 lg:ml-20 xl:ml-40">
      <motion.div
        variants={fadeIn("right", "tween", 0.5, 1)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        ref={headingRef}
      >
        <h1 className="text-btn_hover font-heavitas text-4xl sm:text-5xl md:text-6xl mt-12 sm:mt-24 md:mt-8">
          What We Do
        </h1>
        <p className="md:w-auto xl:w-1/2 lg:w-[650px] text-xl sm:text-2xl md:text-3xl mt-2 sm:mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
          incidunt? Ipsam, pariatur quo. Voluptatem cum eum debitis eveniet
        </p>
      </motion.div>
      <Grid1 />
      <Grid2 />
    </div>
  );
}
