import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Accordian1 from "@/components/accordian1";
import { useState } from "react";



const accordianData = [
    {
        title: "Delhi/ Ncr",
        Branch: "Gandhi Nagar",
        map: "https://maps.google.com/maps?q=TRY+FIT+FABRICS+punjab++&t=&z=13&ie=UTF8&iwloc=&output=embed",
        image: "/images/Branch_Manager.png",
        Name: "Mr. Sunil",
        address: "H.No.6012, Bhatia Building, Subhash Mohalla, Raghubarpura, Lal Batti Chowk, Gandhi Nagar, Delhi-110031",
        contact:"+91-9899505468"
    },
    {
        title: "Delhi/ Ncr",
        Branch: "Gandhi Nagar",
        map: "https://maps.google.com/maps?q=TRY+FIT+FABRICS+meerut&t=&z=13&ie=UTF8&iwloc=&output=embed",
        image: "/images/Branch_Manager.png",
        Name: "Mr. Sunil",
        address: "H.No.6012, Bhatia Building, Subhash Mohalla, Raghubarpura, Lal Batti Chowk, Gandhi Nagar, Delhi-110031",
        contact:"+91-9899505468"
    },
    {
        title: "Delhi/ Ncr",
        Branch: "Gandhi Nagar",
        map: "https://maps.google.com/maps?q=TRY+FIT+FABRICS+No.443%2C+1st+floor%2C+Avinashi+road%2C+and%2C+near+Communist+office%2C+opp.to+Allen+Solly+showroom%2C+Tiruppur%2C+Tamil+Nadu+641602&t=&z=13&ie=UTF8&iwloc=&output=embed",
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
            <section className="flex gap-2 xl:flex-row flex-col-reverse">
                <div>
                {accordianData.map((data,index) => {
                    return <Accordian1 key={index} open={index === open } map={data.map} title={data.title} branch={data.Branch} image={data.image} name ={data.Name} address = {data.address} contact={data.contact} toggle={() => toggle(index)}/>
                    })}
                </div>
                <div className="xl:bg-[#212121] text-white font-heavitas mt-4">
                    <h2 className="xl:tansform xl:rotate-90 xl:mt-40 text-5xl">India</h2>
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