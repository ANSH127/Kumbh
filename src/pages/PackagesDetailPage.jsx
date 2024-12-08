import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import PackageTop from "../assets/img/Packagetop.png";
import Hero1 from "../assets/img/Hero1.jpeg";
import Footer from "../components/Footer";
import EnquiryModel from "../components/EnquiryModel";
import { Button } from "@mui/material";

export default function PackagesDetailPage() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {

    // i want to run 1 time handle open function after 5 seconds
    setTimeout(() => {
      handleOpen();
    }, 5000);
  }, []);

  return (
    <div>
      <Navbar />
      <EnquiryModel   open={open} handleClose={handleClose} handleOpen={handleOpen} />
    
      <div className="flex justify-center items-center mt-[10%] md:mt-[8%]  w-full">
        {/* Main Container */}
        <div className="w-[90%] rounded-3xl shadow-lg overflow-hidden">
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
      <div
        className="mt-[2%] text-left ml-[10%] md:ml-[6%] flex md:flex-row flex-col"
        style={{ fontFamily: "andika" }}
      >
        <h1 className="text-[4.5vw] md:text-[3vw] font-bold">
          Non-Shahi Snan Kumbh Mela
        </h1>
        <div className="flex md:ml-2 md:mt-4">
          <span className="text-[3vw] md:text-[2vw] font-semibold">
            2N/3D Tour Package
            <span className="bg-orange-400 text-lg rounded-3xl text-black h-fit px-2 ml-1 mb-1">
              Land Only
            </span>
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-8 mt-[5%] md:mt-[3%] gap-2 relative md:pr-12 pb-8">
        {/* detail section grid */}
        <div className="grid md:col-span-5 w-full  h-screen overflow-y-auto"
        
        >
          <div className="w-full  relative ">
            <div className="w-auto max-h-[80vh] h-[68vh] relative md:ml-[8%] ">
              <img
                src={Hero1}
                alt="Package"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className=" md:ml-[8%] mt-[3%] ">
              <div className="flex flex-wrap justify-center md:justify-around gap-3 md:gap-2 mx-auto">
                <button className="bg-orange-400 rounded-full text-black font-semibold w-auto md:w-auto px-4 py-2 shadow-md active:text-white focus:outline-none hover:ring hover:ring-blue-500">
                  OverView
                </button>
                <button className="rounded-full text-black font-semibold w-auto md:w-auto px-4 py-2 active:bg-orange-400 active:text-white focus:outline-none hover:ring hover:ring-blue-500">
                  Day wise Itinerary
                </button>
                <button className="rounded-full text-black font-semibold w-auto md:w-auto px-4 py-2 active:bg-orange-400 active:text-white focus:outline-none hover:ring hover:ring-blue-500">
                  Residential Details
                </button>
                <button className="rounded-full text-black font-semibold w-auto md:w-auto px-4 py-2 active:bg-orange-400 active:text-white focus:outline-none hover:ring hover:ring-blue-500">
                  Inclusion/Exclusion
                </button>
                <button className="rounded-full text-black font-semibold w-auto md:w-auto px-4 py-2 active:bg-orange-400 active:text-white focus:outline-none hover:ring hover:ring-blue-500">
                  Additional Info
                </button>
              </div>
              {/* OverView */}
              <div className="mt-8 bg-[#F4F2E9] shadow-xl rounded-2xl py-4">
                <div className="flex h-fit">
                  <div className="bg-orange-400 w-2 h-8"></div>
                  <h3 className="text-xl font-bold text-left ml-2">
                    Package Overview
                  </h3>
                </div>
                <p className="text-black text-left p-4">
                  Experience 4 Nights and 6 Days in Prayagraj with three daily
                  meals, guided sightseeing, and visits to all famous
                  attractions, including the sacred Sangam and historic temples.
                  This package offers a rich, immersive journey through
                  Prayagraj’s cultural and spiritual landmarks, creating
                  meaningful memories for every visitor.
                </p>
              </div>

              {/* Residential Details */}
              <div className="mt-8 bg-[#F4F2E9] shadow-xl rounded-2xl py-4">
                <div className="flex h-fit">
                  <div className="bg-orange-400 w-2 h-8"></div>
                  <h3 className="text-xl font-bold text-left ml-2">
                    Residential Details
                  </h3>
                </div>
                <div></div>
              </div>

              <div className="mt-8 bg-[#F4F2E9] shadow-xl rounded-2xl py-4">
                <div className="flex h-fit">
                  <div className="bg-orange-400 w-2 h-8"></div>
                  <h3 className="text-xl font-bold text-left ml-2">
                    Day Wise Itinerary
                  </h3>
                </div>
                <div>
                  <div className="p-6 rounded-3xl mx-auto">
                    {/* Itinerary List */}
                    <div className="space-y-6">
                      {/* Day 1 */}
                      <div className="flex items-start space-x-4">
                        {/* Day Circle */}
                        <div className="flex flex-col items-center">
                          <div className="bg-[#F49330] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                            Day 1
                          </div>
                          {/* Line Connecting Circles */}
                          <div className="h-full border-l-2 border-gray-300"></div>
                        </div>
                        {/* Content Box */}
                        <div className="flex-1 rounded-xl shadow-md overflow-hidden text-left">
                          <h3 className="font-bold bg-[#CDE6FE] p-2">Day 1</h3>
                          <p className="text-gray-700 p-4">
                            Description of activities for Day 1 goes here.
                          </p>
                        </div>
                      </div>

                      {/* Day 2 */}
                      <div className="flex items-start space-x-4 text-left">
                        <div className="flex flex-col items-center">
                          <div className="bg-[#F49330] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                            Day 2
                          </div>
                          <div className="h-full border-l-2 border-gray-300"></div>
                        </div>
                        <div className="flex-1 rounded-xl shadow-md overflow-hidden">
                          <h3 className="font-bold bg-[#CDE6FE] p-2">Day 2</h3>
                          <p className="text-gray-700 p-4">
                            Description of activities for Day 2 goes here.
                          </p>
                        </div>
                      </div>

                      {/* Day 3 */}
                      <div className="flex items-start space-x-4 text-left">
                        <div className="flex flex-col items-center">
                          <div className="bg-[#F49330] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                            Day 3
                          </div>
                          <div className="h-full border-l-2 border-gray-300"></div>
                        </div>
                        <div className="flex-1 rounded-xl shadow-md overflow-hidden">
                          <h3 className="font-bold bg-[#CDE6FE] p-2">Day 3</h3>
                          <p className="text-gray-700 p-4">
                            Description of activities for Day 3 goes here.
                          </p>
                        </div>
                      </div>

                      {/* Day 4 */}
                      <div className="flex items-start space-x-4 text-left">
                        <div className="flex flex-col items-center">
                          <div className="bg-[#F49330] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                            Day 4
                          </div>
                          <div className="h-full border-l-2 border-gray-300"></div>
                        </div>
                        <div className="flex-1 rounded-xl shadow-md overflow-hidden">
                          <h3 className="font-bold bg-[#CDE6FE] p-2">Day 4</h3>
                          <p className="text-gray-700 p-4">
                            Description of activities for Day 4 goes here.
                          </p>
                        </div>
                      </div>

                      {/* Day 5 */}
                      <div className="flex items-start space-x-4 text-left">
                        <div className="flex flex-col items-center">
                          <div className="bg-[#F49330] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                            Day 5
                          </div>
                        </div>
                        <div className="flex-1 rounded-xl shadow-md overflow-hidden">
                          <h3 className="font-bold bg-[#CDE6FE] p-2">Day 5</h3>
                          <p className="text-gray-700 p-4">
                            Description of activities for Day 5 goes here.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F4F2E9] flex justify-center text-left rounded-3xl mt-8">
                <div className="w-full max-w-4xl space-y-6">
                  {/* Inclusions and Exclusions Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Inclusions */}
                    <div className="bg-[#F4F2E9] shadow-md rounded-lg p-6">
                      <h3 className="font-bold text-lg border-l-4 border-orange-500 pl-2 mb-4">
                        Inclusions
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Accommodation in 4-star hotels.</li>
                        <li>Daily breakfast and dinner.</li>
                        <li>All local transportation.</li>
                        <li>Guided sightseeing tours.</li>
                        <li>Complimentary welcome drinks.</li>
                      </ul>
                    </div>

                    {/* Exclusion */}
                    <div className="bg-[#F4F2E9] shadow-md rounded-lg p-6">
                      <h3 className="font-bold text-lg border-l-4 border-orange-500 pl-2 mb-4">
                        Exclusion
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Airfare and visa charges.</li>
                        <li>Personal expenses (e.g., laundry, tips).</li>
                        <li>Travel insurance.</li>
                        <li>Anything not mentioned in inclusions.</li>
                        <li>Optional adventure activities.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Terms and Conditions Section */}
                  <div className="bg-[#F4F2E9] shadow-md rounded-lg p-6">
                    <h3 className="font-bold text-lg border-l-4 border-orange-500 pl-2 mb-4">
                      T&C
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Booking confirmation is subject to availability.</li>
                      <li>Cancellation charges apply as per policy.</li>
                      <li>Rates may vary based on seasonality.</li>
                      <li>
                        Travel insurance is mandatory for international trips.
                      </li>
                      <li>All disputes are subject to local jurisdiction.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Price Section  grid*/}

        <div className="grid md:col-span-3 mr-[6%] ml-[6%] md:mr-[13%] md:ml-[8%] pr-16 ">
          <div className="w-full flex flex-col gap-6">
            {/* Price Section */}
            <div className="rounded-3xl shadow-md text-center overflow-hidden">
              <div className="p-6 bg-[#CDE6FE] text-left font-serif font-sans">
                <h3 className="text-2xl font-semibold">Starting From</h3>
                <p className="text-4xl font-bold text-black">
                  ₹31,999{" "}
                  <span className="text-lg font-medium text-gray-600">
                    Per Person
                  </span>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  No Cost EMI starts from ₹1999{" "}
                  <a href="#" className="text-blue-600 underline">
                    see option
                  </a>
                </p>
              </div>
              <div className="pt-4 space-y-2 bg-[#F4F2E9] px-[20%] py-4">
                <a href="https://rzp.io/rzp/h3D5eXxJ">
                  <button className="bg-[#F88820] text-white font-semibold w-full py-3 rounded-2xl my-2 shadow hover:text-black active:text-white focus:outline-none hover:ring hover:ring-blue-500">
                    BOOK NOW
                  </button>
                </a>
                <a href="Enquiry.html">
                  <button className="bg-gray-300 text-gray-700 font-semibold w-full py-3 rounded-2xl shadow hover:bg-gray-400 active:text-white focus:outline-none hover:ring hover:ring-blue-500">
                    CUSTOMIZE
                  </button>
                </a>
              </div>
            </div>

            <div className="rounded-3xl shadow-md overflow-hidden relative">
              {/* Header Section */}
              <div className="flex flex-col items-start space-y-2 bg-[#CDE6FE] p-6 text-lg font-bold">
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-calendar-days"></i>
                  <span>Duration: 5 Night & 6 Days</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <p className="text-left">Places to visit:</p>
                    <p className="text-left">Whole MahaKumbh Mela Kshetra</p>
                  </div>
                </div>
              </div>

              {/* Package Includes Label */}
              <div className="flex justify-center mt-[-4%]">
                <span className="bg-gray-100 text-gray-700 px-6 rounded-full font-semibold text-base shadow-lg">
                  Package Includes
                </span>
              </div>

              {/* Icons Section */}
              <div className="flex justify-around bg-[#F4F2E9] p-6">
                <div className="flex flex-col items-center">
                  <i className="fa-solid fa-hotel fa-3x"></i>
                  <p className="text-lg font-light">Hotel</p>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fa-solid fa-binoculars fa-3x"></i>
                  <p className="text-lg font-light">Sightseeing</p>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fa-solid fa-bus fa-3x"></i>
                  <p className="text-lg font-light">Transport</p>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fa-solid fa-utensils fa-3x"></i>
                  <p className="text-lg font-light">Meal</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-[#CDE6FE] py-4 rounded-3xl grid grid-cols-6 px-[10%]">
              <div className="grid col-span-2 w-fit my-auto">
                <i className="fa-solid fa-headset fa-5x"></i>
              </div>
              <div className="grid col-span-4 text-left gap-1">
                <p className="text-3xl font-bold">Need Help?</p>
                <p className="text-sm">
                  Call us:{" "}
                  <a
                    href="tel:+919118963299"
                    className="text-blue-600 underline"
                  >
                    +91 9118963299
                  </a>
                </p>
                <p className="text-sm">
                  Mail us:{" "}
                  <a
                    href="mailto:info@kumbhmela.com"
                    className="text-blue-600 underline"
                  >
                    info@kumbhmela.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
