import Navbar from "../../components/navbar";
import ContactUs from "../../components/contact-us";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import CTA from "../../components/cta";

export default function PracticeOverview() {
  return (
    <main className="font-[Playfair_Display] min-h-screen">
      <Navbar />
      <div className="w-full px-6 py-10 md:px-24">        
        <div className="flex flex-col md:flex-row w-full my-10 gap-10">
          <div className="md:w-1/3 flex items-center justify-center md:hidden">
            <Image
              src={Logo}
              alt="Chizara Logo"
              className="w-48 h-48 object-contain"
            />
          </div>
          <div className="flex flex-col gap-6 md:w-2/3">
            <h1 className="text-3xl font-bold text-[#5b5b5b]">About Chizara Therapeutic Services</h1>
            <div className="flex flex-col gap-4">
                <p>
              Chizara Therapeutic Services is a client-centered mental health
              practice providing compassionate, confidential therapy through
              secure remote sessions. Based in Maryland and serving clients
              virtually, our practice is dedicated to supporting emotional
              wellbeing, personal growth, and long-term healing.
            </p>
            <p>
              We believe therapy should be accessible, respectful, and tailored
              to the individual. Our services are designed to meet clients where
              they are—emotionally, mentally, and geographically—while
              maintaining the highest standards of professional care.
            </p>
            <p>
              
              Through a supportive and collaborative therapeutic process, we
              help clients navigate life’s challenges and build healthier, more
              fulfilling lives.
            </p>
            </div>
            <CTA />
          </div>
          <div className="hidden w-1/3 md:flex items-center justify-center">
            <Image
              src={Logo}
              alt="Chizara Logo"
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>
      </div>

      <ContactUs />
    </main>
  );
}
