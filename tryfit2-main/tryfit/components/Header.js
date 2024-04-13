import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header
      className={`fixed sm:min-h-20  top-0 left-10 right-10 z-50 sm:flex-row flex-col flex items-center justify-between text-lg border border-solid border-white/15 rounded-[25px] text-white backdrop-blur-lg bg-white/10 transition-all duration-300 ease-in ${
        visible ? "header-visible" : "header-hidden"
      } ${visible ? "top-6" : ""}`}
    >
      <div className="flex justify-between items-center px-5 sm:px-0 sm:ml-9 w-full sm:w-14 h-10 sm:h-14">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="logo"
            className=" h-full w-10 sm:w-full aspect-square  object-contain"
          />
        </Link>
        {/* hamburger */}
        <div
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden ml-4"
        >
          {!navbarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>

      {navbarOpen && (
        <>
          <nav className="sm:hidden flex flex-col items-center gap-4 text-sm">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/OurTeam" className="text-white hover:text-gray-300">
              About Us
            </Link>
            <Link href="/catalogue" className="text-white hover:text-gray-300">
              Catalogue
            </Link>
            <Link href="/location" className="text-white hover:text-gray-300">
              Location
            </Link>
          </nav>

          <div className="sm:hidden py-2 flex justify-center">
            <Link
              href="/Contact"
              className="flex items-center px-2 justify-center border-2 md:text-lg sm:text-xl border-btn_border rounded-lg xl:py-1 xl:px-4 sm:px-8 hover:border-green-500"
            >
              Contact Us
            </Link>
          </div>

          <div className="py-2"></div>
        </>
      )}

      <nav className="hidden xl:ml-24 sm:flex md:gap-x-4 lg:gap-x-6 gap-x-4 text-sm sm:gap-x-9">
        <Link href="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link href="/OurTeam" className="text-white hover:text-gray-300">
          About Us
        </Link>
        <Link href="/catalogue" className="text-white hover:text-gray-300">
          Catalogue
        </Link>
        <Link href="/location" className="text-white hover:text-gray-300">
          Location
        </Link>
      </nav>

      <div className="sm:flex hidden justify-end mr-4 sm:mr-9">
        <Link
          href="/Contact"
          className="flex items-center justify-center border-2 md:text-lg sm:text-xl border-btn_border rounded-lg xl:py-1 xl:px-4 sm:px-8 hover:border-green-500"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
