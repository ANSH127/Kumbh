import React from "react";
import Logo from "../assets/img/logo.png";
import { client, builder } from "../api/SanityClient";
import { useParams } from "react-router-dom";
import PortableText from "react-portable-text";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";


const BlogDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { blogData } = location.state || {};



  const { data:latestBlogs, isLoading, error } = useQuery({
    queryKey: ["latestblog"],
    queryFn: async () => {
      const data = await client.fetch(
        `*[_type == "blog"] | order(_createdAt desc) [0...4]`

      );
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });


  const handleDetailsClick = (item) => {
    navigate(`/blog/${item._id}`, { state: { blogData: item } });
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar />
      {/* Header Section */}
      <div className="bg-[#F4F2E9] py-3 md:py-5 md:mt-[5vw]">
        <div className="flex items-center justify-center text-sm font-bold text-gray-800">
          <span className="mx-3 hidden md:block">Prayagraj, Uttar Pradesh</span>
          <div className="h-12 w-[0.75vw] md:w-1 bg-black md:mx-4 mr-6"></div>

          <div
            className="flex items-center text-[5.5vw] md:text-[3vw]"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            <h1 className="font-bold tracking-[0.25em] leading-none">MAHAK</h1>
            <img
              src={Logo}
              alt="Logo"
              className="w-[6.5vw] md:w-[3vw] h-[6.5vw] md:h-[3vw] inline-block relative -top-[0.2vw] ml-[-0.5vw] mr-[0.1vw]"
            />
            <h1 className="font-bold tracking-[0.25em] leading-none">
              MBH BLOG
            </h1>
          </div>

          <div className="h-12 w-[0.75vw] md:w-1 bg-black md:mx-4 ml-6"></div>
          <span className="mx-3 hidden md:block">www.mahakumbh.com</span>
        </div>

        <div className="h-[2px] md:h-[3px] bg-black md:mb-4"></div>
        <div
          className="text-xl text-center font-bold tracking-wider md:mb-4"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          PRAYAGRAJ MAHAKUMBH
        </div>
        <div className="h-[2px] md:h-[3px] bg-black"></div>
      </div>

      {/* Subtitle Section */}
      <div
        className="bg-black text-xl mx-10 text-white py-3 text-center uppercase tracking-widest hidden md:block"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        <p>
          "Discover the unparalleled spiritual journey and rich traditions of
          Prayagraj's Mahakumbh 2025"
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto md:mt-8 bg-[#F4F2E9] px-6 md:p-6 shadow-lg">
        <h1
          className="text-[5.1vw] md:text-3xl font-bold text-gray-800 uppercase text-left mb-4"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          {blogData && blogData.title}
        </h1>

        <hr className="border-t-2 border-black md:border-gray-300 mb-6" />

        {blogData && blogData.content && (
          <div className="md:flex">
            <div className=" text-gray-700 text-left">
              <PortableText
                content={blogData && blogData.content}
                projectId="vnmkbnfo"
                dataset="production"
                className="text-gray-700 text-base font-sans"
                serializers={{
                  h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                  li: ({ children }) => (
                    <li className="special-list-item">{children}</li>
                  ),
                  h2: (props) => (
                    <h2
                      className="text-2xl font-bold text-gray-800"
                      {...props}
                    />
                  ),
                  normal: (props) => (
                    <p className="text-gray-700 text-justify" {...props} />
                  ),
                  link: (props) => (
                    <a
                      className="text-blue-500 hover:underline"
                      href={props.href}
                    >
                      {props.children}
                    </a>
                  ),
                  image: (props) => {
                    return (
                      <div className="flex justify-center items-center py-5">
                      <img
                        src={builder.image(props.asset).url()}
                        alt={props.alt}
                        className=" md:h-[35rem] w-[90%] object-cover"
                      />
                      </div>
                    );
                  }
                }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="py-8">
        <div className="flex justify-center items-center">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-14">
              {latestBlogs?.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#F4F2E9] rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
                  onClick={() => handleDetailsClick(card)}
                >
                  <img
                    src={builder.image(card.image).url()}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-2 text-center mb-4">
                    <h2 className="text-lg font-regular lg:font-medium text-gray-800">
                      {card.title}...
                      <p
                        onClick={() => handleDetailsClick(card)}
                        className="text-blue-500 hover:underline cursor-pointer"
                      >
                        read more
                      </p>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" justify-center text-center  font-semibold  p-2 rounded-lg mt-10 ">
          <p
            className=" hover:underline cursor-pointer  text-gray-800 text-lg font-semibold p-2 rounded-lg"
            onClick={() => navigate("/blogs")}
          >
            Read Latest Blogs &rarr;
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
