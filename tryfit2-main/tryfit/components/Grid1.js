import { fadeIn } from "@/utils/motion";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function Grid1() {
  const divleft = useRef(null);
  const divright = useRef(null);
  const isLeftView = useInView(divleft);
  const isRightView = useInView(divright);

  return (
    <div className="mt-11 xl:grid-cols-[2fr_0.8fr] pr-8 grid  gap-4  lg:pr-20 xl:pr-40 md:pr-20">
      <motion.div
        variants={fadeIn("right", "tween", 0.5, 1)}
        initial="hidden"
        animate={isLeftView ? "show" : "hidden"}
        ref={divleft}
      >
        <span className="flex flex-col w-full xl:min-h-[400px]  lg:min-h-[484px] md:min-h-[484px] bg-white border rounded-[25px] px-5">
          <div className=" w-full flex justify-between">
            <div className="flex flex-col w-full">
              <h2 className=" text-dive_color md:text-4xl text-3xl lg:text-6xl xl:text-6xl max-w-2xl font-heavitas  mt-8">
                DIVE IN OUR
              </h2>
              <h2 className=" flex text-dive_color md:text-4xl text-3xl lg:text-6xl xl:text-6xl font-heavitas  gap-4">
                WORLD
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" w-8 h-8 xl:w-20 xl:h-20 lg:w-14 lg:h-14 md:w-12 md:h-12 rotate-45  hover:scale-105 transition-all ease-in-out duration-300 "
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </h2>
            </div>
            <div className="flex md:ml-[120px] lg:ml-[162px] xl:ml-[168px] px-5">
              <svg
                width="225"
                height="200"
                viewBox="0 0 225 318"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:block "
              >
                <path
                  d="M199 -81C159.642 -81 121.167 -69.2995 88.4416 -47.3782C55.7162 -25.4569 30.2099 5.70078 15.1481 42.1546C0.0862236 78.6085 -3.85464 118.721 3.82382 157.42C11.5023 196.12 30.4552 231.667 58.2858 259.568C86.1165 287.468 121.575 306.469 160.177 314.167C198.779 321.864 238.792 317.914 275.154 302.814C311.517 287.714 342.596 262.144 364.462 229.336C386.329 196.529 398 157.957 398 118.5C397.944 65.6064 376.96 14.8953 339.653 -22.5061C302.345 -59.9075 251.761 -80.9441 199 -81ZM148.542 195.231H249.458C239.183 230.412 221.962 262.121 199 287.097C176.039 262.121 158.817 230.412 148.542 195.231ZM141.596 164.538C136.519 134.057 136.519 102.943 141.596 72.4615H256.404C261.481 102.943 261.481 134.057 256.404 164.538H141.596ZM30.6155 118.5C30.6021 102.932 32.7466 87.4377 36.9873 72.4615H110.579C106.012 102.983 106.012 134.017 110.579 164.538H36.9873C32.7466 149.562 30.6021 134.068 30.6155 118.5ZM249.458 41.7692H148.542C158.817 6.58815 176.039 -25.1208 199 -50.0967C221.962 -25.1208 239.183 6.58815 249.458 41.7692ZM287.421 72.4615H361.013C369.509 102.563 369.509 134.437 361.013 164.538H287.421C291.988 134.017 291.988 102.983 287.421 72.4615ZM348.958 41.7692H281.164C273.352 10.9524 260.233 -18.2603 242.397 -44.5529C265.184 -38.414 286.436 -27.5623 304.789 -12.6956C323.141 2.17107 338.187 20.7237 348.958 41.7692ZM155.603 -44.5529C137.767 -18.2603 124.648 10.9524 116.836 41.7692H49.0421C59.8135 20.7237 74.8591 2.17107 93.2113 -12.6956C111.564 -27.5623 132.816 -38.414 155.603 -44.5529ZM49.0421 195.231H116.836C124.648 226.047 137.767 255.26 155.603 281.553C132.816 275.414 111.564 264.562 93.2113 249.696C74.8591 234.829 59.8135 216.276 49.0421 195.231ZM242.397 281.553C260.233 255.26 273.352 226.047 281.164 195.231H348.958C338.187 216.276 323.141 234.829 304.789 249.696C286.436 264.562 265.184 275.414 242.397 281.553Z"
                  fill="url(#paint0_linear_39_526)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_39_526"
                    x1="41.5"
                    y1="247.323"
                    x2="204.5"
                    y2="42.7075"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2F2F2F" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <button className="hover:scale-105 transition-all ease-in-out duration-300 flex text-dive_color outline border border-dive_color w-[140px] md:w-[240px] lg:w-[240px] xl:w-[240px] text-center justify-center py-1 lg:text-4xl md:text-3xl sm:text-xl rounded-[13px] font-aventa mt-4 xl:mt-4">
            Our Story
          </button>

          <p className="text-dive_color max-w-3xl mt-7 font-aventa_bold font-medium sm:text-xl md:text-2xl lg:text-2xl xl:text-xl pb-4">
            &quot;Try fit Fabrics, formerly Bhatia Traders, has been a trusted
            name in fabrics since 1990. Under Mr. Deepak Bhatia&apos;s
            leadership, we&apos;re customer-centric, quality-driven, and poised
            for nationwide expansion.&quot;
          </p>
        </span>
      </motion.div>
      {/* ffde */}
      <motion.div
        variants={fadeIn("left", "tween", 0.5, 1)}
        initial="hidden"
        animate={isRightView ? "show" : "hidden"}
        ref={divright}
      >
        <div className="flex w-full xl:h-[400px] h-[400px] lg:h-[500px] md:h-[484px] span-bg  border border-white/50 rounded-[25px] justify-center">
          <button className="flex h-[45px] gap-2 px-20 items-center opacity-80  btn_green mt-[300px]  rounded-[10px]  ">
            <span className="hover:scale-105 transition-all ease-in-out duration-300 w-full flex gap-2 items-center justify-center">
              <img
                src="/images/instagram.svg"
                alt="instagram"
                className="w-6 h-6 "
              />

              <div className=" text-sm/[21px]">Instagram</div>
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
