// "use client";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import logoSm from "../../public/logo-sm.png";

// const aboutItems = [
//   { name: "Practice Overview", link: "/about/practice-overview" },
//   { name: "Our Mission", link: "/about/our-mission" },
//   { name: "Our Approach", link: "/about/our-approach" },
//   // {name: "Who we serve", link: "/who-we-serve"},
//   // { name: "Leadership", link: "/about/leadership" },
//   // {name: "Our Values", link: "/our-values"},
// ];

// const serviceItems = [
//   { name: "Individual Counseling", link: "/services/individual-counseling" },
//   { name: "Child Therapy", link: "/services/child-therapy" },
//   { name: "Marital/Pre-Marital Counseling", link: "/services/marital-pre-marital-counseling" },
//   { name: "Couples Counseling", link: "/services/couples-counseling" },
//   { name: "Group Therapy (Seasonal)", link: "/services/group-therapy-seasonal" },
//   { name: "Teen Therapy", link: "/services/teen-therapy" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const aboutRef = useRef<HTMLDivElement | null>(null);
//   const servicesRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       const target = event.target as Node;

//       if (aboutRef.current && !aboutRef.current.contains(target)) {
//         setAboutOpen(false);
//       }

//       if (servicesRef.current && !servicesRef.current.contains(target)) {
//         setServicesOpen(false);
//       }
//     }

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <header className="bg-white w-full">
//       <div className="flex items-center justify-between px-6 md:px-24 py-6">
//         {/* LOGO */}
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 rounded-full bg-[#cfd6c8] flex items-center justify-center text-[#e8a693] font-bold">
//             <Image
//               src={logoSm}
//               alt="Chizara logo"
//               className="w-12 h-12 object-cover"
//             />
//           </div>
//         </div>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:flex justify-between w-[50%] text-gray-600 text-center">
//           <a href="/" className="border-b-2 border-transparent hover:border-black pb-1 w-1/3 hover:bg-gray-100 hover:cursor-pointer transition">
//             Home
//           </a>
//           <div ref={aboutRef} className="relative w-1/3">
//             <div
//               onClick={() => {
//                 setAboutOpen((prev) => !prev);
//                 setServicesOpen(false);
//               }}
//               className="border-b-2 border-transparent hover:border-black pb-1 hover:bg-gray-100 hover:cursor-pointer transition"
//             >
//               About Us
//             </div>
//             <div
//               className={`absolute top-full left-0 w-full z-30 bg-[#3f4a41] mt-2 opacity-0 transition-opacity ${
//                 aboutOpen ? "opacity-100" : "hidden"
//               }`}
//             >
//               {aboutItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.link}
//                   onClick={() => setAboutOpen(false)}
//                   className="block px-4 py-2 text-white hover:text-gray-300"
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//           <div ref={servicesRef} className="relative w-1/3">
//             <div
//               onClick={() => {
//                 setServicesOpen((prev) => !prev);
//                 setAboutOpen(false);
//               }}
//               className="border-b-2 border-transparent hover:border-black pb-1 hover:bg-gray-100 hover:cursor-pointer transition"
//             >
//               Services
//             </div>
//             <div
//               className={`absolute top-full left-0 w-full z-30 bg-[#3f4a41] mt-2 transition-opacity pointer-events-auto ${
//                 servicesOpen ? "opacity-100 visible" : "invisible opacity-0"
//               }`}
//             >
//               {serviceItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.link}
//                   onClick={() => setServicesOpen(false)}
//                   className="block px-4 py-2 text-white hover:text-gray-300 transition"
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </nav>

//         {/* DESKTOP BUTTON */}
//         <button className="hidden md:block border text-gray-600 border-gray-400 rounded-full px-8 py-2 hover:bg-gray-600 hover:text-white hover:cursor-pointer transition">
//           Contact
//         </button>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden flex flex-col gap-1 hover:cursor-pointer"
//         >
//           <span className="w-6 h-0.5 bg-black" />
//           <span className="w-6 h-0.5 bg-black" />
//           <span className="w-6 h-0.5 bg-black" />
//         </button>
//       </div>

//       {/* ✅ MOBILE MENU */}
//       {open && (
//         <div className="md:hidden bg-white border-t flex flex-col items-center gap-6 py-8 text-gray-700">
//           <a className="text-lg">Home</a>
//           <a className="text-lg">About Us</a>
//           <a className="text-lg">Services</a>

//           <button className="border text-gray-600 border-gray-400 rounded-full px-10 py-2 hover:bg-gray-600 hover:text-white transition">
//             Contact
//           </button>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logoSm from "../../public/logo-sm.png";
import { useRouter } from "next/navigation";

const aboutItems = [
  { name: "Practice Overview", link: "/about/practice-overview" },
  { name: "Our Mission", link: "/about/our-mission" },
  { name: "Our Approach", link: "/about/our-approach" },
];

const serviceItems = [
  { name: "Individual Counseling", link: "/services/individual-counseling" },
  // { name: "Child Therapy", link: "/services/child-therapy" },
  {
    name: "Marital/Pre-Marital Counseling",
    link: "/services/marital-pre-marital-counseling",
  },
  { name: "Couples Counseling", link: "/services/couples-counseling" },
  {
    name: "Group Therapy (Seasonal)",
    link: "/services/group-therapy-seasonal",
  },
  { name: "Adolescence Therapy (12+)", link: "/services/teen-therapy" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopAboutOpen, setDesktopAboutOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  // const [aboutOpen, setAboutOpen] = useState(false);
  // const [servicesOpen, setServicesOpen] = useState(false);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  // useEffect(() => {
  //   function handleClickOutside(e: MouseEvent) {
  //     const target = e.target as Node;
  //     if (aboutRef.current && !aboutRef.current.contains(target))
  //       setAboutOpen(false);
  //     if (servicesRef.current && !servicesRef.current.contains(target))
  //       setServicesOpen(false);
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;

      if (aboutRef.current && !aboutRef.current.contains(target)) {
        setDesktopAboutOpen(false);
      }

      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setDesktopServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 md:px-10 py-5 flex items-center justify-between">
        {/* LOGO */}
        <div onClick={() => router.push("/")} className="flex items-center gap-2 hover:cursor-pointer">
          <Image
            src={logoSm}
            alt="Chizara logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex w-[50%] text-gray-600 text-center">
          <a href="/" className="w-1/3 border-b-2 border-transparent hover:border-black pb-1 hover:bg-gray-100 hover:cursor-pointer transition">
            Home
          </a>

          {/* ABOUT */}
          <div ref={aboutRef} className="relative w-1/3 border-b-2 border-transparent hover:border-black pb-1 hover:bg-gray-100 hover:cursor-pointer transition">
            <button
              onClick={() => {
                setDesktopAboutOpen((prev) => !prev);
                setDesktopServicesOpen(false);
              }}
              className="hover:cursor-pointer"
            >
              About Us
            </button>

            {desktopAboutOpen && (
              <div className="absolute left-0 top-8 w-56 bg-[#3f4a41] rounded-md shadow-lg overflow-hidden z-50">
                {aboutItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="block px-4 py-3 text-white hover:bg-black/20 transition"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* SERVICES */}
          <div ref={servicesRef} className="relative w-1/3 border-b-2 border-transparent hover:border-black pb-1 hover:bg-gray-100 hover:cursor-pointer transition">
            <button
              onClick={() => {
                setDesktopServicesOpen((prev) => !prev);
                setDesktopAboutOpen(false);
              }}
              className="hover:cursor-pointer"
            >
              Services
            </button>

            {desktopServicesOpen && (
              <div className="absolute left-0 top-8 w-72 bg-[#3f4a41] rounded-md shadow-lg overflow-hidden z-50">
                {serviceItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="block px-4 py-3 text-white hover:bg-black/20 transition"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* DESKTOP CTA */}
        <a
          href="/schedule-form"
          className="hidden md:inline-flex border border-gray-400 text-gray-600 rounded-full px-6 py-2 hover:bg-gray-700 hover:text-white transition"
        >
          Contact
        </a>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden px-6 py-6 space-y-6 text-gray-700">
          <a href="/" className="block text-lg">
            Home
          </a>

          {/* MOBILE ABOUT */}
          <div>
            <button
              onClick={() =>
                // setAboutOpen(!aboutOpen)
                {
                  setMobileAboutOpen((prev) => !prev);
                  console.log(mobileAboutOpen);
                  setMobileServicesOpen(false);
                }
              }
              className="text-lg font-medium"
            >
              About Us
            </button>

            {mobileAboutOpen && (
              <div className="mt-3 space-y-3 pl-4">
                {aboutItems.map((item) => (
                  <a key={item.name} href={item.link} className="block">
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* MOBILE SERVICES */}
          <div>
            <button
              onClick={() => {
                // setServicesOpen(!servicesOpen)
                setMobileServicesOpen((prev) => !prev);
                setMobileAboutOpen(false);
              }}
              className="text-lg font-medium"
            >
              Services
            </button>

            {mobileServicesOpen && (
              <div className="mt-3 space-y-3 pl-4">
                {serviceItems.map((item) => (
                  <a key={item.name} href={item.link} className="block">
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/schedule-form"
            className="inline-block border border-gray-400 rounded-full px-8 py-2 hover:bg-gray-700 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
