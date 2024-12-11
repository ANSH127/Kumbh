import Navbar from "../components/Navbar";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { client, builder } from "../api/SanityClient";
import React from "react";
import Loadar from "../components/Loadar";

function BlogPage() {
  const blogData = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1719126222362-ab9f80d4c579?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Blog Post Title 1",
      description:
        "This is a short description of the blog post. It can be truncated if it's too long.",
    },
    {
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1697730409550-71858318f4c8?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Blog Post Title 1",
      description:
        "This is a short description of the blog post. It can be truncated if it's too long.",
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1726303448966-0b692ebd8334?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Blog Post Title 1",
      description:
        "This is a short description of the blog post. It can be truncated if it's too long.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1712992770394-0ae1523b0d37?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Blog Post Title 1",
      description:
        "This is a short description of the blog post. It can be truncated if it's too long.",
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1543138009-099c5d3b74ab?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Blog Post Title 1",
      description:
        "This is a short description of the blog post. It can be truncated if it's too long.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1701361753960-eac429eeabde?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Blog Post Title 1",
      description:
        "This is a short description of the blog post. It can be truncated if it's too long.",
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1728769594106-d5d45d4534b3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Blog Post Title 1",
      description:
        "This is a short description of the blog post. It can be truncated if it's too long.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1724431636789-a68b78fb148a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGdhbmdhfGVufDB8fDB8fHww",
      title: "Blog Post Title 1",
      description:
        "This is a short description of the blog post. It can be truncated if it's too long.",
    },
    // ... more blog data
  ];

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchBlogs = async () => {
    const data = await client.fetch(`*[_type == 'blog']`);
    console.log(data);
    setData(data);
    setLoading(false);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#F4F2E9] pt-10">
        <div className="bg-[#F4F2E9] py-3 md:py-5 md:mt-[5vw]">
          <div className="flex items-center justify-center text-sm font-bold text-gray-800">
            <span className="mx-3 hidden md:block">
              Prayagraj, Uttar Pradesh
            </span>
            <div className="h-12 w-[0.75vw] md:w-1 bg-black md:mx-4 mr-6"></div>

            <div
              className="flex items-center text-[5.5vw] md:text-[3vw]"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              <h1 className="font-bold tracking-[0.25em] leading-none">
                MAHAK
              </h1>
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

        <div
          className="relative bg-cover bg-center w-[90%] h-[30vh] md:h-[45vh] mx-auto rounded-xl "
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1603868465911-94fe7e439661?q=80&w=2862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="absolute inset-0 opacity-50"></div>
          <div className="relative z-10 text-white text-center p-4">
            <h1 className="text-3xl sm:text-6xl lg:text-8xl font-bold mb-16 md:mb-16">
              MAHAKUMBH 2025
            </h1>
            <p className="text-sm md:text-xl lg:text-2xl">
              EXPERIENCE THE SPIRITUALITY OF LIFE TIME
            </p>
            <p className="text-sm md:text-xl lg:text-2xl">
              WITH PRAYAGRAJKUMBHMELA.COM
            </p>
          </div>
        </div>

        {
          loading ? <Loadar /> :

          <div className="w-[90%] mx-auto py-4 px-4 md:px-4 bg-[#F4F2E9]">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 grid- flex-wrap">
            {data.map((post, index) => (
              <div
                key={index}
                className="bg-[#F4F2E9] rounded-lg h-fit shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200 "
              >
                <img
                  src={builder.image(post.image).url()}
                  alt={post.title}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="p-4 ">
                  <p className="text-xs md:text-base text-justify ">
                    {post.description.substring(0, 150)}...
                    <Link
                      to={`/blog/${post._id}`}
                      className="text-blue-500 hover:underline"
                    >
                      Read more
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>}
      </div>
    </>
  );
}

export default BlogPage;
