import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Vertical from "./navVertical";


export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showNav,setShowNav] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <header className={`fixed top-0 left-5 right-5 z-50 flex items-center justify-between text-lg border border-solid border-white/15 rounded-[15px] text-white backdrop-blur-lg bg-white/10 transition-all duration-300 ${visible ? 'header-visible' : 'header-hidden'} ${visible ? 'top-6' : ''}`}>
      <div className="flex justify-start ml-6 sm:ml-9  sm:w-14 h-10 sm:h-14">
        <Link href={'/'}>
          <img  src="/images/logo.png" alt="logo" className="w-full h-full object-contain" />
        </Link>
      </div>
      <nav className="hidden ml-24 sm:flex md:gap-x-4 lg:gap-x-6 gap-x-4 text-sm sm:gap-x-9">
        <a href="/" className="text-white hover:text-gray-300">Home</a>
        <a href="/OurTeam" className="text-white hover:text-gray-300">About Us</a>
        <a href="/catalogue" className="text-white hover:text-gray-300">Catalogue</a>
        <a href="/location" className="text-white hover:text-gray-300">Location</a>
      </nav>

      <div className="flex justify-end mr-4 sm:mr-9">
        <a href="/Contact" className="hidden md:block items-center justify-center border-2 md:text-lg sm:text-xl border-btn_border rounded-lg xl:py-1 xl:px-4 sm:px-8 hover:border-green-500">
          Contact Us
        </a>
      </div>
      {/* <button onClick={() => setShowNav(true)} className="pr-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 xl:hidden md:hidden lg:hidden">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
      </button> */}
      {/* <Vertical show={showNav}/> */}
    </header>
  );
}
