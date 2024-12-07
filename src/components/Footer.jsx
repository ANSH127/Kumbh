import React from 'react';
import logo from '../assets/img/logo.png';
import footerImage from '../assets/img/footer.png';

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[#003F50] pt-8">
        <div className="w-full  h-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 text-center text-white sm:px-8">
          <div className="text-center text-[4vw] md:text-[1.5vw] font-medium">
            <h1 className="text-[#ffcc00]">About Us</h1>
            <div className="grid grid-cols-10 sm:flex sm:flex-col">
              <img
                className="col-span-4 w-auto h-auto sm:h-auto self-center mx-auto sm:mt-2 sm:w-32"
                src={logo}
                alt="Logo"
              />
              <p className="col-span-6 font-normal text-[3.0vw] sm:text-[2.5vw] md:text-[1.1vw] mt-2 leading-2 md:leading-6 sm:mx-8 w-[60vw] sm:w-auto text-left">
                Welcome to KumbhMela.com, your ultimate guide to experiencing the spiritual essence of the Kumbh Mela. We are a passionate team committed to bringing you authentic insights, rituals, and services to make your journey memorable. At the heart of India's rich cultural heritage, Kumbh Mela is a celebration of spirituality, faith, and tradition, and we strive to connect you with its deeper meaning.
                <br />
                <br />
                Whether you are seeking information on sacred rituals, iconic bathing dates, or famous temples, our platform serves as your trusted companion. Join us as we uncover the divine and explore the timeless traditions that make Kumbh Mela the largest spiritual gathering on Earth. Let us guide your soul to the holy confluence where faith meets tranquility.
              </p>
            </div>
          </div>

          <div className="text-[4vw] md:text-[1.5vw] font-medium flex flex-col items-center text-center space-y-6 px-4 md:px-0">
            <hr className="border-t-2 border-gray-600 w-[100vw] my-4 md:invisible" />
            <div className="w-full md:w-3/4">
              <h1 className="text-[#ffcc00] mb-2">Contact Us</h1>
              <p className="text-[3.5vw] md:text-[1.2vw] mt-2 leading-6 sm:leading-10 md:leading-7 text-gray-200">
                Email: <a href="mailto:kumbhexperienceindia@gmail.com" className="hover:underline">info@prayagrajkumbhmela.com</a><br />
                Phone: <a href="tel:+911234567890" className="hover:underline">+91 8932951318</a>
              </p>
              <p className="text-[3.5vw] md:text-[1.2vw] mt-4 leading-6 md:leading-7 text-gray-200">
                Address: Mutthiganj, Prayagraj, Uttar Pradesh
              </p>
            </div>
            <hr className="border-t-2 border-gray-600 w-[100vw] md:w-3/4 my-4" />

            <div className="w-full md:w-3/4">
              <h1 className="text-[#ffcc00] mb-2">Follow Us On</h1>
              <div className="flex justify-center gap-8 sm:gap-12 md:gap-6 mt-4 text-[8vw] sm:text-[6vw] md:text-[2vw] text-gray-300">
                <a href="https://www.instagram.com/prayagraj.kumbh.mela/" className="hover:text-[#E1306C]" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="mailto:kumbhexperienceindia@gmail.com" className="hover:text-[#D44638]" aria-label="Gmail">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://wa.me/+918932951318" className="hover:text-[#25D366]" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.linkedin.com/in/prayagraj-kumbh-mela-176b03339/" className="hover:text-[#0077b5]" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61569489230062" className="hover:text-[#1877F2]" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>

            <hr className="border-t-2 border-gray-600 w-[100vw] my-4 md:invisible" />
          </div>

          <div className="text-[3.5vw] md:text-[1.3vw] text-left sm:ml-20 mx-auto mt-4">
            <div className="flex flex-col space-y-2 md:space-y-3 justify-evenly h-full">
              <a href="Blog1.html" className="blog-link transition duration-300 ease-in-out transform hover:scale-110 hover:text-[#ffcc00] hover:opacity-80 hover:underline">
                About Kumbh Mela
              </a>
              <a href="Blog1.html" className="blog-link transition duration-300 ease-in-out transform hover:scale-110 hover:text-[#ffcc00] hover:opacity-80 hover:underline">
                Rituals Of Kumbh
              </a>
              <a href="Blog1.html" className="blog-link transition duration-300 ease-in-out transform hover:scale-110 hover:text-[#ffcc00] hover:opacity-80 hover:underline">
                Tour Enquiry
              </a>
              <a href="Blog1.html" className="blog-link transition duration-300 ease-in-out transform hover:scale-110 hover:text-[#ffcc00] hover:opacity-80 hover:underline">
                Sadhu Rituals
              </a>
              <a href="Blog1.html" className="blog-link transition duration-300 ease-in-out transform hover:scale-110 hover:text-[#ffcc00] hover:opacity-80 hover:underline">
                Bathing Dates
              </a>
              <a href="Blog1.html" className="blog-link transition duration-300 ease-in-out transform hover:scale-110 hover:text-[#ffcc00] hover:opacity-80 hover:underline">
                Famous Temples
              </a>
              <a href="Blog1.html" className="blog-link transition duration-300 ease-in-out transform hover:scale-110 hover:text-[#ffcc00] hover:opacity-80 hover:underline">
                Famous Food Locations
              </a>
              <a href="Blog1.html" className="blog-link transition duration-300 ease-in-out transform hover:scale-110 hover:text-[#ffcc00] hover:opacity-80 hover:underline">
                Mahakumbh Bathing Ghats
              </a>
            </div>
          </div>
        </div>
        <img className="w-full mt-6" src={footerImage} alt="Footer Image" />
      </div>
    </footer>
  );
};

export default Footer;