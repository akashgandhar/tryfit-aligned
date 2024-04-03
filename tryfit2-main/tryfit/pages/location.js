import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Location() {
    return (
        <div>
            <Header />
            <div className="flex flex-col justify-center text-center items-center mt-36 text-white pr-8 ml-8 lg:pr-20  md:pr-20 md:ml-20 lg:ml-20 ">
                <div className="flex flex-col xl:flex-row text-4xl xl:text-8xl gap-5 font-heavitas">
                    <h1>WHERE TO <span className="text-btn_hover">FIND</span> Us</h1>
                </div>
                <p className="text-lg xl:text-3xl max-w-[990px] pt-5 pb-10">From India to China, we bridge continents with innovative products. Experience our global manufacturing power</p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6 xl:gap-10 pr-8 ml-8 lg:pr-20  md:pr-20 md:ml-20 lg:ml-20">
                <Link href={"/location/india"} className=" xl:pr-[32px] pb-10">
                    <img src="/images/india.png" className="w-full rounded-t-[18px]"/>
                    <div className="flex text-center justify-center p-2 bg-[#1A1B19] text-white font-aventa text-md xl:text-[30px] gap-4">
                        <h2>We  Have <span className="text-btn_hover">4 Branches</span> In India </h2>
                    </div>
                    <div className="bg-[#212121] text-md xl:text-[20px] text-white pb-5 p-2 rounded-b-[18px]">
                        <p className="ml-4  font-aventa">India, We're Growing! Experience Our Expertise Across 4 Locations. Find Your Closest Branch For Exceptional Service</p>
                        <ul className="ml-[64px] mt-4 list-disc">
                            <li>Delhi - Dadadsaddad</li>
                            <li>Uttar Pradesh - Dadadsaddad</li>
                            <li>Punjab - Dadadsaddad</li>
                            <li>TamilNadu - Dadadsaddad</li>
                        </ul>
                    </div>
                </Link>
                <Link href={"/location/china"} className="  pb-10 ">
                    <img src="/images/china.png" className="w-full rounded-t-[18px]" />
                    <div className="flex text-center justify-center p-2 bg-[#1A1B19] text-white font-aventa text-lg xl:text-[30px] gap-4">
                        <h2>We  Have <span className="text-btn_hover">1 Branch</span> In China </h2>
                    </div>
                    <div className="bg-[#212121] text-md p-2 xl:text-[20px] text-white pb-5 rounded-b-[18px]">
                        <p className="ml-4  font-aventa">China, We're Growing! Experience Our Expertise Across 4 Locations. Find Your Closest Branch For Exceptional Service</p>
                        <ul className="ml-[64px] xl:pb-[80px] lg:pb-[68px] md:pb-[65px] mt-4 list-disc">
                            <li>Shaoxing - Zhejiang</li>
                            {/* Add other branches in China */}
                        </ul>
                    </div>
                </Link>
            </div>
            <Footer />
        </div>
    );
}
