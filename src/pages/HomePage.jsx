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
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";


export default function HomePage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTimeout(() => {
      handleOpen();
    }, 5000);
  },[]);

  return (
    <div>
      <CustmoizeModel open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <Navbar />
      <div className="w-full h-[90vh] relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-row">
          <h2 className="text-[5.5vw] md:text-[4.5vw] font-bold tracking-[0.25em] leading-none">
            MAHAK
            <img
              src={Logo}
              alt="Logo"
              className="w-[5.5vw] h-[5.5vw] inline-block relative -top-[0.2vw] ml-[-0.5vw] mr-[0.1vw]"
            />
            MBH 2025
          </h2>
        </div>
        {/* <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          interval={3000}
        >
          
            <img src={Hero1} alt="Hero1" className="w-full h-[64%] object-cover" />
          
            <img src={Hero2} alt="Hero2" className="w-full h-[64%] object-cover" />
          
            <img src={Hero3} alt="Hero3" className="w-full h-[64%] object-cover" />
          
        </Carousel> */}
        <img src={Hero1} alt="Hero1" className="w-full h-full object-cover" />
      </div>
      <ImportantDates />
      <TourPackages />
      <NearbyCitiesPackages />
      

      <Footer />
    </div>
  );
}
