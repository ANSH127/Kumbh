
import A1 from "../assets/img/a1.png";

import Icon1 from "../assets/img/icon1.png";
import Icon2 from "../assets/img/icon2.png";
import Icon3 from "../assets/img/icon3.png";
export default function Aboutintro() {
  return (
    <div className="w-11/12 bg-[#F4F2E9] mx-auto my-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 shadow-lg">
        <div>
          <img src={A1} alt="A1" className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h1 className="text-3xl font-bold text-center text-[#F49330] ">
            MAHAKUMBH MELA PRAYAGRAJ 2025
          </h1>
          <p className="text-justify mt-4 p-3">
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
          <div className="flex flex-col md:flex-row justify-center mt-4">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={Icon1} alt="Icon1" className="w-12 h-12" />
              <h1 className="text-sm ml-3">
                Shahi snan dates of MahaKumbh 2025
              </h1>
            </div>
            <div className="h-12 border-l-2 border-gray-400 px-2 hidden md:block"></div>
            <div className="flex items-center mb-4 md:mb-0">
              <img src={Icon2} alt="Icon2" className="w-12 h-12" />
              <h1 className="text-sm ml-3">
                Top Attractions of Prayagraj and Mahakumbh
              </h1>
            </div>
            <div className="h-12 border-l-2 border-gray-400 px-2 hidden md:block"></div>
            <div className="flex items-center">
              <img src={Icon3} alt="Icon3" className="w-12 h-12" />
              <h1 className="text-sm ml-3">Accommodation in Prayagraj</h1>
            </div>
          </div>
        </div>
      </div>
  )
}
