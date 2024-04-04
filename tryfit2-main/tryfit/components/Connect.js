import Cgrid from "./Cgrid";
import Carousel from "./carousel";
import Carousel2 from "./carousel2";
import { useInView, motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useRef } from "react";
export default function Connect() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef);
  return (
    <div className="text-white">
      <motion.div
        variants={fadeIn("right", "tween", 0.5, 1)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        ref={headingRef}
      >
        <div className=" flex justify-center text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-heavitas gap-4 mt-36 ">
          <h2>
            LET&apos;S <span className="text-btn_hover">CONNECT</span> AND
          </h2>
        </div>
        <div className=" flex justify-center text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-heavitas gap-4">
          <h1>IGNITE</h1>
          <h1 className="text-btn_hover">SUCCESS</h1>
        </div>
      </motion.div>
      <Cgrid />
      <Carousel2 />
      <Carousel />
    </div>
  );
}
