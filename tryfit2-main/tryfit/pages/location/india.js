import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Accordian1 from "@/components/accordian1";
import { useState } from "react";

const accordianData = [
    {
        title: "Delhi/ Ncr",
        Branch: "Gandhi Nagar",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.860852331412!2d77.26270987617846!3d28.663884782654904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5223496b49%3A0x97f00febca9ac5af!2sTRYFIT%20Fabrics!5e0!3m2!1sen!2sin!4v1711728009320!5m2!1sen!2sin",
        image: "/images/Branch_Manager.png",
        Name: "Mr. Sunil",
        address: "H.No.6012, Bhatia Building, Subhash Mohalla, Raghubarpura, Lal Batti Chowk, Gandhi Nagar, Delhi-110031",
        contact:"+91-9899505468"
    },
    {
        title: "Delhi/ Ncr",
        Branch: "Gandhi Nagar",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.860852331412!2d77.26270987617846!3d28.663884782654904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5223496b49%3A0x97f00febca9ac5af!2sTRYFIT%20Fabrics!5e0!3m2!1sen!2sin!4v1711728009320!5m2!1sen!2sin",
        image: "/images/Branch_Manager.png",
        Name: "Mr. Sunil",
        address: "H.No.6012, Bhatia Building, Subhash Mohalla, Raghubarpura, Lal Batti Chowk, Gandhi Nagar, Delhi-110031",
        contact:"+91-9899505468"
    },
    {
        title: "Delhi/ Ncr",
        Branch: "Gandhi Nagar",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.860852331412!2d77.26270987617846!3d28.663884782654904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5223496b49%3A0x97f00febca9ac5af!2sTRYFIT%20Fabrics!5e0!3m2!1sen!2sin!4v1711728009320!5m2!1sen!2sin",
        image: "/images/Branch_Manager.png",
        Name: "Mr. Sunil",
        address: "H.No.6012, Bhatia Building, Subhash Mohalla, Raghubarpura, Lal Batti Chowk, Gandhi Nagar, Delhi-110031",
        contact:"+91-9899505468"
    },
    
]

export default function India(){
    const [open,setOpen] =useState(false)
    const toggle = (index) => {
        if(open === index){
            return setOpen(null)
        }

        setOpen(index)
    }
    return(
        <div className="pr-8 ml-8 lg:pr-20  md:pr-20 md:ml-20 lg:ml-20 xl:ml-40 xl:pr-40">
            <Header />
            <div className="mt-[150px]">
                <img src="/images/ourlocation.png" className="w-full "/>
            </div>
            <section className="xl:grid xl:grid-cols-[1.5fr_0.5fr]">
                <div>
                {accordianData.map((data,index) => {
                    return <Accordian1 key={index} open={index === open } map={data.map} title={data.title} branch={data.Branch} image={data.image} name ={data.Name} address = {data.address} contact={data.contact} toggle={() => toggle(index)}/>
                    })}
                </div>
                <div className="bg-[#212121] text-white font-heavitas xl:m-6 xl:mb-0 xl:mr-0 mt-4">
                    <h2 className="xl:tansform xl:rotate-90 xl:mt-40 text-5xl p-4">India</h2>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

{/* <section className=" text-white xl:h-[600px] grid xl:grid-cols-[1fr_1fr] place-items-start pr-8 ml-8 lg:pr-20  md:pr-20 md:ml-20 lg:ml-20 xl:ml-40 xl:pr-40 ">
                <div className=" ">
                    {accordianData.map((data,index) => {
                    return <Accordian1 key={index} open={index === open } map={data.map} title={data.title} branch={data.Branch} image={data.image} name ={data.Name} address = {data.address} contact={data.contact} toggle={() => toggle(index)}/>
                    })}
                </div>
                <div className="bg-[#212121] mt-4 xl:w-[247px] h-full font-heavitas text-[128px]   ">
                    <h1 className="xl:transform xl:rotate-90  mt-56">INDIA</h1>
                </div>
            </section> */}