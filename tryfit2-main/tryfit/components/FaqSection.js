import { useEffect, useRef, useState } from "react";

export default function FaqSection() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetCount = 97;
          let currentCount = 0;

          const interval = setInterval(() => {
            currentCount += 1;
            setCount(currentCount);

            if (currentCount >= targetCount) {
              clearInterval(interval);
            }
          }, 15);

          return () => clearInterval(interval);
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      try {
        observer.unobserve(ref.current);
      } catch (error) {
        null;
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetCount = 50;
          let currentCount = 0;

          const interval = setInterval(() => {
            currentCount += 1;
            setCount2(currentCount);

            if (currentCount >= targetCount) {
              clearInterval(interval);
            }
          }, 30);

          return () => clearInterval(interval);
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetCount = 22;
          let currentCount = 0;

          const interval = setInterval(() => {
            currentCount += 1;
            setCount3(currentCount);

            if (currentCount >= targetCount) {
              clearInterval(interval);
            }
          }, 50);

          return () => clearInterval(interval);
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-8 pr-8 ml-8 lg:pr-20  md:pr-20 md:ml-20 lg:ml-20 xl:ml-40 xl:pr-40">
      <div className="flex w-full  bg-faq_background rounded-t-[26px] items-start justify-center pt-16">
        <div className="flex flex-col items-center">
          <button className="btn_green inline-flex items-center text-xs btn_shadow py-0.5 px-2 xl:py-0.5 xl:px-16 md:py-0.5 md:px-24 lg:py-0.5 lg:px-16 gap-3 xl:rounded-[15px] lg:rounded-[15px] md:rounded-[15px] rounded-lg">
            <svg
              className="w-8 h-8 hidden md:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <g>
                <path d="m4 19l-.93-.37a1 1 0 0 0 1.125 1.35zm4.706-.936l.474-.881l-.317-.17l-.352.07l.195.98zm-3.082-3.147l.93.37l.163-.414l-.196-.399zM19 12c0 3.246-2.853 6-6.53 6v2c4.641 0 8.53-3.514 8.53-8zM5.941 12c0-3.246 2.854-6 6.53-6V4C7.83 4 3.94 7.514 3.94 12h2zm6.53-6C16.147 6 19 8.754 19 12h2c0-4.486-3.889-8-8.53-8zm0 12c-1.205 0-2.328-.3-3.291-.817l-.948 1.761A8.934 8.934 0 0 0 12.471 20zm-8.276 1.98l4.706-.936l-.39-1.961l-4.706.936l.39 1.962zm2.326-5.506A5.564 5.564 0 0 1 5.94 12h-2c0 1.2.282 2.338.786 3.36zm-1.826.073L3.07 18.631l1.858.738l1.624-4.083l-1.858-.739z"></path>
                <circle cx={9} cy={12} r={1}></circle>
                <circle cx={12.5} cy={12} r={1}></circle>
                <circle cx={16} cy={12} r={1}></circle>
              </g>
            </svg>
            <p className="font-aventa">Frequently Asked Questions</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
          <h1 className="font-heavitas text-white text-xl md:text-4xl lg:text-5xl xl:text-6xl mt-11">
            EMPOWERING
          </h1>
          <div className="xl:inline-flex lg:flex md:flex text-center gap-3">
            <h1 className="font-heavitas text-btn_hover text-xl md:text-4xl lg:text-5xl xl:text-6xl">
              SUCCESS
            </h1>
            <h1 className="font-heavitas text-white text-xl md:text-4xl lg:text-5xl xl:text-6xl ">
              IN NUMBERS
            </h1>
          </div>
          <div className="text-white sm:text-[16px] md:text-[20px] xl:text-[24px] pb-8 items-center text-center md:max-w-[700px] max-w-[884px] font-aventa mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ducimus,
            incidunt? Ipsam, pariatur quo.Voluptatem cum eum debitis eveniet
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className="flex w-full py-10  bg-faq_background2 rounded-b-[26px] justify-center items-center"
      >
        <div className="text-white font-aventa_bold grid xl:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr] gap-4 xl:gap-[140px] lg:gap-[50px]">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
              {count}%
            </h1>
            <p className=" md:text-lg lg:text-xl xl:text-2xl">
              Satisfactory Rate
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
              {count2}+
            </h1>
            <p className="md:text-lg lg:text-xl xl:text-2xl">
              Delivered Projects
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {count3}+
            </h1>
            <p className="md:text-lg lg:text-xl xl:text-2xl">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
