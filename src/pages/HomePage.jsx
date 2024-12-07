import Hero1 from "../assets/img/Hero1.jpeg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImportantDates from "../components/ImportantDates";
import Logo from "../assets/img/logo.png";
import NearbyCitiesPackages from "../components/NearbyCitiesPackages";
import TourPackages from "../components/TourPackages";
import A1 from "../assets/img/a1.png";
import Icon1 from "../assets/img/icon1.png";
import Icon2 from "../assets/img/icon2.png";
import Icon3 from "../assets/img/icon3.png";
import { Rating } from "@mui/material";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[90vh] relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-row">
          <h2 className="text-[5.5vw] md:text-[4.5vw] font-bold tracking-[0.25em] leading-none">
            MAHAK
            <img
              src={Logo}
              alt="Logo"
              className="w-[5.5vw] h-[5.5vw] inline-block relative -top-[0.2vw] ml-[-0.5vw] mr-[0.1vw]"
            />
            MBH 2025
          </h2>
        </div>
        <img src={Hero1} alt="Hero1" className="w-full h-full object-cover" />
      </div>
      <ImportantDates />
      <TourPackages />
      <NearbyCitiesPackages />
      <div className="w-11/12 bg-[#F4F2E9]  mx-auto my-8 rounded-2xl grid grid-cols-2 shadow-lg">
        <div>
          <img src={A1} alt="A1" className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h1 className="text-3xl font-bold text-center text-[#F49330]">
            MAHAKUMBH MELA PRAYAGRAJ 2025
          </h1>
          <p className="text-justify mt-4">
            The Mahakumbh 2025, set to be held in Prayagraj, is a monumental
            spiritual event and one of Hinduism’s most revered pilgrimages.
            Occurring every 12 years at the sacred Triveni Sangam—the confluence
            of the Ganga, Yamuna, and Saraswati rivers—it is believed to be a
            divine opportunity for spiritual purification and liberation.
            Millions of devotees, saints, and seekers from across the globe
            gather to take a holy dip, perform prayers, and participate in
            elaborate rituals. The event is marked by vibrant processions,
            spiritual discourses, and gatherings of ascetics and spiritual
            leaders, creating a uniquely charged atmosphere of devotion and
            enlightenment. Mahakumbh 2025 is not just a religious gathering but
            also a reflection of India’s rich cultural heritage and timeless
            traditions. With extensive preparations for infrastructure, safety,
            and sustainability, it will unite faith, culture, and humanity,
            offering an unforgettable experience of spirituality and collective
            devotion to millions of participants.
          </p>
          <div className="flex flex-start justify-center mt-4">
            <img src={Icon1} alt="Icon1" className="w-12 h-12" />
            <h1 className="text-sm ml-3">Shahi snan dates of MahaKumbh 2025</h1>
            <div className="h-12 border-l-2 border-gray-400 px-2"></div>

            <img src={Icon2} alt="Icon1" className="w-12 h-12" />
            <h1 className="text-sm ml-3">
              Top Attractions of Prayagraj and Mahakumbh
            </h1>
            <div className="h-12 border-l-2 border-gray-400 px-2"></div>

            <img src={Icon3} alt="Icon1" className="w-12 h-12" />
            <h1 className="text-sm ml-3">Accommodation in Prayagraj</h1>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <div
        className="w-11/12 mx-auto my-8
        bg-[#FF9933] rounded-2xl shadow-lg p-4
        "
      >
        <h1 className="text-3xl font-bold text-center text-black">
          Why Choose Us?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold text-[#F49330] text-center">
              Local Experts
            </h1>
            <p className="mt-2">
              We are born and raised here! Our deep knowledge of the city gives
              you an authentic and personalized travel experience.
            </p>
          </div>
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold text-[#F49330] text-center">
              Unique Experiences
            </h1>
            <p className="mt-2">
              Skip the generic tour routes! We take you to hidden gems and
              off-the-beaten-path locations for a memorable journey.
            </p>
          </div>
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold text-[#F49330] text-center">
              Delicious Street Food
            </h1>
            <p className="mt-2">
              Taste the most authentic street foods! From spicy chaat to
              mouth-watering kebabs, we guide you on a food journey like no
              other.
            </p>
          </div>
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold text-[#F49330] text-center">
              New Yet Committed{" "}
            </h1>
            <p className="mt-2">
              We are new, but our passion drives us to go the extra mile,
              ensuring every moment of your trip is memorable and joyful.
            </p>
          </div>
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold text-[#F49330] text-center">
              Personalized & Flexible Tours{" "}
            </h1>
            <p className="mt-2">
              No rigid schedules! We tailor our tours to fit your preferences,
              offering you the flexibility to enjoy at your own pace.
            </p>
          </div>{" "}
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold text-[#F49330] text-center">
              Transparent Pricing{" "}
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

      {/* Trusted by 500+ Devotees  */}
      <div
        className="w-11/12 mx-auto my-8
        bg-[#FF9933] rounded-2xl shadow-lg p-4
        "
      >
        <h1 className="text-3xl font-bold text-center text-black">
          Trusted by 500+ Devotees
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg text-center">
            <p className="mt-2">
              &quot;The travel package was well-organized, and every detail was
              taken care of. Highly recommended!&quot;
            </p>
            <Rating name="read-only" value={5} readOnly className="pt-4" />

            <h1 className="text-xl font-bold text-[#F49330] text-center">
              {" "}
              ~Rahul Verma
            </h1>
          </div>
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg text-center">
            <p className="mt-2">
              &quot;A truly divine experience. The accommodations and travel
              arrangements were excellent!&quot;
            </p>
            <Rating name="read-only" value={5} readOnly className="pt-4" />

            <h1 className="text-xl font-bold text-[#F49330] text-center">
              {" "}
              ~Priya Sharma
            </h1>
          </div>
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg text-center">
            <p className="mt-2">
              &quot;Seamless booking process and great customer support. Made my
              trip stress-free!&quot;
            </p>
            <Rating name="read-only" value={5} readOnly className="pt-4" />

            <h1 className="text-xl font-bold text-[#F49330] text-center">
              {" "}
              ~Ankit Joshi
            </h1>
          </div>
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg text-center">
            <p className="mt-2">
              &quot;The tour was fantastic, but the transport could have been a
              bit more comfortable.&quot;
            </p>
            <Rating name="read-only" value={3} readOnly className="pt-4" />

            <h1 className="text-xl font-bold text-[#F49330] text-center">
              {" "}
              ~Neha Kapoor
            </h1>
          </div>
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg text-center">
            <p className="mt-2">
              &quot;Best pilgrimage tour experience ever! Will definitely
              recommend to my friends.&quot;
            </p>
            <Rating name="read-only" value={5} readOnly className="pt-4" />

            <h1 className="text-xl font-bold text-[#F49330] text-center">
              {" "}
              ~Suresh Nair
            </h1>
          </div>

          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg text-center">
            <p className="mt-2">
              &quot;Good value for money. However, I would have preferred more meal options.&quot;
            </p>
            <Rating name="read-only" value={4} readOnly className="pt-4" />

            <h1 className="text-xl font-bold text-[#F49330] text-center">
              {" "}
              ~Vishal Singh
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
