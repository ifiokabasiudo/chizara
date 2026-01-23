"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logoSm from "../../public/logo-sm.png";

const aboutItems = [
  { name: "Practice Overview", link: "/about/practice-overview" },
  { name: "Our Mission", link: "/about/our-mission" },
  { name: "Our Approach", link: "/about/our-approach" },
  // {name: "Who we serve", link: "/who-we-serve"},
  { name: "Leadership", link: "/about/leadership" },
  // {name: "Our Values", link: "/our-values"},
];

const serviceItems = [
  { name: "Individual Counseling for Depression", link: "/services/individual-counseling-for-depression" },
  { name: "Child Therapy", link: "/services/child-therapy" },
  { name: "Pre-Marital Counseling", link: "/services/pre-marital-counseling" },
  { name: "Couples Counseling", link: "/services/couples-counseling" },
  { name: "Individual Therapy for Anxiety", link: "/services/individual-therapy-for-anxiety" },
  { name: "Teen Therapy", link: "/services/teen-therapy" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (aboutRef.current && !aboutRef.current.contains(target)) {
        setAboutOpen(false);
      }

      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white w-full">
      <div className="flex items-center justify-between px-6 md:px-24 py-6">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#cfd6c8] flex items-center justify-center text-[#e8a693] font-bold">
            <Image
              src={logoSm}
              alt="Chizara logo"
              className="w-12 h-12 object-cover"
            />
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex justify-between w-[50%] text-gray-600 text-center">
          <a className="border-b-2 border-transparent hover:border-black pb-1 w-1/3 hover:bg-gray-100 hover:cursor-pointer transition">
            Home
          </a>
          <div ref={aboutRef} className="relative w-1/3">
            <div
              onClick={() => {
                setAboutOpen((prev) => !prev);
                setServicesOpen(false);
              }}
              className="border-b-2 border-transparent hover:border-black pb-1 hover:bg-gray-100 hover:cursor-pointer transition"
            >
              About Us
            </div>
            <div
              className={`absolute top-full left-0 w-full z-30 bg-[#3f4a41] mt-2 opacity-0 transition-opacity ${
                aboutOpen ? "opacity-100" : "hidden"
              }`}
            >
              {aboutItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  onClick={() => setAboutOpen(false)}
                  className="block px-4 py-2 text-white hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div ref={servicesRef} className="relative w-1/3">
            <div
              onClick={() => {
                setServicesOpen((prev) => !prev);
                setAboutOpen(false);
              }}
              className="border-b-2 border-transparent hover:border-black pb-1 hover:bg-gray-100 hover:cursor-pointer transition"
            >
              Services
            </div>
            <div
              className={`absolute top-full left-0 w-full z-30 bg-[#3f4a41] mt-2 transition-opacity pointer-events-auto ${
                servicesOpen ? "opacity-100 visible" : "invisible opacity-0"
              }`}
            >
              {serviceItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 text-white hover:text-gray-300 transition"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* DESKTOP BUTTON */}
        <button className="hidden md:block border text-gray-600 border-gray-400 rounded-full px-8 py-2 hover:bg-gray-600 hover:text-white hover:cursor-pointer transition">
          Contact
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 hover:cursor-pointer"
        >
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
        </button>
      </div>

      {/* ✅ MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t flex flex-col items-center gap-6 py-8 text-gray-700">
          <a className="text-lg">Home</a>
          <a className="text-lg">About Us</a>
          <a className="text-lg">Services</a>

          <button className="border text-gray-600 border-gray-400 rounded-full px-10 py-2 hover:bg-gray-600 hover:text-white transition">
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
