import React from 'react';

const PoojaServices = () => {
  return (
    <div className="bg-gray-100">
      {/* Background Image Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-20 h-fit"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1662720868850-e60cefb03201?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content Section */}
        <div className="relative flex items-center justify-center lg:justify-between h-full px-4 lg:px-16">

          {/* Left Pooja Names */}
          <div className="hidden lg:block bg-[#F49330] rounded-2xl text-center text-base font-semibold">
            <img
              src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Pooja Services in Prayagraj kumbh mela 2025"
              className="rounded-t-2xl shadow-lg w-40 md:w-48 lg:w-56"
            />
            <div className="p-4">
              <h3 className="text-xl font-extrabold">Popular Rituals</h3>
              <ul>
                <li>Gau Daan</li>
                <li>Pind Daan</li>
                <li>Rudra Abhishek</li>
                <li>Maanglik Dosh Shanti</li>
              </ul>
            </div>
          </div>

          {/* Center Main Section */}
          <div className="flex flex-col w-[80%] lg:w-[45%]">
            <div className="bg-[#F49330] text-center rounded-xl shadow-lg px-6 py-8">
              <a
                href="https://www.prayagrajkumbhmela.com/"
                className="text-lg sm:text-xl font-bold text-gray-800"
              >
                prayagrajkumbhmela.com
              </a>
              <h1 className="mt-2 text-lg sm:text-3xl font-extrabold">
                Book Any Pooja Service For You
              </h1>
              <p className="mt-2 text-sm md:text-base font-semibold">
                Experience divine rituals performed by experienced Tirth
                Purohits. We will take care of all arrangements, you just come.
                Just Call on our numbers or fill enquiry form.
              </p>
              
              <button className="bg-white font-semibold py-2 px-4 mt-4 rounded-2xl shadow hover:bg-orange-100">
                <a href="https://www.prayagrajkumbhmela.com/enquiry">Enquire Now →</a>
              </button>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-2 gap-2 lg:gap-6 text-center px-2 py-6 sm:px-10 bg-[#F49330] rounded-xl mt-6">
              <div className="flex flex-col items-center">
                <p className="text-lg sm:text-3xl font-extrabold">100+</p>
                <p className="text-sm font-semibold">
                  Verified and experienced priests
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg sm:text-3xl font-extrabold">1000+</p>
                <p className="text-sm font-semibold">
                  Poojas conducted in 2019 Kumbh Mela
                </p>
              </div>
            </div>
          </div>

          {/* Right Pooja Names (Mobile Hidden) */}
          <div className="hidden lg:block bg-[#F49330] rounded-2xl text-center text-base font-semibold">
            <img
              src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Pooja Services in Prayagraj kumbh Mela"
              className="rounded-t-2xl shadow-lg w-40 md:w-48 lg:w-56"
            />
            <div className="p-4">
              <h3 className="text-xl font-extrabold">Common Services</h3>
              <ul>
                <li>Grah Shanti</li>
                <li>Navgraha Pooja</li>
                <li>Brahmin Bhojan</li>
                <li>Asthi Visarjan</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PoojaServices;
