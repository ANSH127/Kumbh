import PackageTop from "../assets/img/Packagetop.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { builder,client } from "../api/SanityClient";
import React from "react";
import Loadar from "../components/Loadar";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";


export default function Packages() {
  const navigate = useNavigate();
  const [userType, setUserType] = React.useState("Indian");
  const [filteredPackages, setFilteredPackages] = React.useState([]);
  const [filteredPackages2, setFilteredPackages2] = React.useState([]);

  const filterPackages = () => {
    if (userType === "Indian") {
      setFilteredPackages(data?.filter((pkg) => pkg.packageType === "indian"));
      setFilteredPackages2(data?.filter((pkg) => pkg.packageType === "indian"));
    } else {
      setFilteredPackages(
        data?.filter((pkg) => pkg.packageType === "international")
      );
      setFilteredPackages2(
        data?.filter((pkg) => pkg.packageType === "international")
      );
    }
  };

  const handleDetailsClick = (item) => {
    navigate(`/packages/${item._id}`, { state: { packageData: item } });
  };
  let { data, isLoading, error } = useQuery({
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

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    if (isLoading) return;
    filterPackages();
  }, [userType, data]);

  return (
    <>
      <Helmet>
        <title>
          Prayagraj Kumbh Mela 2025 Packages | Maha Kumbh Tour Plans
        </title>
        <meta
          name="description"
          content="Explore the best Prayagraj Kumbh Mela 2025 tour packages and Maha Kumbh packages. Book affordable travel plans, accommodations, and guided tours now."
        />
        <meta
          name="keywords"
          content="Kumbh Mela 2025 Packages, Maha Kumbh Packages, Prayagraj Kumbh Mela 2025 Tour, Kumbh Mela Tour Packages, Kumbh Mela Travel Plans, Kumbh Mela Accommodation, Maha Kumbh 2025 Packages, Prayagraj Mela Guided Tours"
        />
        <meta name="author" content="prayagrajkumbhmela.com" />
        <meta
          property="og:title"
          content="Prayagraj Kumbh Mela 2025 Packages | Maha Kumbh Tour Plans"
        />
        <link rel="canonical" href="https://prayagrajkumbhmela.com/packages" />

        <meta
          property="og:description"
          content="Book the best Kumbh Mela 2025 tour packages with accommodations, travel plans, and guided tours for Prayagraj Kumbh Mela."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://prayagrajkumbhmela.com/packages"
        />
        <meta
          property="og:image"
          content="https://prayagrajkumbhmela.com/static/packages-banner.jpg"
        />

      </Helmet>

      <Navbar />

      <div className="flex justify-center items-center mt-[10%] md:mt-[8%]  w-full">
        {/* Main Container */}
        <div className="w-[90%] rounded-xl md:rounded-3xl shadow-lg overflow-hidden">
          {/* Top Section with Background Image and Overlay Text */}
          <div className="relative h-40 md:h-64">
            {/* Background Image (Replace with actual image) */}
            <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
            {/* Overlay color for better readability */}
            <img
              src={PackageTop}
              alt="Prayagraj kumbhmela 2025"
              className="w-full h-full object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-[5vw] font-bold tracking-wide">
                MAHAK<span className="text-yellow-400 font-bold">U</span>MBH
                &nbsp;&nbsp;PACKAGES
              </h1>
              <p className="text-[3vw] md:text-[2vw] font-medium mt-2">
                All inclusive tour Packages!!
              </p>
            </div>
          </div>

          {/* Bottom Section with Dates and Buttons */}
          <div className="bg-[#F88820] p-4 md:p-6  text-center flex flex-row justify-around  space-y-0 font-serif">
            {/* Event Card 1 */}
            <div className="space-y-2 text-black">
              <h2 className="text-[2.8vw] md:text-[2.5vw] font-semibold">Paush Poornima</h2>
              <p className="text-[2.5vw] md:text-[1.5vw]">13th January 2025</p>
            </div>

            {/* Event Card 2 */}
            <div className="space-y-2 text-black">
              <h2 className="text-[2.8vw] md:text-[2.5vw] font-semibold">Makar Sankranti</h2>
              <p className="text-[2.5vw] md:text-[1.5vw]">14th January 2025</p>
            </div>

            {/* Event Card 3 */}
            <div className="space-y-2 text-black">
              <h2 className="text-[2.8vw] md:text-[2.5vw] font-semibold">Mauni Amavasya</h2>
              <p className="text-[2.5vw] md:text-[1.5vw]">29th January 2025</p>
            </div>
          </div>
        </div>
      </div>




      <div className="flex justify-center mt-4">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <input
            type="radio"
            name="userType"
            value="Indian"
            id="indian"
            checked={userType === "Indian"}
            onChange={(e) => setUserType(e.target.value)}
            className="hidden"
          />
          <label
            htmlFor="indian"
            className={`px-4 py-2 border border-gray-300 cursor-pointer ${
              userType === "Indian"
                ? "bg-[#F88820] text-white"
                : "bg-white text-gray-700"
            } rounded-l-md hover:bg-[#F88820] hover:text-white transition duration-200`}
          >
            Indian
          </label>

          <input
            type="radio"
            name="userType"
            value="Foreigner"
            id="foreigner"
            checked={userType === "Foreigner"}
            onChange={(e) => setUserType(e.target.value)}
            className="hidden"
          />
          <label
            htmlFor="foreigner"
            className={`px-4 py-2 border border-gray-300 cursor-pointer ${
              userType === "Foreigner"
                ? "bg-[#F88820] text-white"
                : "bg-white text-gray-700"
            } rounded-r-md hover:bg-[#F88820] hover:text-white transition duration-200`}
          >
            Foreigner
          </label>
        </div>
      </div>
      {isLoading ? (
        <Loadar />
      ) : (
        <div>
          <div className="w-full md:w-[90%] container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-8 px-4 md:px-0 mt-10">
            {/* Card Template */}

            {filteredPackages
              ?.filter((item) => item.category === "mela")
              ?.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col relative overflow-hidden"
                >
                  <img
                    src={builder.image(item.image).url()}
                    alt="Prayagraj kumbhmela 2025"
                    className="rounded-t-2xl w-auto h-[140px] 
              md:h-[200px] object-cover object-center shadow-lg transition duration-300 hover:scale-105
               "
                  />
                  <div className="bg-orange-400 rounded-b-2xl pb-4">
                    <div className="bg-[#F4F2E9] p-1 text-center -mt-8 mx-4 rounded-2xl shadow-lg z-10 relative font-serif">
                      <h3 className="text-xs md:text-base font-semibold">
                        {item.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        {item.duration}
                      </p>
                    </div>

                    <div className="text-center -mt-4 md:-mt-0  pb-1 md:pb-3">
                      <p className=" text-base md:text-3xl font-extrabold text-center h-0 md:h-5 text-black my-4">
                        {userType === "Indian" ? "₹" : "$"}

                        {item.discountedPrice}
                      </p>
                      <del
                        className="text-xs
                  

                   md:text-lg font-light text-black text-center"
                      >
                        {userType === "Indian" ? "₹" : "$"}
                        {item.price}
                      </del>
                    </div>
                    <div className="flex justify-evenly gap-2 mx-2 md:mx-0">
                      <button
                        className="bg-white px-2 rounded font-bold  text-[8px] md:text-base text-black md:font-semibold md:px-3 md:py-2 md:rounded-lg shadow hover:bg-gray-200 hover:shadow-md transition duration-300"
                        onClick={() => handleDetailsClick(item)}
                      >
                        Details →
                      </button>

                      <button
                        className="bg-white px-2 rounded font-bold text-[8px] py-1 md:text-base text-black md:font-semibold md:px-3 md:py-2 md:rounded-lg shadow hover:bg-gray-200 hover:shadow-md transition duration-300"
                        onClick={() => navigate("/enquiry")}
                      >
                        Enquire Now →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className=" md:w-8/12 w-full  md:rounded-2xl mx-auto m-4  bg-[#FDAB57] flex flex-col justify-center  h-14">
            <h2 className="text-[6vw] md:text-[2.8vw] text-center font-bold my-4 md:my-[60px]">
              Nearby Cities Packages
            </h2>




            {/* Card Template */}
          </div>
          <div className="w-full md:w-[90%] container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-8 px-4 md:px-0 mt-10 mb-8">
            {filteredPackages2
              .filter((item) => item.category === "city")
              ?.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col relative overflow-hidden"
                >
                  <img
                    src={builder.image(item.image).url()}
                    alt="Prayagraj kumbh mela 2025"
                    className="rounded-t-2xl w-auto h-[140px] 
              md:h-[200px] object-cover object-center shadow-lg transition duration-300 hover:scale-105
               "
                  />
                  <div className="bg-orange-400 rounded-b-2xl pb-4">
                    <div className="bg-[#F4F2E9] p-1 text-center -mt-8 mx-4 rounded-2xl shadow-lg z-10 relative font-serif">
                      <h3 className="text-xs md:text-base font-semibold">
                        {item.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        {item.duration}
                      </p>
                    </div>

                    <div className="text-center -mt-4 md:-mt-0  pb-1 md:pb-3">
                      <p className=" text-base md:text-3xl font-extrabold text-center h-0 md:h-5 text-black my-4">
                        ₹{item.discountedPrice}
                      </p>
                      <del
                        className="text-xs
                  

                   md:text-lg font-light text-black text-center"
                      >
                        ₹{item.price}
                      </del>
                    </div>
                    <div className="flex justify-evenly gap-2 mx-2 md:mx-0">
                      <button
                        className="bg-white px-2 text-[8px] rounded font-bold  py-1 md:text-base text-black md:font-semibold md:px-3 md:py-2 md:rounded-lg shadow hover:bg-gray-200 hover:shadow-md transition duration-300"
                        onClick={() => handleDetailsClick(item)}
                      >
                        Details →
                      </button>

                      <button
                        className="bg-white px-2 rounded font-bold text-[8px] py-1 md:text-base text-black md:font-semibold md:px-3 md:py-2 md:rounded-lg shadow hover:bg-gray-200 hover:shadow-md transition duration-300"
                        onClick={() => navigate("/enquiry")}
                      >
                        Enquire Now →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
