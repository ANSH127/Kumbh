// import './NearbyCitiesPackages.css'; // Assuming you have a CSS file for styles

import bhardwajImage from "../assets/img/Bhardwaj.png";
import badeHanumanImage from "../assets/img/BadeHanuman.png";
import mankameshwarImage from "../assets/img/Mankameshwar.png";
import shankarVImage from "../assets/img/ShankarV.png";
import logoImage from "../assets/img/logo.png";
import TrustedBy from "../components/TrustedBy";
import WhyChooseUs from "../components/WhyChooseUs";
import Aboutintro from "./Aboutintro";
import FoodPackages from "./FoodPackages";
import { useNavigate } from "react-router-dom";
import { client, builder } from "../api/SanityClient";
import React from "react";


import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Loadar from "./Loadar";
import HotelRating from "../assets/img/hotelrating.png";


import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
const NearbyCitiesPackages = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
  };

  const fetchPackages = async () => {
    const data = await client.fetch(
      `*[_type == 'tourpackage'  && category == 'city']`
    );
    // console.log(data);
    setData(data);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchPackages();
  }, []);
  return (
    <div className="w-full h-auto bg-[#F4F2E9] flex flex-col justify-center pb-12">
      <h1 className="text-[5vw] md:text-[2.8vw] text-center font-bold my-6 md:my-4 ">
        Nearby Cities Packages
      </h1>

      {
        loading ? <Loadar /> :
        <div className="relative w-full px-3 md:px-12">
        <ChevronLeftIcon
          className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
          size={30}
          onClick={scrollLeft}
          style={{fontSize: "2rem"}}

        />
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide"
          style={{
            // hide scrollbar
            scrollbarWidth: "none",
          }}
        >

          {data.map((item) => (
            <div
              key={item._id}
              className="bg-none shadow-lg mx-auto cursor-pointer  rounded-xl  min-w-[350px] h-fit "
            >
              <img
                className="w-full h-auto  max-w-[350px] max-h-[200px] shadow-none rounded-t-xl"
                src={builder.image(item.image).url()}
                alt="Prime Hotels"
              />
              <div className="text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4vw] md:leading-[2vw] px-3 my-2">
                <Stack direction="row" spacing={1}>
                  <Chip label="Trending" color="primary" size="small" />
                  <Chip label="Prime Hotels" color="primary" size="small" />
                  <Rating name="half-rating-read" value={4.5} precision={0.5} readOnly />
                </Stack>
                <h1 className="font-bold h-6 mt-1">{item.name}</h1>
                <p className="text-sm mt-2 font-bold">
                  {item.duration} | Private Cab | Guide Support

                </p>
          

                <div className="flex justify-between mt-4 pb-4 px-4">

                  <div>
                    <img src={HotelRating} alt="Hotel Rating" />
                    </div>


                  <div>
                    <p className="text-2xl mt-2 font-bold">
                      ₹{item.discountedPrice}/-
                      </p>
                      <del
                        className="pl-1
                      text-lg
                    "
                      >
                        ₹{item.price}/-
                      </del>
                  </div>
                </div>
                <div className="flex justify-between  pb-2 px-4">
                  <button className="bg-[#F88820] text-black rounded-lg p-2 text-sm"
                    onClick={() => navigate(`/packages/${item._id}`)}
                  >
                    Details→
                  </button>
                  <button className="bg-[#F88820] text-black rounded-lg p-2 text-sm"
                    onClick={() => navigate("/enquiry")}
                  >
                    Enquire Now→
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ChevronRightIcon
          className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
          size={30}
          onClick={scrollRight}
          style={{fontSize: "2rem"}}

        />
      </div>}

      <h1 className="hover-effect bg-[#F88820] rounded-lg md:rounded-xl px-4 py-2 lg:px-5 w-fit mx-auto font-bold text-[4vw] md:text-[1.5vw] mt-10 md:mt-12
      cursor-pointer transition duration-300 hover:bg-[#F88820] hover:text-white
      "
      onClick={() => navigate("/enquiry")}
      >
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
