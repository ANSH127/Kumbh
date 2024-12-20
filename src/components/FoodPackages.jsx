// import React, { useRef } from "react";

// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// import { useQuery } from "@tanstack/react-query";

// import { client, builder } from "../api/SanityClient";
// export default function FoodPackages() {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//   };
//   const { data:popularFoodSpots, isLoading, error } = useQuery({
//     queryKey: ["foodspot"],
//     queryFn: async () => {
//       const data = await client.fetch(`*[_type == 'foodspot']`);
//       return data;
//     },
//     staleTime: 1000 * 60 * 5, // 5 minutes
//   });

//   return (
//     <div className="w-full h-auto bg-[#F4F2E9] flex flex-col justify-center pb-12 relative">
//       <h1 className="text-[5vw] md:text-[2.8vw] text-center font-bold my-6 md:my-[60px]">
//         Popular Food Spots in Prayagraj
//       </h1>
//       <div className="flex items-center">
//         <button onClick={scrollLeft} className="p-2">
//           <ChevronLeftIcon size={24} />
//         </button>
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto space-x-4 w-full px-3 md:px-12 scrollbar-hide pb-4"
//           style={{
//             // hide scrollbar
//             scrollbarWidth: "none",
//           }}
//         >
//           {!isLoading && popularFoodSpots.map((foodSpot) => (
//             <div
//               key={foodSpot._id}
//               className="bg-white p-2 sm:p-4 rounded-xl md:rounded-2xl lg:rounded-3xl mx-auto min-w-[50%] md:min-w-[25%] lg:min-w-[20%]"
//             >
//               <a href="#" className="block text-center">
//                 <div className="pb-2 sm:pb-6">
//                   <img
//                     className="w-full h-32 md:h-60 rounded-xl"
//                     src={builder.image(foodSpot.image).url()}
//                     alt={foodSpot.name}
//                   />
//                 </div>
//                 <div className="text-[3vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4vw] md:leading-[2vw]">
//                   <h1 className="mb-2 ">{foodSpot.title}</h1>
//                   <button className="bg-[#F88820] text-black rounded-lg p-2 text-sm">
//                     <a href={foodSpot.link} target="_blank">
//                       View More→
//                     </a>
//                   </button>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//         <button onClick={scrollRight} className="p-2">
//           <ChevronRightIcon size={24} />
//         </button>
//       </div>
//     </div>
//   );
// }



import React, { useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useQuery } from "@tanstack/react-query";
import { client, builder } from "../api/SanityClient";

export default function FoodPackages() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const { data: popularFoodSpots, isLoading, error } = useQuery({
    queryKey: ["foodspot"],
    queryFn: async () => {
      const data = await client.fetch(`*[_type == 'foodspot']`);
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <section
      className="w-full h-auto bg-[#F4F2E9] flex flex-col justify-center pb-12 relative"
      aria-labelledby="popular-food-title"
    >
      {/* Main Heading */}
      <header>
        <h1
          id="popular-food-title"
          className="text-[5vw] md:text-[2.8vw] text-center font-bold my-6 md:my-[60px]"
        >
          Popular Food Spots in Prayagraj
        </h1>
      </header>

      {/* Scrollable Section */}
      <div className="flex items-center" role="region" aria-label="Food spots scroll section">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="p-2"
          aria-label="Scroll left"
        >
          <ChevronLeftIcon size={24} />
        </button>

        {/* Food Spots Content */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 w-full px-3 md:px-12 scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {/* Error Handling */}
          {error && (
            <p className="text-center text-red-500">Failed to load food spots. Please try again.</p>
          )}
          {/* Loading State */}
          {isLoading && <p className="text-center">Loading...</p>}

          {/* Food Spots Cards */}
          {!isLoading &&
            popularFoodSpots?.map((foodSpot) => (
              <article
                key={foodSpot._id}
                className="bg-white p-2 sm:p-4 rounded-xl md:rounded-2xl lg:rounded-3xl mx-auto min-w-[50%] md:min-w-[25%] lg:min-w-[20%]"
              >
                <a
                  href={foodSpot.link || "#"}
                  className="block text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`View more about ${foodSpot.title}`}
                >
                  {/* Food Image */}
                  <figure className="pb-2 sm:pb-6">
                    <img
                      className="w-full h-32 md:h-60 rounded-xl"
                      src={builder.image(foodSpot.image).url()}
                      alt={foodSpot.name || `Image of ${foodSpot.title}`}
                      loading="lazy"
                    />
                  </figure>

                  {/* Food Title and Button */}
                  <div className="text-[3vw] md:text-[2vw] lg:text-[1.5vw] font-semibold leading-[4vw] md:leading-[2vw]">
                    <h2 className="mb-2">{foodSpot.title}</h2>
                    <button className="bg-[#F88820] text-black rounded-lg p-2 text-xs md:text-sm ">
                      Know More →
                    </button>
                  </div>
                </a>
              </article>
            ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="p-2"
          aria-label="Scroll right"
        >
          <ChevronRightIcon size={24} />
        </button>
      </div>
    </section>
  );
}
