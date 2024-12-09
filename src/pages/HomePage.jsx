import React, { useEffect, useState } from "react";
import Hero1 from "../assets/img/Hero1.jpeg";
import Hero2 from "../assets/img/Hero2.jpeg";
import Hero3 from "../assets/img/Hero3.jpeg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImportantDates from "../components/ImportantDates";
import Logo from "../assets/img/logo.png";
import NearbyCitiesPackages from "../components/NearbyCitiesPackages";
import TourPackages from "../components/TourPackages";
import CustmoizeModel from "../components/CustmoizeModel";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Hero1, Hero2, Hero3];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTimeout(() => {
      handleOpen();
    }, 5000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div>
      <CustmoizeModel
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <Navbar />
      <div className="w-full h-[90vh] relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col">
          <h2 className="text-xl md:text-5xl font-bold tracking-[0.25em] leading-none">
            MAHAK
            <img
              src={Logo}
              alt="Logo"
              className="w-[5.5vw] h-[5.5vw] inline-block relative -top-[0.2vw] ml-[-0.5vw] mr-[0.1vw]"
            />
            MBH 2025
          </h2>

          <h3 className="text-sm md:text-3xl   leading-none text-black">
          Experience the Spirituality of Life Time
          with <b>
            prayagrajkumbhmela.com
            </b>
          </h3>
        </div>
        <img
          src={images[currentImageIndex]}
          alt={`Hero${currentImageIndex + 1}`}
          className="w-full h-full object-cover carousel-images"
        />
      </div>
      <ImportantDates />
      <TourPackages />
      <NearbyCitiesPackages />
      <Footer />
    </div>
  );
}
