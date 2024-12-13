import React from "react";
import Navbar from "../components/Navbar";

import { client, builder } from "../api/SanityClient";
import { useNavigate } from "react-router-dom";
import Loadar from "../components/Loadar";
import { useParams } from "react-router-dom";
import PortableText from "react-portable-text";
import Footer from "../components/Footer";


const UpdateDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = React.useState(null);
  const [latestUpdates, setLatestUpdates] = React.useState(null);

  const fetchUpdateData = async () => {
    const data = await client.getDocument(id);
    // console.log(data);
    setData(data);
  };

  const fetchLatestUpdates = async () => {
    const data = await client.fetch(
      `*[_type == 'melaupdate'] | order(_createdAt desc) [0...4]`
    );
    setLatestUpdates(data);
    // console.log(data);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    fetchUpdateData();
    fetchLatestUpdates();
  }, []);

  return (
    <>
      <Navbar />
      <div className="md:mt-20 lg:mt-20">
        {/* Header Section */}
        <header className="bg-orange-500 text-white text-center py-8">
          <h1 className="text-4xl font-bold">Mahakumbh Mela Updates</h1>
          <p className="mt-2">
            Your one-stop destination for detailed news and updates
          </p>
        </header>

        {/* Article Content */}
        <div className="md:w-[80%] w-full mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
          <p 
            onClick={() => navigate(-1)}
           className="inline-block mb-4 text-orange-500 font-bold cursor-pointer">
            &larr; Back to Main Page
          </p>
          {
            data && data.image &&
            <img
            src={builder.image(data?.image).url()}
            alt="Article Image"
            className="w-full rounded-lg mb-6"
          />}
          <h1 className="text-3xl font-bold text-orange-500 mb-4">
            {data?.title}
          </h1>
          <p className="text-gray-600 text-sm mb-4">
            Published on: {
                new Date(data?._createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })
            } | Author: Admin
          </p>
          {
            data && data.content &&
            <div className="mb-4">
          <PortableText
                content={data && data.content}
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
                }}
              />
          </div>}
        </div>

        {/* Related News Section */}
        <div className="w-[80%]  mx-auto py-10">
          <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">
            More Related News
          </h2>
          <div className="  grid gap-6 sm:grid-cols-3 lg:grid-cols-4">

            {
                latestUpdates &&
                latestUpdates.map((update, index) => (
                    <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-1"
                    >
                    <img
                        src={builder.image(update.image).url()}
                        alt="News Image"
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">
                        {update.title}
                        </h3>
                        <button
                        onClick={() => navigate(`/update/${update._id}`)}
                        className="block w-full bg-orange-500 text-white py-2 rounded-lg mt-4 hover:bg-orange-600"
                        >
                        Read More
                        </button>
                    </div>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateDetailPage;
