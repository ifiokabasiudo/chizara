// import * as React from "react"

import { animate } from "animejs";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Image1 from "../../public/hero-image-1.png";
import Image2 from "../../public/hero-image-2.png";
import Image3 from "../../public/hero-image-3.png";

export function CarouselDemo() {
  const [currentImage, setCurrentImage] = useState<any>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroText = useRef<HTMLDivElement>(null);

  const images = [{ name: Image1 }, { name: Image2 }, { name: Image3 }];

  useEffect(() => {
    if (!heroText.current) return;

    const animationConfig = {
      translateY: [100, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 700,
    };

    const handleScroll = () => {
      const rect = heroText.current?.getBoundingClientRect();
      if (!rect) return;

      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        animate(heroText.current!, animationConfig);
        window.removeEventListener("scroll", handleScroll); // run once
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  // const images = [
  //     {image: hero1, alt: "Logo and woman talking to man"},
  // ];

  // .from({ length: 5 })

  return (
    <div className="w-full overflow-hidden">
      <div
        id="Hero"
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen flex flex-col justify-center items-center text-center px-8"
      >
        {/* {images.map((image, index) => ( */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: index === currentImageIndex ? 10 : 0 }} // ✅ FIX
          >
            <div className="relative w-full h-full">
              <Image
                src={image.name}
                alt={`Hero image ${index}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
