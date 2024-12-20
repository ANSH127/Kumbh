// import logo from "../assets/img/logo.png";
import footerImage from "../assets/img/footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#003F50] pt-8 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center px-4 sm:px-6">
        
        {/* About Us Section */}
        <section
          className="text-base md:text-lg font-medium"
          aria-labelledby="footer-about"
        >
          <h2 id="footer-about" className="text-[#ffcc00] text-lg md:text-xl">
            About Us
          </h2>
          <p className="text-sm sm:text-base mt-2 leading-6 text-gray-200 text-wrap">
            Welcome to <strong>www.prayagrajkumbhmela.com</strong>, your guide to experiencing
            the spiritual essence of Kumbh Mela. Dive into authentic insights,
            rituals, and services that celebrate India's cultural heritage.
          </p>
        </section>

        {/* Contact Us Section */}
        <section
          className="text-base md:text-lg font-medium"
          aria-labelledby="footer-contact"
        >
          <h2 id="footer-contact" className="text-[#ffcc00] text-lg md:text-xl">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base leading-6 text-gray-200 mt-2">
            Email:{" "}
            <a
              href="mailto:kumbhexperienceindia@gmail.com"
              className="hover:underline"
            >
              kumbhexperienceindia@gmail.com
            </a>
            <br />
            Phone:{" "}
            <a href="tel:+918932951318" className="hover:underline">
              +91 8932951318
            </a>
          </p>
          <p className="text-sm sm:text-base mt-2 text-gray-200">
            Address: Mutthiganj, Prayagraj, Uttar Pradesh
          </p>
          <div className="flex justify-center gap-4 mt-4 text-2xl md:text-xl">
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
        </section>

        {/* Important Links Section */}
        <section
          className="text-base md:text-lg font-medium"
          aria-labelledby="footer-links"
        >
          <h2 id="footer-links" className="text-[#ffcc00] text-lg md:text-xl mb-2">
            Important Links
          </h2>
          <nav className="flex flex-col space-y-2">
            <Link
              to="/AboutUs"
              className="hover:text-[#ffcc00] hover:underline"
            >
              About Us
            </Link>
            <Link
              to="/PrivacyPolicy"
              className="hover:text-[#ffcc00] hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/RefundPolicy"
              className="hover:text-[#ffcc00] hover:underline"
            >
              Refund Policy
            </Link>
            <Link
              to="/enquiry"
              className="hover:text-[#ffcc00] hover:underline"
            >
              Tour Enquiry
            </Link>
            <Link
              to="/TermsAndConditions"
              className="hover:text-[#ffcc00] hover:underline"
            >
              Terms and Conditions
            </Link>
          </nav>
        </section>

        {/* Explore Links Section */}
        <section
          className="text-base md:text-lg font-medium"
          aria-labelledby="footer-explore"
        >
          <h2 id="footer-explore" className="text-[#ffcc00] text-lg md:text-xl mb-2">
            Explore
          </h2>
          <nav className="flex flex-col space-y-2">
            <Link
              to="/AboutUs"
              className="hover:text-[#ffcc00] hover:underline"
            >
              About Kumbh Mela
            </Link>
            <a href="Blog1.html" className="hover:text-[#ffcc00] hover:underline">
              Rituals of Kumbh
            </a>
            <a href="Blog1.html" className="hover:text-[#ffcc00] hover:underline">
              Sadhu Rituals
            </a>
            <a href="Blog1.html" className="hover:text-[#ffcc00] hover:underline">
              Bathing Dates
            </a>
            <a href="Blog1.html" className="hover:text-[#ffcc00] hover:underline">
              Famous Temples
            </a>
          </nav>
        </section>
      </div>

      {/* Footer Image */}
      <div className="mt-6">
        <img
          className="w-full"
          src={footerImage}
          alt="Mahakumbh Tour Packages Footer"
        />
      </div>
    </footer>
  );
};

export default Footer;
