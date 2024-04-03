import { Collapse } from "react-collapse";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Accordian2({open , toggle, heading, title, desc}){

    return(
        <div className="text-white mt-3 pt-3">
            <div className="border border-x-0 py-[25px] px-[50px] flex justify-between  cursor-pointer" onClick={toggle}>
                <div>
                    <p className="xl:text-[28px] text-2xl text-btn_hover font-abessinica ">{title}</p>
                    <p className="text-white_yellow xl:text-2xl">{heading}</p>
                </div>
                <div className="text-[30px] ml-4">
                    {open ? <AiOutlineArrowUp /> :  <AiOutlineArrowDown />}
                </div>
            </div>

            <Collapse isOpened={open}>
                <div className="bg-white/15 mt-5 pt-3 px-[50px] pb-[20px] rounded-[13px] ">
                    <p className=" mt-3 font-abessinica text-white_yellow xl:text-xl">
                        {desc}
                    </p>
                </div>
            </Collapse>
        </div>
    )
}