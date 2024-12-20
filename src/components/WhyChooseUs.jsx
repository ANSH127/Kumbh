// export default function WhyChooseUs() {
//   return (
//     <div className="w-11/12 mx-auto my-8 bg-[#FF9933] rounded-2xl shadow-lg p-4">
//       <h1 className="text-3xl font-bold text-center text-black">
//         Why Choose Us?
//       </h1>
//       <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-4 md:p-4">
//         <div className="bg-[#F4F2E9] p-3 h-fit md:p-4 rounded-lg shadow-lg">
//           <h1 className="text-sm md:text-xl font-bold text-black text-center">
//             Local Experts
//           </h1>
//           <p className="mt-2 text-sm md:text-base">
//             We are born and raised here! Our deep knowledge of the city gives
//             you an authentic and personalized travel experience.
//           </p>
//         </div>
//         <div className="bg-[#F4F2E9] p-3 h-fit md:p-4 rounded-lg shadow-lg">
//           <h1 className="text-sm md:text-xl font-bold text-black text-center">
//             Local Experts
//           </h1>
//           <p className="mt-2 text-sm md:text-base
//           text-justify
//           ">
//             We are born and raised here! Our deep knowledge of the city gives
//             you an authentic and personalized travel experience.
//           </p>
//         </div>
//         <div className="bg-[#F4F2E9] p-3 h-fit md:p-4 rounded-lg shadow-lg">
//           <h1 className="text-sm md:text-xl font-bold text-black text-center">
//             Local Experts
//           </h1>
//           <p className="mt-2 text-sm md:text-base text-justify">
//             We are born and raised here! Our deep knowledge of the city gives
//             you an authentic and personalized travel experience.
//           </p>
//         </div>
//         <div className="bg-[#F4F2E9] p-3 h-fit md:p-4 rounded-lg shadow-lg">
//           <h1 className="text-sm md:text-xl font-bold text-black text-center">
//             Local Experts
//           </h1>
//           <p className="mt-2 text-sm md:text-base text-justify">
//             We are born and raised here! Our deep knowledge of the city gives
//             you an authentic and personalized travel experience.
//           </p>
//         </div>
//         <div className="bg-[#F4F2E9] p-3 h-fit md:p-4 rounded-lg shadow-lg">
//           <h1 className="text-sm md:text-xl font-bold text-black text-center">
//             Local Experts
//           </h1>
//           <p className="mt-2 text-sm md:text-base text-justify">
//             We are born and raised here! Our deep knowledge of the city gives
//             you an authentic and personalized travel experience.
//           </p>
//         </div>
//         <div className="bg-[#F4F2E9] p-3 h-fit md:p-4 rounded-lg shadow-lg">
//           <h1 className="text-sm md:text-xl font-bold text-black text-center">
//             Local Experts
//           </h1>
//           <p className="mt-2 text-sm md:text-base text-justify">
//             We are born and raised here! Our deep knowledge of the city gives
//             you an authentic and personalized travel experience.
//           </p>
//         </div>

//         <div className="bg-[#F4F2E9] p-3 h-fit md:p-4 rounded-lg shadow-lg">
//           <h1 className="text-sm md:text-xl font-bold text-black text-center">
//             Local Experts
//           </h1>
//           <p className="mt-2 text-sm md:text-base text-justify">
//             We are born and raised here! Our deep knowledge of the city gives
//             you an authentic and personalized travel experience.
//           </p>
//         </div>
//         <div className="bg-[#F4F2E9] p-3 h-fit md:p-4 rounded-lg shadow-lg">
//           <h1 className="text-sm md:text-xl font-bold text-black text-center">
//             Local Experts
//           </h1>
//           <p className="mt-2 text-sm md:text-base text-justify">
//             We are born and raised here! Our deep knowledge of the city gives
//             you an authentic and personalized travel experience.
//           </p>
//         </div>
//       </div>
//       <div className="text-center text-xl font-semibold mt-4">
//         *We promise a memorable journey that goes beyond the usual travel
//         experience. Let us make your trip unforgettable!
//       </div>
//     </div>
//   );
// }




import React from "react";

const whyChooseUsData = [
  {
    title: "Local Expertise",
    description:
      "Born and raised in Prayagraj, our deep understanding of the city's culture and hidden gems ensures you get an authentic experience.",
  },
  {
    title: "Unique Experiences",
    description:
      "Explore beyond the ordinary with our curated tours that include iconic landmarks, vibrant street food, and cultural immersion.",
  },
  {
    title: "Personalized Tours",
    description:
      "Every trip is tailored to meet your preferences, ensuring a journey that aligns with your interests and comfort.",
  },
  {
    title: "Trusted Guides",
    description:
      "Our experienced and friendly guides provide valuable insights and ensure your journey is safe and enriching.",
  },
  {
    title: "Comfort & Convenience",
    description:
      "With well-planned itineraries, reliable transport, and premium accommodations, we make your journey hassle-free.",
  },
  {
    title: "Cultural Immersion",
    description:
      "Participate in rituals, witness traditions, and connect with the spiritual essence of Prayagraj like never before.",
  },
  {
    title: "Affordable Packages",
    description:
      "We offer a range of budget-friendly and premium packages designed to meet all your travel needs.",
  },
  {
    title: "Exceptional Support",
    description:
      "Our 24/7 customer support ensures you always have someone to assist you throughout your journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-11/12 mx-auto my-8 bg-[#FF9933] rounded-2xl shadow-lg p-6">
      {/* Section Header */}
      <header className="text-center">
        <h2 className="text-3xl font-bold text-black">Why Choose Us?</h2>
        <p className="text-sm md:text-lg text-gray-800 mt-2">
          Discover why we are the best choice for an unforgettable Prayagraj
          Kumbh Mela experience.
        </p>
      </header>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {whyChooseUsData.map((item, index) => (
          <div
            key={index}
            className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-lg font-bold text-black text-center">
              {item.title}
            </h2>
            <p className="mt-2 text-sm md:text-base text-justify text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Promise Section */}
      <div className="text-center text-lg md:text-xl font-semibold mt-8 text-black">
        *We promise a journey filled with memories, spiritual enrichment, and
        unique experiences. Let us make your trip extraordinary!
      </div>
    </section>
  );
}
