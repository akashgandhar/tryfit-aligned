import { useInView, motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useRef } from "react";

export default function Grid2() {
  const divleft = useRef(null);
  const divright = useRef(null);
  const isLeftView = useInView(divleft);
  const isRightView = useInView(divright);

  return (
    <div className="mt-4 grid xl:grid-cols-2  gap-4 pr-8  md:pr-20 lg:pr-20 xl:pr-40">
      <motion.span
        ref={divleft}
        variants={fadeIn("right", "spring", 0.7, 1)}
        initial="hidden"
        animate={isLeftView ? "show" : "hidden"}
        className="flex flex-col w-full xl:h-[400px]  lg:h-[500px] md:h-[400px] gridbg backdrop-blur-md rounded-[25px] text-white "
      >
        <div className=" mt-[90px] ml-10">
          <h2 className="flex font-abessinica leading-[5rem] lg:text-[70px] text-[40px] md:text-[70px] xl:text-[70px]">
            CUSTOM{" "}
          </h2>
          <h2 className="flex font-abessinica  xl:mt-7 leading-[5rem] lg:text-[70px] text-[40px] md:text-[70px] xl:text-[70px]">
            FABRIC
            <span className="ml-4 mt-2">
              <svg
                width="64"
                height="50"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <circle cx="32" cy="32" r="32" fill="#5B0000" />
                <path
                  d="M17.3031 43.868C16.522 44.6491 16.522 45.9154 17.3031 46.6964C18.0841 47.4775 19.3505 47.4775 20.1315 46.6964L17.3031 43.868ZM47.2833 18.7162C47.2833 17.6116 46.3879 16.7162 45.2833 16.7162L27.2833 16.7162C26.1788 16.7162 25.2833 17.6116 25.2833 18.7162C25.2833 19.8208 26.1788 20.7162 27.2833 20.7162L43.2833 20.7162L43.2833 36.7162C43.2833 37.8208 44.1788 38.7162 45.2833 38.7162C46.3879 38.7162 47.2833 37.8208 47.2833 36.7162L47.2833 18.7162ZM20.1315 46.6964L46.6975 20.1304L43.8691 17.302L17.3031 43.868L20.1315 46.6964Z"
                  fill="white"
                />
              </svg>
            </span>{" "}
          </h2>
        </div>
        <div>
          <p className="font-abessinica ml-10 mt-4  md:text-[28px] lg:text-[28px] xl:text-[28px] max-w-[470px] pb-4 ">
            We Make Custom Fabrics On Demand Too!
          </p>
        </div>
      </motion.span>

      <motion.span
        ref={divright}
        variants={fadeIn("left", "spring", 0.7, 1)}
        initial="hidden"
        animate={isRightView ? "show" : "hidden"}
        className="flex w-full xl:h-[400px]  lg:h-[484px] md:h-[400px] bg-bad_yellow backdrop-blur-md rounded-[25px]"
      >
        <div className="w-full">
          <svg
            width="80"
            height="80"
            viewBox="0 0 124 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M20.6665 61.9998C20.6665 42.8487 20.6665 33.2732 26.4517 27.1921C26.6923 26.9392 26.9392 26.6923 27.1921 26.4517C33.2732 20.6665 42.8487 20.6665 61.9998 20.6665V20.6665C81.1509 20.6665 90.7265 20.6665 96.8076 26.4517C97.0605 26.6923 97.3074 26.9392 97.548 27.1921C103.333 33.2732 103.333 42.8487 103.333 61.9998V101.333C103.333 102.276 103.333 102.747 103.04 103.04C102.747 103.333 102.276 103.333 101.333 103.333H61.9998C42.8487 103.333 33.2732 103.333 27.1921 97.548C26.9392 97.3074 26.6923 97.0605 26.4517 96.8076C20.6665 90.7265 20.6665 81.1509 20.6665 61.9998V61.9998Z"
              stroke="#2F2F2F"
              stroke-width="2"
            />
            <path
              d="M46.5 56.8335L77.5 56.8335"
              stroke="#2F2F2F"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M62 77.5H77.5"
              stroke="#2F2F2F"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex w-full flex-col  ">
            <h1 className="font-abessinica text-dive_color text-6xl md:text-7xl lg:text-8xl xl:text-8xl text-center justify-center items-center">
              Our Blog
            </h1>
            <h2 className="xl:text-3xl lg:text-4xl text-2xl md:text-4xl text-dive_color font-aventa_bold mt-2 ml-[23px]">
              &quot;Unleash Your Potential:
            </h2>
            <p className="xl:text-3xl md:text-3xl lg:text-3xl text-xl text-grey1 font-aventa_bold mt-2 ml-14">
              Introducing Tryfit Fabric Dynamic Fabrics!&quot;
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <button className="flex items-center ml-4 bg-dive_color mt-10 xl:mt-4 md:mt-4 lg:mt-4 px-[25px] py-[10px] rounded-[14px] xl:text-xl md:text-2xl text-xs lg:text-xl">
                Read More
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3"
                >
                  <path
                    d="M22.0542 1.01217C22.0542 0.459884 21.6065 0.0121688 21.0542 0.0121685L12.0542 0.0121693C11.502 0.012169 11.0542 0.459885 11.0542 1.01217C11.0542 1.56445 11.502 2.01217 12.0542 2.01217L20.0542 2.01217L20.0542 10.0122C20.0542 10.5645 20.502 11.0122 21.0542 11.0122C21.6065 11.0122 22.0542 10.5645 22.0542 10.0122L22.0542 1.01217ZM2.08211 21.3985L21.7613 1.71928L20.3471 0.305062L0.667893 19.9843L2.08211 21.3985Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-end mt-4">
              <svg
                width="80"
                height="80"
                viewBox="0 0 124 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M103.333 62.0002C103.333 81.1513 103.333 90.7268 97.5483 96.8079C97.3077 97.0608 97.0608 97.3077 96.8079 97.5483C90.7268 103.333 81.1513 103.333 62.0002 103.333V103.333C42.8491 103.333 33.2735 103.333 27.1924 97.5483C26.9395 97.3077 26.6926 97.0608 26.452 96.8079C20.6668 90.7268 20.6668 81.1513 20.6668 62.0002L20.6668 22.6668C20.6668 21.724 20.6668 21.2526 20.9597 20.9597C21.2526 20.6668 21.724 20.6668 22.6668 20.6668L62.0002 20.6668C81.1513 20.6668 90.7268 20.6668 96.8079 26.452C97.0608 26.6926 97.3077 26.9395 97.5483 27.1924C103.333 33.2735 103.333 42.8491 103.333 62.0002V62.0002Z"
                  stroke="#2F2F2F"
                  stroke-width="2"
                />
                <path
                  d="M77.5 67.1665L46.5 67.1665"
                  stroke="#2F2F2F"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M62 46.5H46.5"
                  stroke="#2F2F2F"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.span>
    </div>
  );
}
{
  /* <button className="flex  items-center ml-[23px]  bg-dive_color  rounded-[14px] xl:text-2xl md:text-2xl text-lg lg:text-xl" >
                                Read More
                                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-3">
                                    <path d="M22.0542 1.01217C22.0542 0.459884 21.6065 0.0121688 21.0542 0.0121685L12.0542 0.0121693C11.502 0.012169 11.0542 0.459885 11.0542 1.01217C11.0542 1.56445 11.502 2.01217 12.0542 2.01217L20.0542 2.01217L20.0542 10.0122C20.0542 10.5645 20.502 11.0122 21.0542 11.0122C21.6065 11.0122 22.0542 10.5645 22.0542 10.0122L22.0542 1.01217ZM2.08211 21.3985L21.7613 1.71928L20.3471 0.305062L0.667893 19.9843L2.08211 21.3985Z" fill="white"/>
                                </svg>
                            </button> */
}
