"use client";

import Image from "next/image";
import image1 from "../public/Group 1.png";
import image2 from "../public/Group 2.png";
import image3 from "../public/Group 3.png";
import image4 from "../public/Group 4.png";
import image5 from "../public/Group 5.png";
import image6 from "../public/Group 6.png";
import Navbar from "./components/navbar";
import { CarouselDemo } from "./components/carousel";
import ContactUs from "./components/contact-us";

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

      <Navbar />

      <CarouselDemo />

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
      <ContactUs />
    </main>
  );
}
