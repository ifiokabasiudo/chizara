"use client";

import Image from "next/image";
import image1 from "../public/Group 1.png";
import image2 from "../public/Group 2.png";
import image3 from "../public/Group 3.png";
import image4 from "../public/Group 4.png";
import image5 from "../public/Group 5.png";
import image6 from "../public/Group 6.png";
import logoLg from "../public/logo.png";
import logoSm from "../public/logo-sm.png";
import { CarouselDemo } from "./components/carousel";

export default function Home() {
  const services = [
    { title: "Individual Counseling for Depression", link: "#", image: image1 },
    { title: "Child Therapy", link: "#", image: image2 },
    { title: "Pre-Marital Counseling", link: "#", image: image3 },
    { title: "Couples Counseling", link: "#", image: image4 },
    { title: "Individual Therapy for Anxiety", link: "#", image: image5 },
    { title: "Teen Therapy", link: "#", image: image6 },
  ];

  return (
    <main className="font-[Playfair_Display] bg-[#f8f8f6]">
      {/* Top Banner */}
      <div className="bg-[#e8a693] text-white text-center py-2 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </div>

      {/* Navbar */}
      <header className="flex items-center justify-between px-24 py-6 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#cfd6c8] flex items-center justify-center text-[#e8a693] font-bold">
            <Image
              src={logoSm}
              alt="Chizara logo"
              className="w-12 h-12"
              objectFit="cover"
              // fill
            />
          </div>
        </div>

        <nav className="flex justify-between w-[50%] text-gray-600 text-center">
          <a
            className="hover:border-b-2 hover:border-black pb-1 w-1/3 hover:bg-gray-100 transition-colors duration-300"
            href="#"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:border-b-2 hover:border-black pb-1 w-1/3 hover:bg-gray-100 transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:border-b-2 hover:border-black pb-1 w-1/3 hover:bg-gray-100 transition-colors duration-300"
          >
            Services
          </a>
        </nav>

        <button className="border text-gray-600 border-gray-400 rounded-full px-8 py-2 hover:cursor-pointer hover:bg-gray-600 hover:text-white transition-colors duration-300">
          Contact
        </button>
      </header>

      {/* Hero Section */}
      {/* <div className="relative w-full h-[500px] flex items-center overflow-hidden"> */}
      {/* <div className="absolute inset-0 bg-[#34453f]/80" /> */}
      {/* <div className="relative text-center text-white max-w-3xl">
          <div className="mx-auto mb-6 w-42 h-42 rounded-full border border-white flex items-center justify-center">
            <Image
              src={logoLg}
              alt="Chizara logo"
              className="w-32 h-32"
              objectFit="cover"
              // fill
            />
          </div>
          <h1 className="text-4xl tracking-wide mb-4">
            CHIZARA THERAPEUTIC
            <br />
            SERVICES
          </h1>
          <p className="text-sm opacity-80">
            Excepteur sint occaecat cupidatat non proident
          </p>
        </div>

        {/* Arrows */}
      {/* <div className="absolute left-8 text-white text-4xl">‹</div> */}
      {/* <div className="absolute right-8 text-white text-4xl">›</div> */}

      <CarouselDemo />
      {/* </div> */}

      {/* Intro Text */}
      <section className="py-24 text-center px-6">
        <p className="text-2xl text-[#5b5b5b] max-w-3xl mx-auto mb-10">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
        </p>
        <button className="bg-[#e8a693] text-white px-10 py-3 rounded-full hover:cursor-pointer">
          CONTACT OUR THERAPIST
        </button>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-24 max-w-6xl mx-auto text-center pb-32 px-6">
        {services.map((service, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="relative flex justify-center items-center mb-6 w-44 h-44">
              <div className="absolute top-0 left-0 w-full h-full rotate-30 bg-[#e8a693] rounded-3xl" />
              <div className="absolute top-0 left-0 z-10 w-full h-full bg-[#cfd6c8] rounded-3xl" />
              <Image
                src={service.image}
                alt={`Image of ${service.title}`}
                className="relative z-20 max-w-none w-55 h-55"
                objectFit="cover"
                // fill
              />
            </div>
            <h3 className="mb-4 text-gray-800">{service.title}</h3>
            <a
              href={service.link}
              className="bg-[#e8a693] text-white px-8 py-2 rounded-full text-sm"
            >
              Learn More
            </a>
          </div>
        ))}
      </section>

      {/* Primary Care Section */}
      <section className="border-t-3 border-b border-[#3f4a41] py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl text-[#3f4a41] mb-8">
            We Offer Primary Care For Mental And Relational Health.
          </h2>
          <a
            href="#"
            className="bg-[#3f4a41] text-white px-10 py-3 rounded-full text-sm"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#3f4a41] text-white py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl mb-6">Contact Us</h2>
            <p className="text-sm leading-7 opacity-80">
              Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit
              Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione
              Voluptatem Sequi Nesciunt. Neque Porro Quisquam Est, Qui Dolorem
              Ipsum Quia Dolor Sit Amet, Consectetur, Adipisci Velit, Sed Quia
              Non Numquam Eius Modi Tempora Incidunt Ut Labore Et Dolore Magnam
              Aliquam Quaerat Voluptatem.
            </p>

            <button className="mt-10 border border-white px-10 py-3 rounded-full hover:cursor-pointer">
              Get In Touch With Our Therapist
            </button>
          </div>

          <form className="space-y-8">
            <div>
              <label className="text-sm">Name (required)</label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <input
                  className="rounded-full px-5 py-3 border border-white text-black placeholder:text-white"
                  placeholder="First Name"
                />
                <input
                  className="rounded-full px-5 py-3 border border-white text-black placeholder:text-white"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <label className="text-sm">Email (required)</label>
              <input className="w-full mt-2 rounded-full px-5 py-3 border border-white text-black" />
            </div>

            <div>
              <label className="text-sm">
                What questions do you have for us? (required)
              </label>
              <textarea className="w-full mt-2 rounded-3xl px-5 py-4 border border-white text-black h-36"></textarea>
            </div>

            <button className="border border-white px-12 py-3 rounded-full hover:cursor-pointer">
              SEND
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3f4a41] text-white text-center py-6 text-xs">
        Copyright © 2025 Chizara Therapeutic Services. All Rights Reserved.
      </footer>
    </main>
  );
}
