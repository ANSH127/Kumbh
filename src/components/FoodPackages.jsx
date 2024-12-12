import React, { useRef } from "react";
import varanasiImage from "../assets/img/varanasi.png";
import vindhyachalImage from "../assets/img/vindhyachal.png";
import chitrakootImage from "../assets/img/chitrakoot.png";
import ayodhyaImage from "../assets/img/ayodhya.png";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { client, builder } from "../api/SanityClient";
export default function FoodPackages() {
  const [popularFoodSpots, setPopularFoodSpots] = React.useState([]);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const fetchPopularFoodSpots = async () => {
    const data = await client.fetch(`*[_type == 'foodspot']`);
    setPopularFoodSpots(data);
    console.log(data);
  };

  React.useEffect(() => {
    fetchPopularFoodSpots();
  }, []);

  return (
    <div className="w-full h-auto bg-[#F4F2E9] flex flex-col justify-center pb-12 relative">
      <h1 className="text-[5vw] md:text-[2.8vw] text-center font-bold my-6 md:my-[60px]">
        Popular Food Spots
      </h1>
      <div className="flex items-center">
        <button onClick={scrollLeft} className="p-2">
          <ChevronLeftIcon size={24} />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 w-full px-3 md:px-12 scrollbar-hide pb-4"
          style={{
            // hide scrollbar
            scrollbarWidth: "none",
          }}
        >
          {popularFoodSpots.map((foodSpot) => (
            <div
              key={foodSpot._id}
              className="bg-white p-2 sm:p-4 rounded-xl md:rounded-2xl lg:rounded-3xl mx-auto min-w-[50%] md:min-w-[25%] lg:min-w-[20%]"
            >
              <a href="#" className="block text-center">
                <div className="pb-2 sm:pb-6">
                  <img
                    className="w-full h-32 md:h-60 rounded-xl"
                    src={builder.image(foodSpot.image).url()}
                    alt={foodSpot.name}
                  />
                </div>
                <div className="text-[3vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4vw] md:leading-[2vw]">
                  <h1 className="mb-2 ">{foodSpot.title}</h1>
                  <button className="bg-[#F88820] text-black rounded-lg p-2 text-sm">
                    <a href={foodSpot.link} target="_blank">
                      View More→
                    </a>
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="p-2">
          <ChevronRightIcon size={24} />
        </button>
      </div>
    </div>
  );
}
