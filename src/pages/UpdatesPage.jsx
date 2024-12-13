import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { client, builder } from "../api/SanityClient";
import { useNavigate } from "react-router-dom";
import Loadar from "../components/Loadar";
import Footer from "../components/Footer";

const UpdatesPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [updates, setUpdates] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [language, setLanguage] = React.useState("English");
  const [filteredData, setFilteredData] = React.useState([]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    // Add functionality to display relevant news based on the tab clicked
  };

  const fetchUpdates = async () => {
    const data = await client.fetch(`*[_type == 'melaupdate']`);
    console.log(data);

    setUpdates(data);
    setLoading(false);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    fetchUpdates();
  }, []);

  React.useEffect(() => {
    if (language === "English") {
      setFilteredData(updates.filter((post) => post.language === "english"));
    } else {
      const filtered = updates.filter((post) => post.language === "hindi");
      setFilteredData(filtered);
    }
  }, [language, updates]);
  return (
    <>
      <Navbar />
      <div className="  md:mt-20 lg:mt-20 ">
        {/* Header Section */}
        <div className="bg-[#F88820] p-6 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Stay Updated: Mahakumbh Mela Live News
          </h1>
          <p className="text-lg md:text-xl">
            Catch all the latest happenings, rituals, and announcements from the
            ground!
          </p>
        </div>

        {/* Live Ticker */}
        <div className="bg-[#F88820] p-4 text-center text-white font-bold text-lg">
          <p>
            🔴 Live Update: The river Ganga is witnessing a huge influx of
            pilgrims this morning for the auspicious bath! Stay tuned for more
            updates.
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center my-4">
          <div className="tabs flex flex-wrap justify-center gap-y-2 space-x-2">
            {[
              "Latest News",
              "Rituals",
              "Travel Alerts",
              "Cultural Performances",
            ].map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md ${
                  activeTab === index
                    ? "bg-[#F88820] text-white"
                    : "bg-white border border-orange-500 text-orange-500"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </button>
            ))}
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
              } hover:bg-[#F88820] hover:text-white transition duration-200`}
            >
              Hindi
            </label>
          </div>
        </div>

        {/* News Cards Section */}
        {loading ? (
          <Loadar />
        ) : (
          <div className="flex flex-wrap justify-start mb-5 mx-5  gap-4 p-4">
            {/* Example of a News Card */}

            {filteredData.map((update, index) => (
              <div
                key={index}
                className="bg-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2"
              >
                <img
                  src={builder.image(update.image).url()}
                  alt="News"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{update.title}</h3>
                <p className="text-gray-700 mb-4">{update.description}</p>
                <p
                  onClick={() => navigate(`/update/${update._id}`)}
                  className="bg-[#F88820] text-white px-4 py-2 rounded-md font-bold w-fit cursor-pointer"
                >
                  Read More
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Subscription Section */}
        {/* <div className="bg-white p-6 mt-8 mx-4 md:mx-auto md:w-1/2 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe for Updates</h2>
          <p className="mb-4">
            Get the latest news, updates, and announcements directly to your
            inbox!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded-md w-full md:w-auto"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#F88820] text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Subscribe
            </button>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default UpdatesPage;
