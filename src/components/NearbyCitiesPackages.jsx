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
import {  builder,client } from "../api/SanityClient";
import React from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Loadar from "./Loadar";
import HotelRating from "../assets/img/hotelrating.png";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

import { useQuery } from "@tanstack/react-query";

const NearbyCitiesPackages = () => {
  const navigate = useNavigate();
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
  };
  const handleDetailsClick = (item) => {
    navigate(`/packages/${item._id}`, { state: { packageData: item } });
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["tourpackage"],
    queryFn: async () => {
      const data = await client.fetch(`*[_type == 'tourpackage']`);
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (error) {
    console.log(error);
  }






//   return (
//     <div className="w-full h-auto bg-[#F4F2E9] flex flex-col justify-center pb-12">
//       <h1 className="text-[5vw] md:text-[2.8vw] text-center font-bold my-6 md:my-4 ">
//         Nearby Cities Packages
//       </h1>

//       {isLoading ? (
//         <Loadar />
//       ) : (
//         <div className="relative w-full px-3 md:px-12">
//           <ChevronLeftIcon
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
//             size={30}
//             onClick={scrollLeft}
//             style={{ fontSize: "2rem" }}
//           />
//           <div
//             ref={scrollRef}
//             className="flex overflow-x-auto space-x-4 scrollbar-hide"
//             style={{
//               // hide scrollbar
//               scrollbarWidth: "none",
//             }}
//           >
//             {data
//               .filter((item) => item.category === "city")
//               .map((item) => (
//                 <div
//                   key={item._id}
//                   className="bg-none shadow-lg mx-auto cursor-pointer  rounded-xl  min-w-[350px] h-fit "
//                 >
//                   <img
//                     className="w-full h-auto  max-w-[350px] max-h-[200px] shadow-none rounded-t-xl"
//                     src={builder.image(item.image).url()}
//                     alt="Prime Hotels"
//                   />
//                   <div className="text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4vw] md:leading-[2vw] px-3 my-2">
//                     <Stack direction="row" spacing={1}>
//                       <Chip label="Trending" color="primary" size="small" />
//                       <Chip label="Prime Hotels" color="primary" size="small" />
//                       <Rating
//                         name="half-rating-read"
//                         value={4.5}
//                         precision={0.5}
//                         readOnly
//                       />
//                     </Stack>
//                     <h1 className="font-bold h-6 mt-1">{item.name}</h1>
//                     <p className="text-sm mt-2 font-bold">
//                       {item.duration} | Private Cab | Guide Support
//                     </p>

//                     <div className="flex justify-between mt-4 pb-4 px-4">
//                       <div>
//                         <img src={HotelRating} alt="Hotel Rating" />
//                       </div>

//                       <div>
//                         <p className="text-2xl mt-2 font-bold">
//                           ₹{item.discountedPrice}/-
//                         </p>
//                         <del
//                           className="pl-1
//                       text-lg
//                     "
//                         >
//                           ₹{item.price}/-
//                         </del>
//                       </div>
//                     </div>
//                     <div className="flex justify-between  pb-2 px-4">
//                       <button
//                         className="bg-[#F88820] text-black rounded-lg p-2 text-sm"
//                         onClick={() => handleDetailsClick(item)}
//                       >
//                         Details→
//                       </button>
//                       <button
//                         className="bg-[#F88820] text-black rounded-lg p-2 text-sm"
//                         onClick={() => navigate("/enquiry")}
//                       >
//                         Enquire Now→
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//           <ChevronRightIcon
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
//             size={30}
//             onClick={scrollRight}
//             style={{ fontSize: "2rem" }}
//           />
//         </div>
//       )}

//       <h1
//         className="hover-effect bg-[#F88820] rounded-lg md:rounded-xl px-4 py-2 lg:px-5 w-fit mx-auto font-bold text-[4vw] md:text-[1.5vw] mt-10 md:mt-12
//       cursor-pointer transition duration-300 hover:bg-[#F88820] hover:text-white
//       "
//         onClick={() => navigate("/enquiry")}
//       >
//         Customize
//       </h1>
//       <h1 className="text-center text-[3vw] md:text-[1.5vw] mt-2 md:mt-4">
//         Your tour with us
//       </h1>

//       <div className="sm:flex sm:mx-auto text-center font-extrabold text-[2.25vw] mt-4 mb-2 sm:mt-12 sm:mb-6">
//         <h1>Discover the Divine: </h1>
//         <h1>Top Temples and Attractions in Prayagraj</h1>
//       </div>

    //   {/* Temples */}
    //   <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 p-4 w-full md:w-[90%] md:mx-auto md:rounded-2xl md:py-8 md:px-8 bg-content">
    //     <div className="absolute inset-0 bg-[#FF9933] opacity-50 rounded-2xl pointer-events-none"></div>

    //     <div className="relative text-center md:mx-8 mx-auto">
    //       <img src={bhardwajImage} alt="Maharshi Bharadwaj Park" />
    //       <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">
    //         Maharshi Bharadwaj
    //       </h1>
    //       <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">Park</h1>
    //       <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">
    //         (5 KM from Prayagraj
    //       </h1>
    //       <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">Junction)</h1>
    //     </div>

    //     <div className="relative text-center md:mx-8 mx-auto">
    //       <img src={badeHanumanImage} alt="Bade Hanuman" />
    //       <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">
    //         Bade Hanuman
    //       </h1>
    //       <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">Park</h1>
    //       <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">
    //         (5 KM from Prayagraj
    //       </h1>
    //       <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">Junction)</h1>
    //     </div>

    //     <div className="relative text-center md:mx-8 mx-auto">
    //       <img src={mankameshwarImage} alt="Mankameshwar" />
    //       <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">
    //         Mankameshwar
    //       </h1>
    //       <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">Park</h1>
    //       <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">
    //         (5 KM from Prayagraj
    //       </h1>
    //       <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">Junction)</h1>
    //     </div>

    //     <div className="relative text-center md:mx-8 mx-auto">
    //       <img src={shankarVImage} alt="Shankar V" />
    //       <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">Shankar V</h1>
    //       <h1 className="text-[3vw] sm:text-[1.5vw] font-medium">Park</h1>
    //       <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">
    //         (5 KM from Prayagraj
    //       </h1>
    //       <h1 className="text-[2.2vw] sm:text-[1.1vw] mt-1">Junction)</h1>
    //     </div>
    //   </div>

    //   <Aboutintro />
    //   <WhyChooseUs />
    //   <TrustedBy />
    //   <FoodPackages />

    //   {/* Map */}
    //   {/* Mobile View */}
    //   <div className="relative w-full h-[61vw] md:hidden  ">
    //     <h1
    //       className="Satellite text-center font-afacad font-semibold my-1 sm:text-[3vw] sm:font-bold"
    //       style={{ fontFamily: "Afacad, sans-serif" }}
    //     >
    //       Satellite Map
    //     </h1>
    //     <div
    //       id="satelliteMap"
    //       className="w-full h-full rounded-lg flex justify-center"
    //     >
    //       <iframe
    //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230660.451881615!2d81.63677207349028!3d25.402482058430344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1733545956330!5m2!1sen!2sin"
    //         width="90%"
    //         height="auto"
    //         style={{ border: 0, borderRadius: "0.5rem" }}
    //         allowFullScreen
    //         loading="lazy"
    //       ></iframe>
    //     </div>
    //   </div>

    //   {/* Web View */}
    //   <div className="hidden md:flex md:px-14 lg:px-14">
    //     <div className="relative w-full md:w-[68vw] lg:w-[62vw] lg:m-4 md:my-4 md:h-[500px] h-auto">
    //       <div id="mainMap" className="w-full h-full rounded-3xl">
    //         <iframe
    //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230660.451881615!2d81.63677207349028!3d25.402482058430344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1733545956330!5m2!1sen!2sin"
    //           width="900"
    //           height="500"
    //           style={{
    //             border: 0,
    //             borderRadius: "1rem",
    //             boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.1)",
    //           }}
    //           allowFullScreen
    //           loading="lazy"
    //         ></iframe>
    //       </div>
    //     </div>
    //     <div className="flex items-center h-[500px] pt-8 hidden md:block">
    //       <img className="" src={logoImage} alt="Logo" />
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default NearbyCitiesPackages;

// bg-[#F4F2E9]


return (
    <div className="w-full h-auto  flex flex-col justify-center pb-12 mt-6 md:mt-2">
      <header>
        <h2 className="text-[5vw] bg-[#F49330] py-2 md:text-[2.8vw] text-center font-bold mb-4 md:my-6">
          Nearby Cities Packages
        </h2>
      </header>
  
      {isLoading ? (
        <Loadar />
      ) : (
        <section className="relative w-full px-3 md:px-12">
          <button
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
            onClick={scrollLeft}
          >
            <ChevronLeftIcon size={30} style={{ fontSize: "2rem" }} />
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {data
              .filter((item) => item.category === "city")
              .map((item) => (
                <article
                  key={item._id}
                  className="bg-none shadow-lg mx-auto cursor-pointer rounded-xl min-w-[350px] h-fit"
                >
                  <img
                    className="w-full h-auto max-w-[350px] max-h-[200px] shadow-none rounded-t-xl"
                    src={builder.image(item.image).url()}
                    alt={`Image of ${item.name}`}
                  />
                  <div className="text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4vw] md:leading-[2vw] px-3 my-2">
                    <Stack direction="row" spacing={1}>
                      <Chip label="Trending" color="primary" size="small" />
                      <Chip label="Prime Hotels" color="primary" size="small" />
                      <Rating
                        name="half-rating-read"
                        value={4.5}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                    <h2 className="font-bold h-6 mt-1">{item.name}</h2>
                    <p className="text-sm mt-2 font-bold">
                      {item.duration} | Private Cab | Guide Support
                    </p>
                    <div className="flex justify-between mt-4 pb-4 px-4">
                      <img src={HotelRating} alt="Prayagraj kumbh mela 2025" />
                      <div>
                        <p className="text-2xl mt-2 font-bold">
                          ₹{item.discountedPrice}/-
                        </p>
                        <del className="pl-1 text-lg">₹{item.price}/-</del>
                      </div>
                    </div>
                    <div className="flex justify-between pb-2 px-4">
                      <button
                        className="bg-[#F49330] shadow-xl text-black rounded-lg p-2 text-sm"
                        onClick={() => handleDetailsClick(item)}
                      >
                        Details →
                      </button>
                      <button
                        className="bg-[#F49330] shadow-xl text-black rounded-lg p-2 text-sm"
                        onClick={() => navigate("/enquiry")}
                      >
                        Enquire Now →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>
          <button
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
            onClick={scrollRight}
          >
            <ChevronRightIcon size={30} style={{ fontSize: "2rem" }} />
          </button>
        </section>
      )}
  
      <section className="text-center">
        <button
          className="hover-effect bg-[#F49330] shadow-xl rounded-lg md:rounded-xl px-4 py-2 lg:px-5 w-fit mx-auto font-bold text-[4vw] md:text-[1.5vw] mt-8 md:mt-8 cursor-pointer transition duration-300 hover:bg-[#F88820] hover:text-white"
          onClick={() => navigate("/enquiry")}
          aria-label="Customize your tour"
        >
          Customize
        </button>
        <p className="text-center text-[5vw] md:text-[1.5vw] mt-2 md:mt-0">
          Your tour with us
        </p>
      </section>
  
      <section className="sm:flex sm:mx-auto text-center font-extrabold text-[4vw] sm:text-[2.25vw] mt-6 mb-2 sm:mt-12 sm:mb-6">
        <p>Discover the Divine:</p>
        <p>Top Temples and Attractions in Prayagraj</p>
      </section>

      {/* Temples */}
<section className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 p-4 w-full md:w-[90%] md:mx-auto md:rounded-2xl md:py-8 md:px-8 bg-content" aria-labelledby="temples-heading">
  <div className="absolute inset-0 bg-[#FF9933] opacity-50 md:rounded-2xl pointer-events-none"></div>
  <h1 id="temples-heading" className="sr-only">Temples in Prayagraj</h1>

  {[
    { img: bhardwajImage, title: "Maharshi Bharadwaj", subtitle: "Ashram", distance:"5" },
    { img: badeHanumanImage, title: "Bade Hanuman", subtitle: "Mandir", distance:"6.5" },
    { img: mankameshwarImage, title: "Mankameshwar", subtitle: "Mandir", distance:"6" },
    { img: shankarVImage, title: "Shankar Viman Mandapam", subtitle: "Mandir", distance:"6" },
  ].map((temple, index) => (
    <article key={index} className="relative text-center md:mx-8 mx-auto">
      <img src={temple.img} alt={temple.title} />
      <h2 className="text-[3vw] sm:text-[1.3vw] font-semibold mt-2">{temple.title}</h2>
      <h3 className="text-[3vw] sm:text-[1.3vw] font-medium">{temple.subtitle}</h3>
      <p className="text-[2.5vw] sm:text-[1.1vw] mt-1 font-medium sm:font-normal">({temple.distance} KM from Prayagraj Junction)</p>
    </article>
  ))}

  {/* <div className="z-20 bg-[#F49330] p-2 rounded-xl font-bold shadow-xl w-fit text-black"> <a href="http://">Know More &rarr;</a></div> */}

  
</section>

<Aboutintro />
<WhyChooseUs />
<TrustedBy />
<FoodPackages />

{/* Map Section */}
<section className="relative" aria-labelledby="map-heading">
  {/* Mobile View */}
  <div className="w-full h-[61vw] md:hidden">
    <h2 id="map-heading" className="Satellite text-center font-afacad font-semibold my-1 sm:text-[3vw] sm:font-bold" style={{ fontFamily: "Afacad, sans-serif" }}>
      Satellite Map
    </h2>
    <div id="satelliteMap" className="w-full h-full rounded-lg flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230660.451881615!2d81.63677207349028!3d25.402482058430344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1733545956330!5m2!1sen!2sin"
        width="90%"
        height="auto"
        title="Satellite Map of Prayagraj"
        style={{ border: 0, borderRadius: "0.5rem" }}
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
          title="Main Map of Prayagraj"
          style={{
            border: 0,
            borderRadius: "1rem",
            boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.1)",
          }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div className="flex items-center h-[500px] pt-8 hidden md:block">
      <img className="" src={logoImage} alt="Prayagraj kumbh mela 2025" />
    </div>
  </div>
</section>
</div>
  );
};
    export default NearbyCitiesPackages;
  