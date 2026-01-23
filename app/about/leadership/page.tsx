import Image from "next/image";
import Woman from "../../../public/woman.jpg";
import Navbar from "../../components/navbar";
import ContactUs from "../../components/contact-us";
import CTA from "../../components/cta";

export default function Leadership() {
  return (
    <main className="font-[Playfair_Display] min-h-screen">
      <Navbar />
      <div className="w-full px-6 py-10 md:px-24">
        <h1 className="text-3xl font-bold text-[#5b5b5b] pb-10">Practice Leadership</h1>
      <div className="w-full flex flex-col md:flex-row items-center gap-6">
        <div className="w-1/3 flex justify-center">
          <Image
            src={Woman}
            alt="Leader"
            className="w-60 h-80 object-fit object-cover"
          />
        </div>
        <div className="w-2/3 flex flex-col gap-6 pr-30">
          <p className="font-bold text-xl">
            Chizara Therapeutic Services is led by [Her Full Name, Credentials],
            Founder and Lead Therapist.
          </p>
          <p>
            With professional training and experience in therapeutic care, she
            provides clinical direction and oversees the quality and integrity
            of services offered by the practice. Her work is guided by a strong
            commitment to ethical standards, ongoing professional development,
            and compassionate client care.
          </p>
          <p>
            Under her leadership, Chizara Therapeutic Services maintains a
            thoughtful, respectful approach focused on creating meaningful
            therapeutic outcomes for every client.
          </p>
          <p>
            (You can add credentials subtly here: LCSW, LCPC, etc., if
            applicable.)
          </p>
          <CTA />
        </div>
      </div>
      </div>
      <ContactUs />
    </main>
  );
}
