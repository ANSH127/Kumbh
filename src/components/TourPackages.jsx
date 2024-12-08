import { useRef } from "react";

import T1 from "../assets/img/t1.png";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function TourPackages() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full h-auto bg-[#F4F2E9] flex flex-col justify-center pb-12">
      <h1 className="text-[5vw] md:text-[2.8vw] text-center font-bold my-6 md:my-[60px]">
        Prayagraj MahaKumbh Tour Packages
      </h1>

      <div className="relative w-full px-3 md:px-12">
        <ChevronLeftIcon
          className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
          size={30}
          onClick={scrollLeft}
        />
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide"
          style={{
            // hide scrollbar
            scrollbarWidth: "none",
          }}
        >
          {/* Card 1 */}
          <div className="bg-none shadow-lg mx-auto cursor-pointer  min-w-[350px] ">
            <img
              className="w-full h-auto shadow-none"
              src={T1}
              alt="Prime Hotels"
            />
            <div className="text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4vw] md:leading-[2vw] px-3">
              <Stack direction="row" spacing={1}>
                <Chip label="Trending" color="primary" size="small" />
                <Chip label="Prime Hotels" color="primary" size="small" />
                <Rating name="read-only" value={2} readOnly />
              </Stack>
              <h1 className="font-bold">3 Days 2 N Prayagraj</h1>
              <p className="text-sm mt-2 font-bold">
                3 Days 2 Night | Private Cab | Guide Support
              </p>
              <p className="text-2xl mt-2 font-bold">₹23,999/-</p>
              <div className="flex justify-between mt-4 pb-4 px-4">
                <button className="bg-[#F88820] text-black rounded-lg p-2 text-sm">
                  Details→
                </button>
                <button className="bg-[#F88820] text-black rounded-lg p-2 text-sm">
                  Enquire Now→
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="bg-none shadow-lg mx-auto cursor-pointer  min-w-[350px] ">
            <img
              className="w-full h-auto shadow-none"
              src={T1}
              alt="Prime Hotels"
            />
            <div className="text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4vw] md:leading-[2vw] px-3">
              <Stack direction="row" spacing={1}>
                <Chip label="Trending" color="primary" size="small" />
                <Chip label="Prime Hotels" color="primary" size="small" />
                <Rating name="read-only" value={2} readOnly />
              </Stack>
              <h1 className="font-bold">3 Days 2 N Prayagraj</h1>
              <p className="text-sm mt-2 font-bold">
                3 Days 2 Night | Private Cab | Guide Support
              </p>
              <p className="text-2xl mt-2 font-bold ">

                  ₹19,999/-
              <del className="pl-1
                text-xl
              ">₹23,999/-</del>
                </p>
              <div className="flex justify-between mt-4 pb-4 px-4">
                <button className="bg-[#F88820] text-black rounded-lg p-2 text-sm">
                  Details→
                </button>
                <button className="bg-[#F88820] text-black rounded-lg p-2 text-sm">
                  Enquire Now→
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="bg-none shadow-lg mx-auto cursor-pointer  min-w-[350px] ">
            <img
              className="w-full h-auto shadow-none"
              src={T1}
              alt="Prime Hotels"
            />
            <div className="text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4vw] md:leading-[2vw] px-3">
              <Stack direction="row" spacing={1}>
                <Chip label="Trending" color="primary" size="small" />
                <Chip label="Prime Hotels" color="primary" size="small" />
                <Rating name="read-only" value={2} readOnly />
              </Stack>
              <h1 className="font-bold">3 Days 2 N Prayagraj</h1>
              <p className="text-sm mt-2 font-bold">
                3 Days 2 Night | Private Cab | Guide Support
              </p>
              <p className="text-2xl mt-2 font-bold">₹23,999/-</p>
              <div className="flex justify-between mt-4 pb-4 px-4">
                <button className="bg-[#F88820] text-black rounded-lg p-2 text-sm">
                  Details→
                </button>
                <button className="bg-[#F88820] text-black rounded-lg p-2 text-sm">
                  Enquire Now→
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="bg-none shadow-lg mx-auto cursor-pointer  min-w-[350px] ">
            <img
              className="w-full h-auto shadow-none"
              src={T1}
              alt="Prime Hotels"
            />
            <div className="text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4vw] md:leading-[2vw] px-3">
              <Stack direction="row" spacing={1}>
                <Chip label="Trending" color="primary" size="small" />
                <Chip label="Prime Hotels" color="primary" size="small" />
                <Rating name="read-only" value={2} readOnly />
              </Stack>
              <h1 className="font-bold">3 Days 2 N Prayagraj</h1>
              <p className="text-sm mt-2 font-bold">
                3 Days 2 Night | Private Cab | Guide Support
              </p>
              <p className="text-2xl mt-2 font-bold">₹23,999/-</p>
              <div className="flex justify-between mt-4 pb-4 px-4">
                <button className="bg-[#F88820] text-black rounded-lg p-2 text-sm">
                  Details→
                </button>
                <button className="bg-[#F88820] text-black rounded-lg p-2 text-sm">
                  Enquire Now→
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="bg-none shadow-lg mx-auto cursor-pointer  min-w-[350px] ">
            <img
              className="w-full h-auto shadow-none"
              src={T1}
              alt="Prime Hotels"
            />
            <div className="text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4vw] md:leading-[2vw] px-3">
              <Stack direction="row" spacing={1}>
                <Chip label="Trending" color="primary" size="small" />
                <Chip label="Prime Hotels" color="primary" size="small" />
                <Rating name="read-only" value={2} readOnly />
              </Stack>
              <h1 className="font-bold">3 Days 2 N Prayagraj</h1>
              <p className="text-sm mt-2 font-bold">
                3 Days 2 Night | Private Cab | Guide Support
              </p>
              <p className="text-2xl mt-2 font-bold">₹23,999/-</p>
              <div className="flex justify-between mt-4 pb-4 px-4">
                <button className="bg-[#F88820] text-black rounded-lg p-2 text-sm">
                  Details→
                </button>
                <button className="bg-[#F88820] text-black rounded-lg p-2 text-sm">
                  Enquire Now→
                </button>
              </div>
            </div>
          </div>
        </div>
        <ChevronRightIcon
          className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
          size={30}
          onClick={scrollRight}
        />
      </div>

      <h1 className="hover-effect bg-[#F88820] rounded-lg md:rounded-xl px-4 py-2 lg:px-5 w-fit mx-auto font-bold text-[4vw] md:text-[1.5vw] mt-10 md:mt-12">
        Explore All Packages
      </h1>
    </div>
  );
}
