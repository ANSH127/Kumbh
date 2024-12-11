import logo from "../assets/img/logo.png";
import footerImage from "../assets/img/footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#003F50] pt-8 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:px-8">
        {/* About Us Section */}
        <div className="text-[4vw] md:text-[1.5vw] font-medium">
          <h1 className="text-[#ffcc00]">About Us</h1>
          <img
            className="w-24 h-auto mx-auto mt-2"
            src={logo}
            alt="Logo"
          />
          <p className="text-[3vw] sm:text-[2vw] md:text-[1.1vw] mt-2 leading-5 md:leading-6 text-gray-200">
            Welcome to KumbhMela.com, your guide to experiencing the spiritual
            essence of Kumbh Mela. Dive into authentic insights, rituals, and
            services that celebrate India's cultural heritage.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="text-[4vw] md:text-[1.5vw] font-medium">
          <h1 className="text-[#ffcc00]">Contact Us</h1>
          <p className="text-[3.5vw] md:text-[1.2vw] leading-6 text-gray-200">
            Email:{" "}
            <a
              href="mailto:info@prayagrajkumbhmela.com"
              className="hover:underline"
            >
              info@prayagrajkumbhmela.com
            </a>
            <br />
            Phone:{" "}
            <a href="tel:+918932951318" className="hover:underline">
              +91 8932951318
            </a>
          </p>
          <p className="text-[3.5vw] md:text-[1.2vw] mt-2 leading-6 text-gray-200">
            Address: Mutthiganj, Prayagraj, Uttar Pradesh
          </p>
          <div className="flex justify-center gap-6 mt-4 text-[6vw] md:text-[2vw]">
            <a
              href="https://www.instagram.com/prayagraj.kumbhmela/"
              className="hover:text-[#E1306C]"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="mailto:kumbhexperienceindia@gmail.com"
              className="hover:text-[#D44638]"
              aria-label="Gmail"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://wa.me/+918932951318"
              className="hover:text-[#25D366]"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/prayagraj-kumbh-mela-176b03339/"
              className="hover:text-[#0077b5]"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61569489230062"
              className="hover:text-[#1877F2]"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        {/* Blogs Links Section */}
        <div className="text-[3.5vw] md:text-[1.3vw] font-medium">
          <h1 className="text-[#ffcc00] mb-2">Explore</h1>
          <div className="flex flex-col space-y-2">
            <a
              href="Blog1.html"
              className="hover:text-[#ffcc00] hover:underline"
            >
              About Kumbh Mela
            </a>
            <a
              href="Blog1.html"
              className="hover:text-[#ffcc00] hover:underline"
            >
              Rituals Of Kumbh
            </a>
            <a
              href="Blog1.html"
              className="hover:text-[#ffcc00] hover:underline"
            >
              Tour Enquiry
            </a>
            <a
              href="Blog1.html"
              className="hover:text-[#ffcc00] hover:underline"
            >
              Sadhu Rituals
            </a>
            <a
              href="Blog1.html"
              className="hover:text-[#ffcc00] hover:underline"
            >
              Bathing Dates
            </a>
            <a
              href="Blog1.html"
              className="hover:text-[#ffcc00] hover:underline"
            >
              Famous Temples
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <img className="w-full" src={footerImage}
         alt="Footer Image" />
      </div>
    </footer>
  );
};

export default Footer;
