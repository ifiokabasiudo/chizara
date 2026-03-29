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
import CTA from "./components/cta";
import PricingPreview from "@/components/pricingPreview";

export default function Home() {
  const services = [
    {
      title: "Individual Counseling",
      link: "/services/individual-counseling",
      image: image1,
    },
    // { title: "Child Therapy", link: "/services/child-therapy", image: image2 },
    {
      title: "Marital/Pre-Marital Counseling",
      link: "/services/marital-pre-marital-counseling",
      image: image3,
    },
    {
      title: "Couples Counseling",
      link: "/services/couples-counseling",
      image: image4,
    },
    {
      title: "Group Therapy (Seasonal)",
      link: "/services/group-therapy-seasonal",
      image: image5,
    },
    { title: "Adolescence Therapy (12+)", link: "/services/teen-therapy", image: image6 },
    { title: "Supervision Services", link: "/services/supervision-services", image: image2 },
  ];

  return (
    <main className="font-[Playfair_Display] bg-[#f8f8f6]">
      {/* Top Banner */}
      <div className="bg-[#e8a693] text-white text-center py-2">
        Welcome to Chizara Theraputic Services - Your Path to Healing and Growth!
      </div>
      {/* <button onClick={() => alert("I was clicked!")} className="px-4 py-2 bg-red-600 m-2 text-white">Click me</button> */}

      <Navbar />

      <CarouselDemo />

      {/* Intro Text */}
      <section className="py-24 text-center px-6">
        <p className="text-2xl text-[#5b5b5b] max-w-3xl mx-auto mb-10">
          These are just a few of the many services we offer at Chizara
        </p>
        <a href="/schedule-form" className="bg-[#e8a693] text-white px-10 py-3 rounded-full hover:cursor-pointer">
          CONTACT US
        </a>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1  md:grid-cols-3 gap-24 max-w-6xl mx-auto text-center pb-32 px-6">
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
          <p className="text-lg text-gray-700 mb-10">
            Our practice provides comprehensive, client-centered support for
            emotional and relational wellbeing. We focus on early intervention,
            ongoing care, and personalized treatment to help individuals,
            couples, and families navigate life’s challenges. Through
            compassionate, evidence-based therapy, we support mental health,
            strengthen relationships, and promote long-term healing in a safe
            and confidential environment.
          </p>
          <CTA />
          {/* <a
            href="#"
            className="bg-[#3f4a41] text-white px-10 py-3 rounded-full text-sm"
          >
            Learn More
          </a> */}
        </div>
      </section>

      <PricingPreview />

      {/* Contact Section */}
      <ContactUs />
    </main>
  );
}
