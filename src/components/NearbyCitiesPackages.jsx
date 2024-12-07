// import './NearbyCitiesPackages.css'; // Assuming you have a CSS file for styles
import varanasiImage from "../assets/img/varanasi.png";
import vindhyachalImage from "../assets/img/vindhyachal.png";
import chitrakootImage from "../assets/img/chitrakoot.png";
import ayodhyaImage from "../assets/img/ayodhya.png";
import bhardwajImage from "../assets/img/Bhardwaj.png";
import badeHanumanImage from "../assets/img/BadeHanuman.png";
import mankameshwarImage from "../assets/img/Mankameshwar.png";
import shankarVImage from "../assets/img/ShankarV.png";
import logoImage from "../assets/img/logo.png";
import TrustedBy from "../components/TrustedBy";
import WhyChooseUs from "../components/WhyChooseUs";
import Aboutintro from "./Aboutintro";
import FoodPackages from "./FoodPackages";

const NearbyCitiesPackages = () => {
  return (
    <div className="w-full h-auto bg-[#F4F2E9] flex flex-col justify-center pb-12">
      <h1 className="text-[5vw] md:text-[2.8vw] text-center font-bold my-6 md:my-[60px]">
        Nearby Cities Packages
      </h1>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-2 w-full px-3 md:px-12">
        {/* Card 1 */}
        <div className="bg-white p-2 sm:p-4 rounded-xl md:rounded-2xl lg:rounded-3xl mx-auto max-w-[90%] md:max-w-[80%] drop-shadow-2xl hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <a href="#" className="block text-center">
            <div className="pb-2 sm:pb-6">
              <img
                className="w-full h-auto"
                src={varanasiImage}
                alt="Varanasi"
              />
            </div>
            <div className="text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4vw] md:leading-[2vw]">
              <h1>Prayagraj</h1>
              <h1>Varanasi</h1>
            </div>
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-[1vw] sm:p-4 rounded-xl md:rounded-2xl lg:rounded-3xl mx-auto max-w-[90%] md:max-w-[80%] drop-shadow-2xl hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <a href="#" className="block text-center">
            <div className="pb-2 sm:pb-6">
              <img
                className="w-full h-auto"
                src={vindhyachalImage}
                alt="Vindhyachal"
              />
            </div>
            <div className="text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4vw] md:leading-[2vw]">
              <h1>Prayagraj</h1>
              <h1>Vindhyachal</h1>
            </div>
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-2 sm:p-4 rounded-xl md:rounded-2xl lg:rounded-3xl mx-auto max-w-[90%] md:max-w-[80%] drop-shadow-2xl hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <a href="#" className="block text-center">
            <div className="pb-2 sm:pb-6">
              <img
                className="w-full h-auto"
                src={chitrakootImage}
                alt="Chitrakoot"
              />
            </div>
            <div className="text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4vw] md:leading-[2vw]">
              <h1>Prayagraj</h1>
              <h1>Chitrakoot</h1>
            </div>
          </a>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-2 sm:p-4 rounded-xl md:rounded-2xl lg:rounded-3xl mx-auto max-w-[90%] md:max-w-[80%] drop-shadow-2xl hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <a href="#" className="block text-center">
            <div className="pb-2 sm:pb-6">
              <img className="w-full h-auto" src={ayodhyaImage} alt="Ayodhya" />
            </div>
            <div className="text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4vw] md:leading-[2vw]">
              <h1>Prayagraj</h1>
              <h1>Ayodhya</h1>
            </div>
          </a>
        </div>
      </div>

      <h1 className="hover-effect bg-[#F88820] rounded-lg md:rounded-xl px-4 py-2 lg:px-5 w-fit mx-auto font-bold text-[4vw] md:text-[1.5vw] mt-10 md:mt-12">
        Customize
      </h1>
      <h1 className="text-center text-[3vw] md:text-[1.5vw] mt-2 md:mt-4">
        Your tour with us
      </h1>

      <div className="sm:flex sm:mx-auto text-center font-extrabold text-[2.25vw] mt-4 mb-2 sm:mt-12 sm:mb-6">
        <h1>Discover the Divine: </h1>
        <h1>Top Temples and Attractions in Prayagraj</h1>
      </div>

      {/* Temples */}
      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 p-4 w-full md:w-[90%] md:mx-auto md:rounded-2xl md:py-8 md:px-8 bg-content">
        <div className="absolute inset-0 bg-[#FF9933] opacity-50 rounded-2xl pointer-events-none"></div>

        <div className="relative text-center md:mx-8 mx-auto">
          <img src={bhardwajImage} alt="Maharshi Bharadwaj Park" />
          <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">
            Maharshi Bharadwaj
          </h1>
          <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">Park</h1>
          <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">
            (5 KM from Prayagraj
          </h1>
          <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">Junction)</h1>
        </div>

        <div className="relative text-center md:mx-8 mx-auto">
          <img src={badeHanumanImage} alt="Bade Hanuman" />
          <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">
            Bade Hanuman
          </h1>
          <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">Park</h1>
          <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">
            (5 KM from Prayagraj
          </h1>
          <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">Junction)</h1>
        </div>

        <div className="relative text-center md:mx-8 mx-auto">
          <img src={mankameshwarImage} alt="Mankameshwar" />
          <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">
            Mankameshwar
          </h1>
          <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">Park</h1>
          <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">
            (5 KM from Prayagraj
          </h1>
          <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">Junction)</h1>
        </div>

        <div className="relative text-center md:mx-8 mx-auto">
          <img src={shankarVImage} alt="Shankar V" />
          <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">Shankar V</h1>
          <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">Park</h1>
          <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">
            (5 KM from Prayagraj
          </h1>
          <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">Junction)</h1>
        </div>
      </div>

      <Aboutintro />
        <WhyChooseUs />
        <TrustedBy />
        <FoodPackages />

      {/* Map */}
      {/* Mobile View */}
      <div className="relative w-full h-[61vw] md:hidden  ">
        <h1
          className="Satellite text-center font-afacad font-semibold my-1 sm:text-[3vw] sm:font-bold"
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          Satellite Map
        </h1>
        <div id="satelliteMap" className="w-full h-full rounded-lg flex justify-center">
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230660.451881615!2d81.63677207349028!3d25.402482058430344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1733545956330!5m2!1sen!2sin"
              width="90%"
              height="auto"
              style={{ border: 0,
                borderRadius: "0.5rem",
               }}
              allowFullScreen
              loading="lazy"
            ></iframe>
        </div>
      </div>

      {/* Web View */}
      <div className="hidden md:flex md:px-14 lg:px-14">
        <div className="relative w-full md:w-[68vw] lg:w-[62vw] lg:m-4 md:my-4 md:h-[500px] h-auto">
          <div id="mainMap" className="w-full h-full rounded-3xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230660.451881615!2d81.63677207349028!3d25.402482058430344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1733545956330!5m2!1sen!2sin"
              width="900"
              height="500"
              style={{ border: 0,
                borderRadius: "1rem",
                boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.1)"
               }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="flex items-center h-[500px] pt-8 hidden md:block">
          <img className="" src={logoImage} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default NearbyCitiesPackages;
