import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Accordian1 from "@/components/accordian1";
import { useState } from "react";

const accordianData = [
  {
    title: "Shaoxing - Zhejiang",
    Branch: "Gandhi Nagar",
    map: "https://maps.google.com/maps?q=China+Textile+City+158+Wanshang+Rd%2C+Keqiao+District%2C+Shaoxing%2C+Zhejiang%2C+China%2C+312030&t=&z=13&ie=UTF8&iwloc=&output=embed",
    image: "/images/Branch_Manager.png",
    Name: "Mr. Sunil",
    address:
      "H.No.6012, Bhatia Building, Subhash Mohalla, Raghubarpura, Lal Batti Chowk, Gandhi Nagar, Delhi-110031",
    contact: "+91-9899505468",
  },
];

export default function India() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };
  return (
    <div className="pr-8 ml-8 lg:pr-20 md:pr-20 md:ml-20 lg:ml-20 xl:ml-40 xl:pr-40">
      <Header />
      <div className="mt-[150px]">
        <img src="/images/ourlocation.png" className="w-full" />
      </div>
      <section className="flex gap-2 xl:flex-row flex-col-reverse">
        <div>
          {accordianData.map((data, index) => {
            return (
              <Accordian1
                key={index}
                open={index === open}
                map={data.map}
                title={data.title}
                branch={data.Branch}
                image={data.image}
                name={data.Name}
                address={data.address}
                contact={data.contact}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
        <div className="xl:bg-[#212121] text-white font-heavitas mt-4 xl:h-56">
          <h2 className="xl:tansform xl:rotate-90 xl:mt-20 text-5xl">China</h2>
        </div>
      </section>
      <Footer />
    </div>
  );
}
