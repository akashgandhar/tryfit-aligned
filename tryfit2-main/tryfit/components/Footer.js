import Link from "next/link";
import InstagramPostEmbed from "./instagram";
import { BsArrowUpRight } from "react-icons/bs";

export default function Footer(){
    return(
        <footer className="text-white w-full h-auto bg-black_shade/10 pr-8 pl-8  lg:pr-20  md:pr-20 md:pl-20 lg:pl-20 xl:pl-40 xl:pr-40 mt-28">
            <div className="flex items-center font-ABeeZee">
                <img src="/images/logo.png" className="  pt-16 w-28"></img>
                <h1 className=" text-3xl ml-2 mt-8">TRYFIT FABRICS</h1>                 
            </div>
            <div className="xl:grid lg:grid md:hidden hidden xl:grid-cols-[1fr_2fr_0.4fr] ">
                <div className="xl:flex md:flex md:justify-center xl:flex-col font-ABeeZee">
                    <div>
                        <h2 className="res  underline mt-5">Contact Us</h2>
                        <h2 className=" mt-9 inline-flex gap-2 max-w-xs res">
                            <svg width="80" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                            <path d="M12 16.15C10.8634 16.15 9.77327 15.7022 8.96954 14.9052C8.16582 14.1082 7.71429 13.0272 7.71429 11.9C7.71429 10.7728 8.16582 9.69183 8.96954 8.8948C9.77327 8.09777 10.8634 7.65 12 7.65C13.1366 7.65 14.2267 8.09777 15.0305 8.8948C15.8342 9.69183 16.2857 10.7728 16.2857 11.9C16.2857 12.4581 16.1749 13.0108 15.9595 13.5264C15.7441 14.042 15.4284 14.5106 15.0305 14.9052C14.6325 15.2999 14.16 15.6129 13.6401 15.8265C13.1201 16.0401 12.5628 16.15 12 16.15ZM12 0C8.8174 0 5.76515 1.25375 3.51472 3.48543C1.26428 5.71711 0 8.74392 0 11.9C0 20.825 12 34 12 34C12 34 24 20.825 24 11.9C24 8.74392 22.7357 5.71711 20.4853 3.48543C18.2348 1.25375 15.1826 0 12 0Z" fill="#F6F6F6"/>
                            </svg>
                            Building No. 6012, Bhatia Building, Subhash Mohalla, Raghubar Pura, Lal Batti Chowk, Gandhi Nagar, Delhi 110031 (India)
                        </h2>
                    </div>
                    <div className="md:flex xl:ml-0 xl:mt-0 md:mt-10 md:ml-[100px] md:flex-col">
                        <h2 className="inline-flex mt-9 gap-2 res items-center">
                            <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.4009 0.010534C30.2646 -0.00351133 30.1272 -0.00351133 29.9909 0.010534H1.99094C1.81148 0.0132991 1.63321 0.0402073 1.46094 0.0905339L15.9109 14.4805L30.4009 0.010534Z" fill="#F6F6F6"/>
                            <path d="M31.88 1.40234L17.32 15.9023C16.9453 16.2748 16.4384 16.4839 15.91 16.4839C15.3816 16.4839 14.8747 16.2748 14.5 15.9023L0.0700001 1.51234C0.0256394 1.67538 0.00211869 1.84339 0 2.01234V22.0123C0 22.5428 0.210714 23.0515 0.585786 23.4266C0.960859 23.8016 1.46957 24.0123 2 24.0123H30C30.5304 24.0123 31.0391 23.8016 31.4142 23.4266C31.7893 23.0515 32 22.5428 32 22.0123V2.01234C31.992 1.804 31.9516 1.59818 31.88 1.40234ZM3.37 22.0123H1.98V20.5823L9.25 13.3723L10.66 14.7823L3.37 22.0123ZM29.98 22.0123H28.58L21.29 14.7823L22.7 13.3723L29.97 20.5823L29.98 22.0123Z" fill="#F6F6F6"/>
                            </svg>
                            support@figma.com
                        </h2>
                        <h2 className="inline-flex mt-9 gap-2 res">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.3667 28C23.1259 28 19.9241 27.2938 16.7611 25.8813C13.5981 24.4689 10.7204 22.4659 8.12778 19.8722C5.53519 17.2796 3.53267 14.4019 2.12022 11.2389C0.707778 8.07593 0.00103704 4.87407 0 1.63333C0 1.16667 0.155555 0.777778 0.466667 0.466667C0.777778 0.155555 1.16667 0 1.63333 0H7.93333C8.2963 0 8.62037 0.123407 8.90556 0.370222C9.19074 0.617037 9.35926 0.908444 9.41111 1.24444L10.4222 6.68889C10.4741 7.1037 10.4611 7.4537 10.3833 7.73889C10.3056 8.02407 10.163 8.27037 9.95555 8.47778L6.18333 12.2889C6.70185 13.2481 7.31733 14.1747 8.02978 15.0687C8.74222 15.9626 9.52674 16.8249 10.3833 17.6556C11.187 18.4593 12.0296 19.2049 12.9111 19.8924C13.7926 20.58 14.7259 21.2084 15.7111 21.7778L19.3667 18.1222C19.6 17.8889 19.9049 17.7141 20.2813 17.598C20.6578 17.4819 21.027 17.4492 21.3889 17.5L26.7556 18.5889C27.1185 18.6926 27.4167 18.8808 27.65 19.1536C27.8833 19.4263 28 19.7307 28 20.0667V26.3667C28 26.8333 27.8444 27.2222 27.5333 27.5333C27.2222 27.8444 26.8333 28 26.3667 28Z" fill="#F6F6F6"/>
                            </svg>
                            +1 800 854-36-80
                        </h2>
                    </div>
                </div>
                <div className=" xl:flex-col lg:flex-col  justify-center font-ABeeZee xl:flex lg:flex md:hidden hidden">
                    <h1 className="res xl:ml-20 xl:text-start lg:text-center underline  mb-5 ">Instagram</h1>
                    <div className="grid-container xl:ml-20 lg:ml-40 h-auto w-9  ">
                        <InstagramPostEmbed />
                    </div>
                </div>
                <div className="flex gap-8 justify-between">
                    <div className="font-ABeeZee justify-center xl:mr-2 lg:pl-32">
                        <h2 className="res  underline mt-5 justify-center ">Location</h2>
                        <h2 className=" mt-7 res">India</h2>
                        <h2 className=" res mt-4">China</h2>
                    </div>
                    <div className="font-ABeeZee xl:pr-2 lg:pr-32">
                        <Link href={"/Blog"} className="res  underline mt-5 ">COMPANY</Link>
                        <h2 className=" mt-7 res">About Us</h2>
                        <h2 className=" mt-4 res">Catalogue</h2>
                        <h2 className=" mt-4 res">Teams</h2>
                        <h2 className=" mt-4 res">Contacts Us</h2>
                    </div>
                </div>
            </div>
            <div className=" xl:border lg:border xl:border-x-0 pb-8  xl:border-b-2 lg:border-b-2 mt-14">
                <div className="xl:grid lg:grid md:hidden hidden xl:grid-cols-[1fr_1.5fr_0.7fr] md:gap-8 mt-12 justify-center items-center">
                    <div className="flex gap-12 justify-center">
                        <svg width="40" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.2 28.5714L38.251 20L23.2 11.4286V28.5714ZM56.724 6.2C57.101 7.54286 57.362 9.34286 57.536 11.6286C57.739 13.9143 57.826 15.8857 57.826 17.6L58 20C58 26.2571 57.536 30.8571 56.724 33.8C55.999 36.3714 54.317 38.0286 51.707 38.7429C50.344 39.1143 47.85 39.3714 44.022 39.5429C40.252 39.7429 36.801 39.8286 33.611 39.8286L29 40C16.849 40 9.28 39.5429 6.293 38.7429C3.683 38.0286 2.001 36.3714 1.276 33.8C0.899 32.4571 0.638 30.6571 0.464 28.3714C0.261 26.0857 0.174 24.1143 0.174 22.4L0 20C0 13.7429 0.464 9.14286 1.276 6.2C2.001 3.62857 3.683 1.97143 6.293 1.25714C7.656 0.885714 10.15 0.628571 13.978 0.457142C17.748 0.257142 21.199 0.171428 24.389 0.171428L29 0C41.151 0 48.72 0.457143 51.707 1.25714C54.317 1.97143 55.999 3.62857 56.724 6.2Z" fill="white"/>
                        </svg>
                        <svg width="40" height="35" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.5 2H12.5C6.70101 2 2 6.70101 2 12.5V33.5C2 39.299 6.70101 44 12.5 44H33.5C39.299 44 44 39.299 44 33.5V12.5C44 6.70101 39.299 2 33.5 2Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M34.5506 11.4492H34.5716M31.4006 21.6762C31.6597 23.4239 31.3612 25.2089 30.5475 26.7772C29.7337 28.3454 28.4462 29.6172 26.868 30.4115C25.2898 31.2059 23.5013 31.4824 21.7569 31.2017C20.0125 30.921 18.4011 30.0974 17.1517 28.8481C15.9024 27.5987 15.0788 25.9873 14.7981 24.2429C14.5174 22.4985 14.7939 20.71 15.5882 19.1318C16.3826 17.5536 17.6543 16.2661 19.2226 15.4523C20.7909 14.6386 22.5758 14.3401 24.3236 14.5992C26.1063 14.8636 27.7567 15.6943 29.0311 16.9687C30.3055 18.243 31.1362 19.8935 31.4006 21.6762Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg width="40" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.8794 6.11111C33.9444 4.16636 31.6397 2.62442 29.0995 1.57523C26.5594 0.526036 23.8347 -0.00940821 21.0844 0.000125096C9.5608 0.000125096 0.168845 9.3451 0.168845 20.8111C0.168845 24.4861 1.1397 28.056 2.95477 31.206L0 42L11.0804 39.102C14.1407 40.761 17.5809 41.643 21.0844 41.643C32.608 41.643 42 32.298 42 20.8321C42 15.2671 39.8261 10.0381 35.8794 6.11111ZM21.0844 38.115C17.9608 38.115 14.9005 37.275 12.2201 35.7L11.5869 35.322L5.00201 37.044L6.75377 30.66L6.33166 30.009C4.59625 27.2517 3.67477 24.0645 3.67236 20.8111C3.67236 11.2771 11.4814 3.50711 21.0633 3.50711C25.7065 3.50711 30.0754 5.31311 33.3467 8.5891C34.9665 10.1934 36.2502 12.1017 37.1233 14.2033C37.9965 16.3049 38.4417 18.558 38.4332 20.8321C38.4754 30.366 30.6663 38.115 21.0844 38.115ZM30.6241 25.179C30.0965 24.927 27.5216 23.6671 27.0573 23.4781C26.5719 23.3101 26.2342 23.2261 25.8754 23.7301C25.5166 24.2551 24.5246 25.431 24.2291 25.767C23.9337 26.124 23.6171 26.166 23.0894 25.893C22.5618 25.641 20.8734 25.074 18.8894 23.3101C17.3276 21.9241 16.2935 20.2231 15.9769 19.6981C15.6814 19.1731 15.9347 18.9001 16.209 18.6271C16.4412 18.3961 16.7367 18.0181 16.9899 17.7241C17.2432 17.4301 17.3487 17.1991 17.5176 16.8631C17.6864 16.5061 17.602 16.2121 17.4754 15.9601C17.3487 15.7081 16.2935 13.1461 15.8714 12.0961C15.4492 11.0881 15.006 11.2141 14.6894 11.1931H13.6764C13.3176 11.1931 12.7688 11.3191 12.2834 11.8441C11.8191 12.3691 10.4683 13.6291 10.4683 16.1911C10.4683 18.7531 12.3467 21.2311 12.6 21.5671C12.8533 21.9241 16.2935 27.174 21.5276 29.421C22.7729 29.967 23.7437 30.282 24.5035 30.513C25.7487 30.912 26.8884 30.849 27.796 30.723C28.809 30.576 30.8985 29.463 31.3206 28.245C31.7638 27.027 31.7638 25.998 31.6161 25.767C31.4683 25.536 31.1518 25.431 30.6241 25.179Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="flex justify-center text-center xl:mt-0 lg:mt-0 md:mt-4 mt-4 items-center ">
                        <h2 className=" res font-abessinica xl:w-[750px] text-center">Subscribe to our news letter stay tuned for new web <br/>design and latest updates. Let&apos;s do it!</h2>
                    </div>
                    <div className=" flex flex-col lg:mt-0 xl:mt-0 md:mt-8 mt-8  md:items-center items-center font-ABeeZee gap-7">
                        <h2>Privacy Policy</h2>
                        <h2>Terms Of Use</h2>
                    </div>
                </div>
                
                <div className=" p-4 justify-center items-center mt-5 xl:flex lg:flex md:hidden hidden">
                    <span className="text-white xl:text-3xl font-aventa font-semibold mr-6">Newsletter</span>
                    <div className="bg-white p-1">
                    <input
                    type="email"
                    placeholder="Enter your email Address"
                    className="text-black mx-4 px-2 py-1 xl:w-[400px] outline-none"/>
                    <button className=" bg-black text-white px-6 py-3 hover:bg-gray-700 hover:text-white">
                    Subscribe
                    </button>
                </div>
            </div>
            </div>
            <div className="xl:hidden lg:hidden md:flex flex flex-col">
                <h2 className="text-2xl font-aventa_bold underline">Contact Us</h2>
                <h2 className=" mt-5 inline-flex gap-2 max-w-xs font-aventa res">
                    <svg width="80" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                    <path d="M12 16.15C10.8634 16.15 9.77327 15.7022 8.96954 14.9052C8.16582 14.1082 7.71429 13.0272 7.71429 11.9C7.71429 10.7728 8.16582 9.69183 8.96954 8.8948C9.77327 8.09777 10.8634 7.65 12 7.65C13.1366 7.65 14.2267 8.09777 15.0305 8.8948C15.8342 9.69183 16.2857 10.7728 16.2857 11.9C16.2857 12.4581 16.1749 13.0108 15.9595 13.5264C15.7441 14.042 15.4284 14.5106 15.0305 14.9052C14.6325 15.2999 14.16 15.6129 13.6401 15.8265C13.1201 16.0401 12.5628 16.15 12 16.15ZM12 0C8.8174 0 5.76515 1.25375 3.51472 3.48543C1.26428 5.71711 0 8.74392 0 11.9C0 20.825 12 34 12 34C12 34 24 20.825 24 11.9C24 8.74392 22.7357 5.71711 20.4853 3.48543C18.2348 1.25375 15.1826 0 12 0Z" fill="#F6F6F6"/>
                    </svg>
                    Building No. 6012, Bhatia Building, Subhash Mohalla, Raghubar Pura, Lal Batti Chowk, Gandhi Nagar, Delhi 110031 (India)
                </h2>
                <h2 className="inline-flex mt-10 font-aventa gap-2 res items-center">
                    <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.4009 0.010534C30.2646 -0.00351133 30.1272 -0.00351133 29.9909 0.010534H1.99094C1.81148 0.0132991 1.63321 0.0402073 1.46094 0.0905339L15.9109 14.4805L30.4009 0.010534Z" fill="#F6F6F6"/>
                    <path d="M31.88 1.40234L17.32 15.9023C16.9453 16.2748 16.4384 16.4839 15.91 16.4839C15.3816 16.4839 14.8747 16.2748 14.5 15.9023L0.0700001 1.51234C0.0256394 1.67538 0.00211869 1.84339 0 2.01234V22.0123C0 22.5428 0.210714 23.0515 0.585786 23.4266C0.960859 23.8016 1.46957 24.0123 2 24.0123H30C30.5304 24.0123 31.0391 23.8016 31.4142 23.4266C31.7893 23.0515 32 22.5428 32 22.0123V2.01234C31.992 1.804 31.9516 1.59818 31.88 1.40234ZM3.37 22.0123H1.98V20.5823L9.25 13.3723L10.66 14.7823L3.37 22.0123ZM29.98 22.0123H28.58L21.29 14.7823L22.7 13.3723L29.97 20.5823L29.98 22.0123Z" fill="#F6F6F6"/>
                    </svg>
                    support@figma.com
                </h2>
                <h2 className="inline-flex mt-10 font-aventa gap-2 res mb-5">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.3667 28C23.1259 28 19.9241 27.2938 16.7611 25.8813C13.5981 24.4689 10.7204 22.4659 8.12778 19.8722C5.53519 17.2796 3.53267 14.4019 2.12022 11.2389C0.707778 8.07593 0.00103704 4.87407 0 1.63333C0 1.16667 0.155555 0.777778 0.466667 0.466667C0.777778 0.155555 1.16667 0 1.63333 0H7.93333C8.2963 0 8.62037 0.123407 8.90556 0.370222C9.19074 0.617037 9.35926 0.908444 9.41111 1.24444L10.4222 6.68889C10.4741 7.1037 10.4611 7.4537 10.3833 7.73889C10.3056 8.02407 10.163 8.27037 9.95555 8.47778L6.18333 12.2889C6.70185 13.2481 7.31733 14.1747 8.02978 15.0687C8.74222 15.9626 9.52674 16.8249 10.3833 17.6556C11.187 18.4593 12.0296 19.2049 12.9111 19.8924C13.7926 20.58 14.7259 21.2084 15.7111 21.7778L19.3667 18.1222C19.6 17.8889 19.9049 17.7141 20.2813 17.598C20.6578 17.4819 21.027 17.4492 21.3889 17.5L26.7556 18.5889C27.1185 18.6926 27.4167 18.8808 27.65 19.1536C27.8833 19.4263 28 19.7307 28 20.0667V26.3667C28 26.8333 27.8444 27.2222 27.5333 27.5333C27.2222 27.8444 26.8333 28 26.3667 28Z" fill="#F6F6F6"/>
                    </svg>
                    +1 800 854-36-80
                </h2>
            </div>
            <div className="xl:hidden lg:hidden md:grid grid grid-cols-2 border border-x-0 pb-5 pt-5">
                <div className="">
                    <h2 className="text-xl font-aventa_bold underline">COMPANY</h2>
                    <h3 className="font-aventa">About Us</h3>
                    <h3 className="font-aventa">Catalogue</h3>
                    <h3 className="font-aventa">Blogs</h3>
                    <h3 className="font-aventa">Contact Us</h3>
                </div>
                <div>
                    <h2 className="text-xl font-aventa_bold underline">REACH US AT</h2>
                    <h3 className="font-aventa flex items-center gap-2">Intagram <BsArrowUpRight /></h3>
                    <h3 className="font-aventa flex items-center gap-2">Youtube <BsArrowUpRight /></h3>
                    <h3 className="font-aventa flex items-center gap-2">Facebook <BsArrowUpRight /></h3>
                </div>
            </div>
            <div>
                <h1 className="flex justify-center text-center font-ABeeZee mt-3">
                    &#169; 2022 Try Fit Fabrics
                </h1>
            </div>
            <div className="flex justify-center text-center mt-4 gap-2">
                <h1 className="text-white font-aventa text-sm ">
                     Designed & Managed By 
                </h1>
                <a href="https://www.bitstobug.com/" className=" font-Rogue pb-4">Bits To Bug</a>
            </div>
        </footer>
    )
}