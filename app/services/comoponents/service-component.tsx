import Image from "next/image";
import Navbar from "@/app/components/navbar";
import ContactUs from "@/app/components/contact-us";
import CTA from "@/app/components/cta";

export default function ServiceComponent({
  title,
  image,
  content,
  extra,
}: {
  title: string;
  image: any;
  content: React.ReactNode;
  extra?: React.ReactNode;
}) {
  return (
    <main className="font-[Playfair_Display] min-h-screen">
      <Navbar />
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full h-[70vh]">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
          <h1 className="absolute top-5 left-5 md:top-20 md:left-30 text-4xl md:text-5xl w-[50%] font-bold text-white px-4 py-2 z-30">
            {title}
          </h1>
        </div>

        <div className="w-full px-6 md:px-24 mb-16">
          <div className="my-10 w-full md:w-2/3 text-xl tracking-[0.05rem] leading-8">
            {content}
            {extra}
          </div>
          {title != "Supervision services" ? (
            <CTA />
          ) : (
            <a
              href="/supervision-form"
              className="px-6 py-3 rounded-full bg-[#3f4a41] text-white w-fit text-lg hover:cursor-pointer"
            >
              Request Supervision
            </a>
          )}
        </div>
      </div>
      <ContactUs />
    </main>
  );
}
