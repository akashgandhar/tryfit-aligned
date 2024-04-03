import { Collapse } from "react-collapse";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowDownSquareFill } from "react-icons/bs";

export default function Accordian({open , toggle, title, desc}){

    return(
        <div className="text-white mt-3 pt-3">
            <div className="bg-white/15 py-[25px] px-[20px] flex justify-between  cursor-pointer rounded-[8px]" onClick={toggle}>
                <p className="text-[18px] font-abessinica ">{title}</p>
                <div className="text-[30px] ml-4">
                    {open ? <BsArrowDownSquareFill /> :  <BsArrowRightSquareFill />}
                </div>
            </div>

            <Collapse isOpened={open}>
                <div className="bg-[#D9D9D9] mt-5 pt-3 px-[30px] pb-[20px] rounded-[13px] ">
                    <p className=" mt-3 font-abessinica text-black">
                        {desc}
                    </p>
                </div>
            </Collapse>
        </div>
    )
}