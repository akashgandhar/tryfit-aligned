import { fadeIn } from "@/utils/motion";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function Sgrid1() {
  const divleft = useRef(null);
  const divright = useRef(null);
  const isLeftView = useInView(divleft);
  const isRightView = useInView(divright);
  return (
    <div className="mt-11 grid xl:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr] pr-8 gap-4 md:gap-3 lg:gap-4 xl:gap-4 lg:pr-20 xl:pr-40 md:pr-20">
      <motion.div
        variants={fadeIn("right", "tween", 0.5, 1)}
        initial="hidden"
        animate={isLeftView ? "show" : "hidden"}
        ref={divleft}
      >
        <span className=" flex flex-col   w-full h-[260px] bg-btn_hover/15 backdrop-blur-md  rounded-[25px]">
          <div className="flex ml-12 mt-12 ">
            <svg
              width="60"
              height="60"
              viewBox="0 0 84 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="42.0334"
                cy="42"
                rx="41.4982"
                ry="42"
                fill="#D9D9D9"
              />
            </svg>
            <h2 className=" text-2xl md:text-xl lg:text-2xl xl:text-3xl xl:mt-3 lg:mt-3 md:mt-3 font-gilroy ml-8  text-btn_hover">
              Aryan Yadav
            </h2>
          </div>
          <p className="md:text-xs text-xs lg:text-md xl:text-xl mt-6 pr-4 ml-12 max-w-[650px] font-aventa">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ducimus,
            incidunt? Ipsam, pariatur quo.Voluptatem cum eum debitis eveniet
          </p>
        </span>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.5, 1)}
        initial="hidden"
        animate={isRightView ? "show" : "hidden"}
        ref={divright}
      >
        <span className=" flex flex-col   w-full h-[260px] bg-btn_hover/15 backdrop-blur-md  rounded-[25px]">
          <div className="flex ml-12 mt-12 ">
            <svg
              width="60"
              height="60"
              viewBox="0 0 84 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="42.0334"
                cy="42"
                rx="41.4982"
                ry="42"
                fill="#D9D9D9"
              />
            </svg>
            <h2 className=" text-2xl md:text-xl lg:text-2xl xl:text-3xl xl:mt-3 lg:mt-3 md:mt-3 font-gilroy ml-8  text-btn_hover">
              Aryan Yadav
            </h2>
          </div>
          <p className="md:text-xs text-xs lg:text-md xl:text-xl mt-6 pr-4 ml-12 max-w-[650px] font-aventa">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ducimus,
            incidunt? Ipsam, pariatur quo.Voluptatem cum eum debitis eveniet
          </p>
        </span>
      </motion.div>
    </div>
  );
}
