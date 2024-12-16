import { useEffect, useState } from "react";
import Hero3 from "../assets/img/Hero3.jpeg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImportantDates from "../components/ImportantDates";
import Logo from "../assets/img/logo.png";
import NearbyCitiesPackages from "../components/NearbyCitiesPackages";
import TourPackages from "../components/TourPackages";
import CustmoizeModel from "../components/CustmoizeModel";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      handleOpen();
    }, 5000);
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          Prayagraj Kumbh Mela 2025 - Book Packages, Dates, and Tour Guide
        </title>
        <meta
          name="description"
          content="Plan your spiritual journey to Prayagraj Kumbh Mela 2025. Find tour packages, shahi snan dates, top attractions, accommodation, and travel tips for an unforgettable experience."
        />
        <meta
          name="keywords"
          content="Prayagraj Kumbh Mela 2025, Kumbh Mela 2025 tour packages, Kumbh Mela dates, Prayagraj accommodation, Shahi Snan dates 2025, Maha Kumbh Mela rituals, Kumbh Mela attractions, Prayagraj travel guide, Maha Kumbh Mela tourism"
        />
        <meta name="author" content="prayagrajkumbhmela.com" />
        <meta
          property="og:title"
          content="Prayagraj Kumbh Mela 2025 - Tour Packages, Dates, and Guide"
        />
        <meta
          property="og:description"
          content="Discover Prayagraj Kumbh Mela 2025 with exclusive tour packages, important bathing dates, and spiritual attractions. Explore the Maha Kumbh Mela and plan your perfect pilgrimage."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prayagrajkumbhmela.com" />
        <meta
          property="og:image"
          content="https://prayagrajkumbhmela.com/static/kumbh-mela-banner.jpg"
        />
        <link rel="canonical" href="https://prayagrajkumbhmela.com" />
      </Helmet>
      <CustmoizeModel
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <Navbar />
      <div className="w-full h-[90vh] relative">
        <div
          className="absolute top-1/4 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col
        w-full md:w-[60%]
        "
        >
          <h2 className="text-2xl md:text-6xl font-bold tracking-[0.25em] leading-none">
            MAHAK
            <img
              src={Logo}
              alt="Logo"
              className="w-[7.5vw] h-[7.5vw]  md:w-[5.5vw] md:h-[5.5vw] inline-block relative -top-[0.2vw] ml-[-0.5vw] mr-[0.1vw]"
            />
            MBH 2025
          </h2>

          <h3 className="text-base py-3 md:py-0 md:text-3xl   leading-none text-black">
            Experience the Spirituality of Life Time with{" "}
            <b>prayagrajkumbhmela.com</b>
          </h3>
          <div className="flex justify-center">
            <button
              className="bg-[#F88820] text-black text-sm md:text-2xl font-semibold py-2 px-3 md:py-3 md:px-6 mt-4 md:mt-6 rounded-full w-fit text-center md:hidden"
              onClick={() => navigate("/enquiry")}
            >
              ENQUIRE NOW
            </button>
          </div>
        </div>
        <img
          src={Hero3}
          alt={`Hero3`}
          className="w-full h-[70%]  md:h-[80%] lg:h-full object-cover carousel-images"
        />
      </div>
      <ImportantDates />
      <TourPackages />
      <NearbyCitiesPackages />
      <Footer />
    </div>
  );
}
