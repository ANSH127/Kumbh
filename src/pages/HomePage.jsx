import Hero1 from "../assets/img/Hero1.jpeg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImportantDates from "../components/ImportantDates";
import Logo from "../assets/img/logo.png";
import NearbyCitiesPackages from "../components/NearbyCitiesPackages";
import TourPackages from "../components/TourPackages";

export default function HomePage() {
  return (
    <div>
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
        <img src={Hero1} alt="Hero1" className="w-full h-full object-cover" />
      </div>
      <ImportantDates />
      <TourPackages />
      <NearbyCitiesPackages />
      

      <Footer />
    </div>
  );
}
