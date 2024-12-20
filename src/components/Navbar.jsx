import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const closeNavbar = (event) => {
    if (!event.target.closest('#navbar-hamburger') && !event.target.closest('#hamburger-btn')) {
      setIsNavbarActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeNavbar);
    return () => {
      document.removeEventListener('click', closeNavbar);
    };
  }, []);

  const getLinkClass = (path) => {
    const isActive = location.pathname === path || (path === '/packages' && /^\/packages\/.+/.test(location.pathname)) || (path === '/blogs' && /^\/blog\/.+/.test(location.pathname)) || (path === '/updates' && /^\/update\/.+/.test(location.pathname));
    return isActive ? 'bg-[#F88820] rounded-lg px-5 py-2 lg:px-9' : 'hover-effect';
  };

  return (
    <nav>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 hidden md:flex justify-between bg-black bg-opacity-10 rounded-b-lg w-[70%] lg:w-[50%] px-5 py-3 items-center font-medium text-[1.5vw] lg:text-[14px] text-black z-10 mb-[10%]">
        <Link to="/" className={getLinkClass('/')}>Home</Link>
        <Link to="/blogs" className={getLinkClass('/blogs')}>Blogs</Link>
        <Link to="/updates" className={getLinkClass('/updates')}>Mela Updates</Link>
        <Link to="/packages" className={getLinkClass('/packages')}>Packages</Link>
        <Link to="/enquiry" className={getLinkClass('/enquiry')}>Enquire Now</Link>
      </div>

      <div className="max-w-screen-xl items-center mx-auto md:hidden flex justify-end">
        <button
          id="hamburger-btn"
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 sm:w-12 sm:h-12 text-black rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black fixed top-[2%] right-[2%] font-bold"
          onClick={toggleNavbar}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div id="navbar-hamburger" className={`w-full ${isNavbarActive ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${getLinkClass('/')}`}>
              <span className="material-symbols-outlined icon">home</span>
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className={`nav-link ${getLinkClass('/blogs')}`}>
              <span className="material-symbols-outlined icon">ink_pen</span>
              <span>Blogs</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/updates" className={`nav-link ${getLinkClass('/updates')}`}>
              <span className="material-symbols-outlined icon">photo_library</span>
              <span>Mela Updates</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/packages" className={`nav-link ${getLinkClass('/packages')}`}>
              <span className="material-symbols-outlined icon">box</span>
              <span>Packages</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/enquiry" className={`nav-link ${getLinkClass('/enquiry')}`}>
              <span className="material-symbols-outlined icon">contact_support</span>
              <span>Enquire Now</span>
            </Link>
          </li>
        </ul>

      {/* Social Media Links */}
      <div className="flex space-x-6 justify-center mt-8">
        <a
          href="https://www.facebook.com/people/Prayagraj-Kumbh-Mela/61569489230062/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <i className="fab fa-facebook-square"></i>
        </a>
        <a
          href="https://www.instagram.com/prayagraj.kumbhmela/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://x.com/PrayagrajIndia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/prayagraj-kumbh-mela-176b03339/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col mt-8 bg-white text-black px-2 rounded-lg shadow-lg mx-2">
        <p className="font-bold text-center">Need Help?</p>
        <p className='text-xs text-center'>Call: +91 8932951318</p>
        <span className='text-xs text-center'>Mail:
        <p className='text-xs text-center'> kumbhexperienceindia@gmail.com</p>
        </span>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;