import { useInView, motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useRef } from "react";

export default function Sgrid2() {
  const divleft = useRef(null);
  const divright = useRef(null);
  const isLeftView = useInView(divleft);
  const isRightView = useInView(divright);
  return (
    <div className="mt-4 md:mt-3 lg:mt-4 xl:mt-4 grid xl:grid-cols-[1.8fr_1.2fr]  lg:grid-cols-[1.8fr_1.2fr] md:grid-cols-[1.8fr_1.2fr] pr-8 gap-4 md:gap-3 lg:gap-4 xl:gap-4 lg:pr-20 xl:pr-40 md:pr-20">
      <motion.div
        ref={divleft}
        variants={fadeIn("right", "spring", 0.7, 1)}
        initial="hidden"
        animate={isLeftView ? "show" : "hidden"}
      >
        <span className=" flex flex-col   w-full h-[260px] bg-btn_hover/15 backdrop-blur-md  rounded-[25px]">
          <div className="flex ml-12 mt-12 ">
          <Image src="/images/person.png" alt="ellipse" width="50"
              height="60" className=" rounded-full" />
            <h2 className=" text-2xl md:text-xl lg:text-2xl xl:text-3xl xl:mt-3 lg:mt-3 md:mt-3 font-gilroy ml-8  text-btn_hover">
              Shivani Jangra
            </h2>
          </div>
          <p className="md:text-xs text-xs lg:text-md xl:text-xl mt-6 pr-4 ml-12 max-w-[650px] font-aventa">
          &quot;As a pro athlete, I need gear that keeps up. Their fabrics exceed expectations. Highly recommended!&quot;
          </p>
        </span>
      </motion.div>
      <motion.span
        ref={divright}
        variants={fadeIn("left", "spring", 0.7, 1)}
        initial="hidden"
        animate={isRightView ? "show" : "hidden"}
      >
        <span className=" flex flex-col   w-full h-[260px] bg-btn_hover/15 backdrop-blur-md  rounded-[25px]">
          <div className="flex ml-12 mt-12 ">
          <Image src="/images/person2.png" alt="ellipse" width="50"
              height="60" className=" rounded-full" />
            <h2 className=" text-2xl md:text-xl lg:text-2xl xl:text-3xl xl:mt-3 lg:mt-3 md:mt-3 font-gilroy ml-8  text-btn_hover">
              Vishal Sharma
            </h2>
          </div>
          <p className="md:text-xs text-xs lg:text-md xl:text-xl mt-6 pr-4 ml-12 max-w-[650px] font-aventa">
          &quot;Stumbled upon this company searching for high-performance gear. Their fabrics are lightweight, breathable, and functional.&quot;
          </p>
        </span>
      </motion.span>
    </div>
  );
}
