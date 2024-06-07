import SubHead from "../Atoms/subhead";
import Paragraph from "../Atoms/paragraph";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0); // State for current slide index

  const bannerContainer = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const bannerImage = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { y: 200, opacity: 1 },
  };

  // Sample data for multiple banner images
  const bannerImages = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
    "/images/banner4.jpg",
  ];

  // Function to change slides
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + bannerImages.length) % bannerImages.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 1000 milliseconds (1 second)

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentSlide]); // Dependency on currentSlide to restart interval on slide change


  return (
    <div className="bg-primary-100">
      <div className="container mx-auto max-w-[1344px]">
        <div className="flex px-5 py-9 flex flex-col gap-8 sm:gap-10 md:gap-16 md:pb-0 lg:gap-20 lg:px-10 lg:pt-12 overflow-hidden">
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={bannerContainer}
            viewport={{ once: true }}
            className="text-center space-y-[18px] flex flex-col items-center"
          >
            <SubHead color="text-white" style="sm:w-4/5 md:w-9/12 lg:w-9/12">
              Temukan Gaya Anda
            </SubHead>
            {/* <Paragraph
              color="text-white/70"
              style="sm:w-11/12 md:w-9/12 lg:w-1/2"
            >
              Our customers enjoy complete freedom of doing business online by
              managing every aspect of their online store from their mobile and
              web devices.
            </Paragraph> */}
          </motion.section>
            {/* <Paragraph
              color="text-white/70"
              style="sm:w-11/12 md:w-9/12 lg:w-1/2"
            >
              Our customers enjoy complete freedom of doing business online by
              managing every aspect of their online store from their mobile and
              web devices.
            </Paragraph> */}

          <div className="w-full flex justify-center items-center">  
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={bannerImage}
              className="w-[263px] sm:w-[385px] md:w-[506px] lg:w-auto h-auto object-cover " 
              src={bannerImages[currentSlide]} // Show current banner image
              alt="banner"
            />

          
          </div> 
        </div>
      </div>
    </div>
  );
}
