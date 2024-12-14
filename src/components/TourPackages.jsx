import { useRef } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import { client, builder } from "../api/SanityClient";
import HotelRating from "../assets/img/hotelrating.png";
import Loadar from "./Loadar";
import { useQuery } from "@tanstack/react-query";

export default function TourPackages() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

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

  return (
    <div className="w-full h-auto bg-[#F4F2E9] flex flex-col justify-center mt-3 pb-8 md:pb-0">
      <h1 className="text-[5vw] md:text-[2.8vw] text-center font-bold my-6 md:my-4">
        Prayagraj MahaKumbh Tour Packages
      </h1>

      {isLoading ? (
        <Loadar />
      ) : (
        <div className="relative w-full px-3 md:px-12">
          <ChevronLeftIcon
            className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
            size={30}
            onClick={scrollLeft}
            style={{ fontSize: "2rem" }}
          />
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 scrollbar-hide"
            style={{
              // hide scrollbar
              scrollbarWidth: "none",
            }}
          >
            {data
              .filter((item) => item.category === "mela")
              .map((item) => (
                <div
                  key={item._id}
                  className="bg-none shadow-lg mx-auto cursor-pointer  rounded-xl  min-w-[350px] h-fit "
                >
                  <img
                    className="w-full h-auto max-w-[350px] max-h-[200px] shadow-none rounded-t-xl"
                    src={builder.image(item.image).url()}
                    alt="Prime Hotels"
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
                      <button
                        className="bg-[#F88820] text-black rounded-lg p-2 text-sm"
                        onClick={() => handleDetailsClick(item)}
                      >
                        Details→
                      </button>
                      <button
                        className="bg-[#F88820] text-black rounded-lg p-2 text-sm"
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
            style={{ fontSize: "2rem" }}
          />
        </div>
      )}

      <h1
        className="hover-effect bg-[#F88820] rounded-lg md:rounded-xl px-4 py-2 lg:px-5 w-fit mx-auto font-bold text-[4vw] md:text-[1.5vw] mt-10 md:mt-12
      cursor-pointer transition duration-300 hover:bg-[#F88820] hover:text-white
      "
        onClick={() => navigate("/packages")}
      >
        Explore All Packages
      </h1>
    </div>
  );
}
