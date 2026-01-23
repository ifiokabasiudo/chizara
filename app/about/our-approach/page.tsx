import ContactUs from "../../components/contact-us";
import Navbar from "../../components/navbar";
import CTA from "../../components/cta";
import Image from "next/image";
import OurApproachImage from "../../../public/our-approach.jpg"

export default function OurApproach() {
  return (
    <main className="font-[Playfair_Display] min-h-screen">
      <Navbar />
      <div className="w-full flex px-6 md:px-24 py-10 pb-20 gap-10 flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-2/3 gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-[#5b5b5b]">
            Our Therapeutic Approach
          </h1>
          <p>
            Our approach to therapy is grounded in evidence-based methods and a
            deep respect for the client’s lived experience. We believe that
            effective therapy is collaborative, intentional, and tailored to
            each individual’s needs.
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-bold text-[#5b5b5b]">
            Elements of our Approach
          </h1>
          <ul className="list-disc list-inside flex flex-col gap-2 mt-4">
            <li>Client-centered and trauma-informed care</li>
            <li>Evidence-based therapeutic techniques</li>
            <li>A supportive, non-judgmental environment</li>
            <li>Emphasis on emotional safety and confidentiality</li>
          </ul>
        </div>
        <p className="mb-5">
          Therapy sessions are designed to be both structured and flexible,
          allowing space for reflection, insight, and growth while moving at a
          pace that feels right for the client.
        </p>
        <CTA />
      </div>
      <div className="w-full md:w-1/3">
        <Image
          src={OurApproachImage}
          alt="Our Approach"
          className="w-full h-full object-cover"
        />
      </div>
      </div>
      <ContactUs />
    </main>
  );
}
