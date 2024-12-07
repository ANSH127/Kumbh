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
        <div className="w-11/12 mx-auto my-8
        bg-[#FF9933] rounded-2xl shadow-lg p-4
        ">
            <h1 className="text-3xl font-bold text-center text-black">
            Why Choose Us?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg">
                <h1 className="text-xl font-bold text-[#F49330]">Expert Guidance</h1>
                <p className="mt-2">
                Our team of experienced professionals is dedicated to providing
                you with authentic insights, guidance, and support throughout your
                spiritual journey.
                </p>
            </div>
            <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg">
                <h1 className="text-xl font-bold text-[#F49330]">Customized Tours</h1>
                <p className="mt-2">
                We offer a range of customizable tour packages to suit your
                preferences, budget, and requirements, ensuring a memorable and
                hassle-free experience.
                </p>
            </div>
            <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg">
                <h1 className="text-xl font-bold text-[#F49330]">24/7 Support</h1>
                <p className="mt-2">
                Our dedicated customer support team is available round the clock
                to address your queries, provide assistance, and ensure a
                seamless experience.
                </p>
            </div>
            </div>
        </div>

      <Footer />
    </div>
  );
}
