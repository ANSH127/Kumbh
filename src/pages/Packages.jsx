import React from "react";
import PackageTop from "../assets/img/Packagetop.png";
import Navbar from "../components/Navbar";
import Hero3 from "../assets/img/Hero3.jpeg";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
export default function Packages() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-[10%] md:mt-[8%]  w-full">
        {/* Main Container */}
        <div className=" w-full md:w-[90%] md:rounded-3xl shadow-lg overflow-hidden">
          {/* Top Section with Background Image and Overlay Text */}
          <div className="relative h-48 md:h-64">
            {/* Background Image (Replace with actual image) */}
            <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
            {/* Overlay color for better readability */}
            <img
              src={PackageTop}
              alt="Background"
              className="w-full h-full object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-[5vw] font-bold tracking-wide">
                MAHAK<span className="text-yellow-400 font-bold">U</span>MBH
                &nbsp;&nbsp;PACKAGES
              </h1>
              <p className="text-[2vw] font-medium mt-2">
                All inclusive tour Packages!!
              </p>
            </div>
          </div>

          {/* Bottom Section with Dates and Buttons */}
          <div className="bg-[#F88820] p-4 md:p-6  text-center flex flex-row justify-around  space-y-0 font-serif">
            {/* Event Card 1 */}
            <div className="space-y-2 text-black">
              <h2 className="text-[2.5vw] font-semibold">Paush Poornima</h2>
              <p className="text-[1.5vw]">13th January 2025</p>
            </div>

            {/* Event Card 2 */}
            <div className="space-y-2 text-black">
              <h2 className="text-[2.5vw] font-semibold">Makar Sankranti</h2>
              <p className="text-[1.5vw]">14th January 2025</p>
            </div>

            {/* Event Card 3 */}
            <div className="space-y-2 text-black">
              <h2 className="text-[2.5vw] font-semibold">Mauni Amavasya</h2>
              <p className="text-[1.5vw]">29th January 2025</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-0 mt-10">
          {/* Card Template */}
          
          <div className="flex flex-col relative overflow-hidden">
            <img src={Hero3} alt="" className="rounded-t-2xl w-auto h-[140px] md:h-auto " />
            <div className="bg-orange-400 rounded-b-2xl pb-4">
              <div className="bg-[#F4F2E9] p-1 text-center -mt-8 mx-4 rounded-2xl shadow-lg z-10 relative font-serif">
                <h3 className="text-xs md:text-base font-semibold">
                  Non-Shahi Snan Kumbh Mela
                </h3>
                <p className="text-xs md:text-sm text-gray-600">2N/3D Tour Package</p>
              </div>
              
              <div className="text-center pb-3">

              <p className=" text-xl md:text-3xl font-extrabold text-center h-5 text-black my-4">
                ₹31,999
              </p>
              <del className="text-sm md:text-lg font-semibold text-black text-center">₹35,999</del>
              </div>
              <div className="flex justify-evenly gap-2">
               
                  <button className="bg-white px-1 mx-2 text-xs py-1 md:text-base text-black font-semibold md:px-3 md:py-2 rounded-lg shadow hover:bg-gray-200 hover:shadow-md transition duration-300"

                  >
                    Details →
                  </button>
               
                  <button className="bg-white px-1 mx-2  text-xs py-1 md:text-base text-black font-semibold md:px-3 md:py-2 rounded-lg shadow hover:bg-gray-200 hover:shadow-md transition duration-300"

                  onClick={() => navigate("/packages/1")}
                  >
                    Enquire Now →
                  </button>
                
              </div>
            </div>
          </div>

          <div className="flex flex-col relative overflow-hidden">
            <img src={Hero3} alt="" className="rounded-t-2xl w-auto h-[140px] md:h-auto " />
            <div className="bg-orange-400 rounded-b-2xl pb-4">
              <div className="bg-[#F4F2E9] p-1 text-center -mt-8 mx-4 rounded-2xl shadow-lg z-10 relative font-serif">
                <h3 className="text-xs md:text-base font-semibold">
                  Non-Shahi Snan Kumbh Mela
                </h3>
                <p className="text-xs md:text-sm text-gray-600">2N/3D Tour Package</p>
              </div>
              
              <div className="text-center pb-3">

              <p className=" text-xl md:text-3xl font-extrabold text-center h-5 text-black my-4">
                ₹31,999
              </p>
              <del className="text-sm md:text-lg font-semibold text-black text-center">₹35,999</del>
              </div>
              <div className="flex justify-evenly gap-2">
               
                  <button className="bg-white px-1 mx-2 text-xs py-1 md:text-base text-black font-semibold md:px-3 md:py-2 rounded-lg shadow hover:bg-gray-200 hover:shadow-md transition duration-300"

                  >
                    Details →
                  </button>
               
                  <button className="bg-white px-1 mx-2  text-xs py-1 md:text-base text-black font-semibold md:px-3 md:py-2 rounded-lg shadow hover:bg-gray-200 hover:shadow-md transition duration-300"

                  onClick={() => navigate("/packages/1")}
                  >
                    Enquire Now →
                  </button>
                
              </div>
            </div>
          </div>
          <div className="flex flex-col relative overflow-hidden">
            <img src={Hero3} alt="" className="rounded-t-2xl w-auto h-[140px] md:h-auto " />
            <div className="bg-orange-400 rounded-b-2xl pb-4">
              <div className="bg-[#F4F2E9] p-1 text-center -mt-8 mx-4 rounded-2xl shadow-lg z-10 relative font-serif">
                <h3 className="text-xs md:text-base font-semibold">
                  Non-Shahi Snan Kumbh Mela
                </h3>
                <p className="text-xs md:text-sm text-gray-600">2N/3D Tour Package</p>
              </div>
              
              <div className="text-center pb-3">

              <p className=" text-xl md:text-3xl font-extrabold text-center h-5 text-black my-4">
                ₹31,999
              </p>
              <del className="text-sm md:text-lg font-semibold text-black text-center">₹35,999</del>
              </div>
              <div className="flex justify-evenly gap-2">
               
                  <button className="bg-white px-1 mx-2 text-xs py-1 md:text-base text-black font-semibold md:px-3 md:py-2 rounded-lg shadow hover:bg-gray-200 hover:shadow-md transition duration-300"

                  >
                    Details →
                  </button>
               
                  <button className="bg-white px-1 mx-2  text-xs py-1 md:text-base text-black font-semibold md:px-3 md:py-2 rounded-lg shadow hover:bg-gray-200 hover:shadow-md transition duration-300"

                  onClick={() => navigate("/packages/1")}
                  >
                    Enquire Now →
                  </button>
                
              </div>
            </div>
          </div>

          
        </div>
        <div 
            className=" w-11/12   rounded-2xl mx-auto m-4  bg-[#FDAB57] flex flex-col justify-center  h-14"
        >
            <h1
                className="text-[5vw] md:text-[2.8vw] text-center font-bold my-6 md:my-[60px]"
            >
            Nearby Cities Packages
            </h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
