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
import PoojaServices from "../components/PoojaServices";

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
content="Maha Kumbh,Asthi visarjan poojan in Prayag over Triveni Sangam, Pind daan pujan, Asthi Kalash immersion over Ganges. Teerth purohit over Sangam, multi-lingual priest avail
, what is a kumbh mela, what is kumbh mela,Kumbh Mela Pooja Booking, Rudra Abhishek, Shraadh, Narayan Bali, Pooja Services in Kumbh, Verified Priests, when is the next kumbh, mela,when is the next maha, kumbh mela, when is the next maha, kumbh mela 144 years, Kumbh, Tent City, Hotels, Kumbh Pilgrimage, kumbh mela, kumbh mela 2024, kumbh dates, kumbh fair,kumbh fair, upcoming kumbh mela , allahabad , kumbh mela , kumbh , kumbh mela celebration, kumbh mela 2025, Official Website of Maha Kumbh Mela 2025, Prayagraj, Uttar Pradesh, Sacred Pitcher, confluence (Sangam), Intangible cultural heritage of humanity, UNESCO, world’s largest peaceful gathering, Kumbh Mela Bathing Dates, Paush Purnima - 13 January 2025, MAKAR SANKRANTI - 14 January 2025 (First Shahi Snan), Mauni Amavasya - 29 January 2025 (Second Shahi Snan), Vasant Panchami - 3 February 2025 (Third Shahi Snan), Maghi Purnima - 12 February 2025, Mahashivaratri - 26 February 2025, Official Website of Maha Kumbh Mela 2025,Prayagraj Kumbh Mela 2025, Kumbh Mela 2025 tour packages, Kumbh Mela dates, Prayagraj accommodation, Shahi Snan dates 2025, Maha Kumbh Mela rituals, Kumbh Mela attractions, Prayagraj travel guide, Maha Kumbh Mela tourism  , Prayagraj Mela Pradhikaran, Upcoming Maha Kumbh Mela 2025, Maha Kumbh Tour Packages, Smart City Prayagraj, ICCC, Maha Kumbh Mela 2025, Prayagraj, Uttar Pradesh, Sacred Pitcher, confluence (Sangam), Intangible cultural heritage of humanity, UNESCO, world’s largest peaceful gathering, Kumbh Mela Bathing Dates, Paush Purnima - 13 January 2025, MAKAR SANKRANTI - 14 January 2025 (First Shahi Snan), Mauni Amavasya - 29 January 2025 (Second Shahi Snan), Vasant Panchami - 3 February 2025 (Third Shahi Snan), Maghi Purnima - 12 February 2025, Mahashivaratri - 26 February 2025, "
        />
        <meta name="msvalidate.01" content="5B88B7C20B107F8589B1074723B66E37" />
        <meta name="author" content="prayagrajkumbhmela.com" />
        <meta
          property="og:title"
          content="Prayagraj Kumbh Mela 2025 - Tour Packages, Dates, and Guide"
        />
        <meta name="robots" content="index, follow" />

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

      </Helmet>


      <CustmoizeModel
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <Navbar />
      <div className="w-full h-[90vh] relative">
        <div
          className="absolute top-[25%] md:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col
        w-full md:w-[60%]
        "
        >
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-[0.25em] leading-none">
            MAHAK
            <img
              src={Logo}
              alt="Prayagraj Kumbh Mela 2025"
              className="w-[7.5vw] h-[7.5vw]  md:w-[5.5vw] md:h-[5.5vw] inline-block relative -top-[0.2vw] ml-[-0.5vw] mr-[0.1vw]"
            />
            MBH 2025
          </h1>

          <span className="text-base py-3 md:py-0 md:text-4xl leading-6  md:mt-7 text-black">
            Experience the Spirituality of <h1 className="inline">Kumbh Mela</h1> with{" "}
            <h1 className="font-bold md:mt-2">prayagrajkumbhmela.com</h1>
          </span>
          <div className="flex justify-center">
            <button
              className="bg-[#F88820] text-black text-sm md:text-2xl font-semibold py-2 px-3 md:py-3 md:px-6 mt-4 md:mt-6 rounded-lg w-fit text-center md:hidden"
              onClick={() => navigate("/enquiry")}
            >
              ENQUIRE NOW
            </button>
          </div>
        </div>
        <img
          src={Hero3}
          alt={`Tour packages for Prayagraj Kumbh Mela 2025`}
          className="w-full h-[70%]  md:h-[80%] lg:h-full object-cover carousel-images"
        />
      </div>
      <ImportantDates />
      <TourPackages />
      <PoojaServices />
      <NearbyCitiesPackages />
      <Footer />
    </div>
  );
}
