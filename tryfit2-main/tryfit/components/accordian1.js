import { Collapse } from "react-collapse";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowDownSquareFill } from "react-icons/bs";

export default function Accordian1({
  open,
  toggle,
  title,
  branch,
  map,
  image,
  name,
  address,
  contact,
}) {
  return (
    <div className="text-white ">
      <div
        className="flex justify-between mt-5 bg-white/15 py-6 px-5 xl:text-3xl cursor-pointer rounded-lg"
        onClick={toggle}
      >
        <p> {title}</p>
        <div className="xl:text-[30px] ">
          {open ? <BsArrowDownSquareFill /> : <BsArrowRightSquareFill />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-[#1A1B19] mt-5 pt-3 px-12 pb-[20px] rounded-[13px] ">
          <div className="flex xl:text-[40px] font-aventa mt-14">
            <h1 className="text-btn_hover">Branch -</h1>
            <h1>{branch}</h1>
          </div>
          <div className="w-full h-[560px]">
            <iframe
              width="100%"
              height="100%"
              className="border rounded-lg shadow-md"
              src={map}
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              allowFullScreen
            />
          </div>

          <div className="grid xl:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr]">
            <div>
              <h1 className="xl:text-[40px] font-aventa text-btn_hover mt-16">
                Get In Touch At
              </h1>
              <ul className="xl:ml-[64px] pb-[80px] mt-4 xl:text-[22px] lg:text-[22px] md:text-[22px] list-disc font-aventa">
                <li>{address}</li>
              </ul>
              <div>
                <ul className=" xl:ml-16 pb-[80px] list-disc font-aventa xl:text-[22px]">
                  <li className="flex gap-4">
                    <h1 className="text-btn_hover xl:text-xl lg:text-xl md:text-xl text-xs">
                      Contact No. :{" "}
                      <span className="underline text-white ">{contact}</span>
                    </h1>
                  </li>
                  <li className="flex gap-4">
                    <h1 className="text-btn_hover xl:text-xl lg:text-xl md:text-xl text-xs">
                      Email :{" "}
                      <span className="underline text-white">
                        info@tryfitfabrics.com
                      </span>
                    </h1>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" xl:mt-[300px] lg:mt-[250px] xl:ml-0 lg:ml-0 md:ml-20">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <h1 className="bg-white font-aventa xl:text-[16px] text-black rounded-l-[10px] px-6 p-1">
                    {name}
                  </h1>
                  <h1 className="font-aventa text-[13px] text-btn_hover ">
                    Branch Manager
                  </h1>
                </div>
                <img
                  src={image}
                  className="xl:h-[180px] xl:w-[180px] lg:w-[180px] lg:h-[180px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] border-4 xl:rounded-[47px] lg:rounded-[47px] md:rounded-[40px] rounded-[30px] border-white"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
