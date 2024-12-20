import Navbar from "../components/Navbar";
import Logo from "../assets/img/logo.png"; 
import {  client,builder } from "../api/SanityClient";
import React from "react";
import Loadar from "../components/Loadar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import CoverImage from "../assets/img/blogcover.jpg";
import { useQuery } from "@tanstack/react-query";



function BlogPage() {
  const navigate = useNavigate();
  const [language, setLanguage] = React.useState("English");
  const [filteredData, setFilteredData] = React.useState([]);
  
  let { data, isLoading, error } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const data = await client.fetch(`*[_type == 'blog']`);
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

  const handleDetailsClick = (item) => {
    navigate(`/blog/${item._id}`, { state: { blogData: item } });
  };

  React.useEffect(() => {
    if (isLoading) return;
    if (language === "English") {
      setFilteredData(data.filter((post) => post.language === "english"));
    } else {
      const filtered = data.filter((post) => post.language === "hindi");
      setFilteredData(filtered);
    }
  }, [language, data]);

  return (
    <>
      <Helmet>
        <title>
          Prayagraj Kumbh Mela 2025 Blog - News, Updates, and Travel Insights
        </title>
        <meta
          name="description"
          content="Stay updated with the latest news, events, and travel guides for Prayagraj Kumbh Mela 2025. Explore insightful blogs on rituals, important dates, and pilgrim tips."
        />
        <meta
          name="keywords"
          content="Prayagraj Kumbh Mela 2025 blog, Kumbh Mela 2025 news, Kumbh Mela travel tips, Prayagraj pilgrimage updates, Maha Kumbh Mela articles, Kumbh Mela dates 2025, Kumbh Mela guides"
        />
        <meta name="author" content="prayagrajkumbhmela.com" />
        <meta
          property="og:title"
          content="Prayagraj Kumbh Mela 2025 Blog - Latest News, Guides & Insights"
        />
        <meta
          property="og:description"
          content="Discover informative blogs about Prayagraj Kumbh Mela 2025, including rituals, travel tips, important updates, and detailed guides for pilgrims and tourists."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prayagrajkumbhmela.com/blog" />
        <meta
          property="og:image"
          content="https://prayagrajkumbhmela.com/static/blog-banner.jpg"
        />
        <link rel="canonical" href="https://prayagrajkumbhmela.com/blog" />
      </Helmet>
      <Navbar />
      <div className="bg-[#F4F2E9] pt-10 md:pt-0">
        <div className="bg-[#F4F2E9] py-3 md:py-5 md:mt-[5vw]">
          <div className="flex items-center justify-center text-sm font-bold text-gray-800">
            <span className="mx-3 hidden md:block">
              Prayagraj, Uttar Pradesh
            </span>
            <div className="h-12 w-[0.75vw] md:w-1 bg-black md:mx-4 mr-6"></div>

            <div
              className="flex items-center text-[5.5vw] md:text-[2.4vw] lg:text-[3vw]"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              <h1 className="font-bold tracking-[0.25em] leading-none">
                MAHAK
              </h1>
              <img
                src={Logo}
                alt="Prayagraj kumbh mela 2025"
                className="w-[6.5vw] md:w-[3vw] h-[6.5vw] md:h-[3vw] inline-block relative -top-[0.2vw] ml-[-0.5vw] mr-[0.1vw]"
              />
              <h1 className="font-bold tracking-[0.25em] leading-none">
                MBH BLOG
              </h1>
            </div>

            <div className="h-12 w-[0.75vw] md:w-1 bg-black md:mx-4 ml-6"></div>
            <span className="mx-3 hidden md:block">
              www.prayagrajkumbhmela.com
            </span>
          </div>

          <div className="h-[2px] md:h-[3px] bg-black md:mb-4"></div>
          <div
            className="text-xl text-center font-bold tracking-wider md:mb-4"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            <h1> PRAYAGRAJ MAHAKUMBH</h1>
           
          </div>
          <div className="h-[2px] md:h-[3px] bg-black"></div>
        </div>

        <div
          className="relative bg-cover bg-center w-[90%] h-[30vh] md:h-[45vh] mx-auto rounded-xl "
          style={{
            backgroundImage: `url(${CoverImage})`,
          }}
        >
          <div className="absolute inset-0 opacity-50"></div>

          <div className="relative z-10 text-[#F4F2E9] text-center p-4">
            <h1 className="text-3xl sm:text-6xl lg:text-8xl font-bold mb-16 md:mb-16">
              MAHAKUMBH 2025
            </h1>
            {/* <div className=" w-fit lg:ml-48 ">
            <p className="text-xs md:text-xl lg:text-2xl text-center lg:text-left font-bold ">
              EXPERIENCE THE SPIRITUALITY OF KUMBH MELA
            </p>
            <p className="text-xs md:text-xl lg:text-2xl text-center font-bold">
              WITH PRAYAGRAJKUMBHMELA.COM
            </p>
            </div> */}
            <p className="text-sm md:text-xl lg:text-2xl">
              EXPERIENCE THE SPIRITUALITY OF LIFE TIME
            </p>
            <p className="text-sm md:text-xl lg:text-2xl">
              WITH PRAYAGRAJKUMBHMELA.COM
            </p>

           
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <input
              type="radio"
              name="userType"
              value="English"
              id="english"
              checked={language === "English"}
              onChange={(e) => setLanguage(e.target.value)}
              className="hidden"
            />
            <label
              htmlFor="english"
              className={`px-4 py-2 border border-gray-300 cursor-pointer ${
                language === "English"
                  ? "bg-[#F88820] text-white"
                  : "bg-white text-gray-700"
              } rounded-l-md hover:bg-[#F88820] hover:text-white transition duration-200`}
            >
              English
            </label>
            <input
              type="radio"
              name="userType"
              value="Hindi"
              id="hindi"
              checked={language === "Hindi"}
              onChange={(e) => setLanguage(e.target.value)}
              className="hidden"
            />
            <label
              htmlFor="hindi"
              className={`px-4 py-2 border border-gray-300 cursor-pointer ${
                language === "Hindi"
                  ? "bg-[#F88820] text-white"
                  : "bg-white text-gray-700"
              } rounded-r-md hover:bg-[#F88820] hover:text-white transition duration-200`}
            >
              Hindi
            </label>
          </div>
        </div>

        {isLoading ? (
          <Loadar />
        ) : (
          <div className="w-[90%] mx-auto py-8 px-4 md:px-4 bg-[#F4F2E9]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 grid- flex-wrap">
              {filteredData.map((post, index) => (
                <div onClick={() => handleDetailsClick(post)} key={index}>
                  <div className="bg-[#F4F2E9] rounded-lg h-fit shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200 ">
                    <img
                      src={builder.image(post.image).url()}
                      alt={post.title}
                      className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="p-4 ">
                      <p className="text-xs md:text-base text-justify ">
                        {post.description.substring(0, 150)}...
                        <p
                          onClick={() => handleDetailsClick(post)}
                          className="text-blue-500 hover:underline"
                        >
                          Read more
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default BlogPage;
