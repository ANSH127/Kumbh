import React from "react";

export default function WhyChooseUs() {
  return (
    <div className="w-11/12 mx-auto my-8 bg-[#FF9933] rounded-2xl shadow-lg p-4">
      <h1 className="text-3xl font-bold text-center text-black">
        Why Choose Us?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-32 gap-y-8 mt-4">
        <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold text-black text-center">
            Local Experts
          </h1>
          <p className="mt-2">
            We are born and raised here! Our deep knowledge of the city gives
            you an authentic and personalized travel experience.
          </p>
        </div>
        <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold text-black text-center">
            Unique Experiences
          </h1>
          <p className="mt-2">
            Skip the generic tour routes! We take you to hidden gems and
            off-the-beaten-path locations for a memorable journey.
          </p>
        </div>
        <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold text-black text-center">
            Delicious Street Food
          </h1>
          <p className="mt-2">
            Taste the most authentic street foods! From spicy chaat to
            mouth-watering kebabs, we guide you on a food journey like no other.
          </p>
        </div>
        <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold text-black text-center">
            New Yet Committed
          </h1>
          <p className="mt-2">
            We are new, but our passion drives us to go the extra mile, ensuring
            every moment of your trip is memorable and joyful.
          </p>
        </div>
        <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold text-black text-center">
            Personalized & Flexible Tours
          </h1>
          <p className="mt-2">
            No rigid schedules! We tailor our tours to fit your preferences,
            offering you the flexibility to enjoy at your own pace.
          </p>
        </div>
        <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold text-black text-center">
            Transparent Pricing
          </h1>
          <p className="mt-2">
            No hidden charges! We offer fair pricing and great value, making
            sure you get the best experience for your money.
          </p>
        </div>
      </div>
      <div className="text-center text-2xl font-semibold mt-4">
        *We promise a memorable journey that goes beyond the usual travel
        experience. Let us make your trip unforgettable!
      </div>
    </div>
  );
}
