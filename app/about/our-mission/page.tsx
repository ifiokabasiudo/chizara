import Navbar from "../../components/navbar";
import ContactUs from "../../components/contact-us";
import CTA from "../../components/cta";

export default function OurMission() {
  return (
    <main className="font-[Playfair_Display] min-h-screen">
      <Navbar />
      <div className="py-5 px-6 md:px-24">
        <h1 className="text-3xl font-bold pt-10 text-[#5b5b5b]">Our Mission</h1>
        <div className="flex w-full my-10 gap-10">
          <div className="flex flex-col gap-6 md:w-2/3">
            <div className="flex flex-col gap-4">
              <p>
                Our mission is to provide a safe, supportive, and empowering
                space where individuals can explore their experiences, develop
                resilience, and achieve meaningful personal growth.
              </p>
              <p>
                At Chizara Therapeutic Services, we are committed to
                compassionate care that honors each client’s unique story. We
                strive to reduce emotional distress, strengthen
                self-understanding, and support lasting positive change through
                ethical, evidence-based therapeutic practices.
              </p>
            </div>
            <CTA />
          </div>
        </div>
      </div>
      <ContactUs />
    </main>
  );
}
