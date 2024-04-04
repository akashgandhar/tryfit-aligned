import Sgrid1 from "./Sgrid1";
import Sgrid2 from "./Sgrid2";
import { useInView, motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useRef } from "react";

export default function SuccesStories() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef);
  return (
    <div className="text-white ml-8 md:ml-20 lg:ml-20 xl:ml-40">
      <div id="SuccessStories" className=" text-black  mt-32 "></div>
      <motion.div
        variants={fadeIn("right", "tween", 0.5, 1)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        ref={headingRef}
      >
        <div className="inline-flex gap-3  font-heavitas  text-xl lg:text-6xl md:text-5xl xl:text-6xl  ">
          <h2>
            OUR <span className="text-btn_hover">SUCESS STORIES</span>
          </h2>
        </div>
        <h1 className="md:text-3xl lg:text-3xl xl:text-4xl text-xl font-heavitas">
          FROM OUR SATISFIED CLIENTS
        </h1>
      </motion.div>
      <Sgrid1 />
      <Sgrid2 />
    </div>
  );
}
