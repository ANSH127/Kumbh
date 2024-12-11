import React from "react";
import Logo from '../assets/img/logo.png';

const BlogDetailPage = () => {
  const cards = [
    {
      title:
        "Prayagraj Mahakumbh: A Divine Confluence of Faith, Culture, and Spirituality",
      imgSrc: "https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the real image URL
      link: "#",
    },

    {
        title:
          "Prayagraj Mahakumbh: A Divine Confluence of Faith, Culture, and Spirituality",
        imgSrc: "https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the real image URL
        link: "#",
      },

      {
        title:
          "Prayagraj Mahakumbh: A Divine Confluence of Faith, Culture, and Spirituality",
        imgSrc: "https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the real image URL
        link: "#",
      },

      {
        title:
          "Prayagraj Mahakumbh: A Divine Confluence of Faith, Culture, and Spirituality",
        imgSrc: "https://images.unsplash.com/photo-1707653056939-5bf9eae73228?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the real image URL
        link: "#",
      }
    // Add more card data here if needed
  ];

  return (<>
  

      {/* Header Section */}
      <div className="bg-[#F4F2E9] py-3 md:py-5 md:mt-[5vw]">
        <div className="flex items-center justify-center text-sm font-bold text-gray-800">
          <span className="mx-3 hidden md:block">Prayagraj, Uttar Pradesh</span>
          <div className="h-12 w-[0.75vw] md:w-1 bg-black md:mx-4 mr-6"></div>

          <div
            className="flex items-center text-[5.5vw] md:text-[3vw]"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            <h1 className="font-bold tracking-[0.25em] leading-none">MAHAK</h1>
            <img
              src={Logo}
              alt="Logo"
              className="w-[6.5vw] md:w-[3vw] h-[6.5vw] md:h-[3vw] inline-block relative -top-[0.2vw] ml-[-0.5vw] mr-[0.1vw]"
            />
            <h1 className="font-bold tracking-[0.25em] leading-none">MBH BLOG</h1>
          </div>

          <div className="h-12 w-[0.75vw] md:w-1 bg-black md:mx-4 ml-6"></div>
          <span className="mx-3 hidden md:block">www.mahakumbh.com</span>
        </div>

        <div className="h-[2px] md:h-[3px] bg-black md:mb-4"></div>
        <div
          className="text-xl text-center font-bold tracking-wider md:mb-4"
          style={{ fontFamily: 'Fraunces, serif' }}
        >
          PRAYAGRAJ MAHAKUMBH
        </div>
        <div className="h-[2px] md:h-[3px] bg-black"></div>
      </div>

      {/* Subtitle Section */}
      <div
        className="bg-black text-xl mx-10 text-white py-3 text-center uppercase tracking-widest hidden md:block"
        style={{ fontFamily: 'Fraunces, serif' }}
      >
        <p>
          "Discover the unparalleled spiritual journey and rich traditions of Prayagraj's Mahakumbh
          2025"
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto md:mt-8 bg-[#F4F2E9] px-6 md:p-6 shadow-lg">
        <h1
          className="text-[5.1vw] md:text-3xl font-bold text-gray-800 uppercase text-left mb-4"
          style={{ fontFamily: 'Fraunces, serif' }}
        >
          Prayagraj Mahakumbh: A Divine Confluence of Faith, Culture, and Spirituality
        </h1>

        <hr className="border-t-2 border-black md:border-gray-300 mb-6" />

        <div className="md:flex md:gap-6">
          <div className="md:w-2/3 text-gray-700 text-left">
            <p className="mb-4">
              The Prayagraj Mahakumbh is one of the largest spiritual gatherings in the world,
              attracting millions of devotees, sadhus, and tourists to the holy city of Prayagraj,
              India. This event takes place every twelve years at the sacred Sangam–the confluence
              of the rivers Ganga, Yamuna, and the mystical Saraswati. According to Hindu beliefs,
              taking a dip at the Sangam during the Kumbh Mela period washes away sins, bringing
              spiritual purity and a closer connection to the divine.
            </p>
            <p>
              The Mahakumbh offers a mesmerizing spectacle with colorful processions of sadhus from
              various Hindu sects, each displaying their unique traditions and practices. The
              atmosphere is filled with spiritual energy, as religious discourses, devotional songs,
              and cultural performances take place throughout the day.
            </p>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1665413793087-d58c23e3a177?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image of blog1"
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    
  
  <div className="  py-8">
    <div className="flex justify-center items-center">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-14">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F4F2E9] rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-2 text-center mb-4">
                <h2 className="text-lg font-regular lg:font-medium text-gray-800">
                  {card.title}... 

                  <a
                  href={card.link}
                  className="text-blue-500 hover:underline"
                >
                  read more
                </a>
                </h2>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-[#F99941] text-center font-semibold w-fit p-2 rounded-lg mt-10 place-self-end mr-16">
                <a href="#" className=" hover:underline">
                  Read Latest Blogs &rarr;
                </a>
    </div>

   
    </div>
    </>
  );
};

export default BlogDetailPage;