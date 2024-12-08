import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const closeNavbar = (event) => {
    if (!event.target.closest('#navbar-hamburger') && !event.target.closest('#hamburger-btn')) {
      setIsNavbarActive(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', closeNavbar);
    return () => {
      document.removeEventListener('click', closeNavbar);
    };
  }, []);

return (
    <nav>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 hidden md:flex justify-between bg-black bg-opacity-10 rounded-b-lg w-[70%] lg:w-[50%] px-5 py-3 items-center font-medium text-[1.5vw] lg:text-[14px] text-black z-10 mb-[10%]">
            <Link to="/" className="hover-effect bg-[#F88820] rounded-lg px-5 py-2 lg:px-9">Home</Link>
            <a href="Blog1.html" className="hover-effect">Blogs</a>
            <a href="Gallery.html" className="hover-effect">Picture Gallery</a>
            <Link to="/Packages" className="hover-effect">Packages</Link>
            <a href="Enquiry.html" className="hover-effect bg-[#F88820] rounded-lg px-5 py-2 lg:px-9">Enquire Now</a>
        </div>

        <div className="max-w-screen-xl items-center mx-auto px-4 py-2 md:hidden flex justify-end">
            <button
                id="hamburger-btn"
                type="button"
                className="inline-flex items-center justify-center p-2 w-10 h-10 sm:w-12 sm:h-12 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black fixed top-[2%] right-[2%]"
                onClick={toggleNavbar}
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black font-bold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>

            <div id="navbar-hamburger" className={`w-full ${isNavbarActive ? 'active' : ''} `}>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="index.html" className="nav-link hover-effect">
                            <span className="material-symbols-outlined icon">home</span>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="Blog1.html" className="nav-link hover-effect">
                            <span className="material-symbols-outlined icon">ink_pen</span>
                            <span>Blogs</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="Gallery.html" className="nav-link hover-effect">
                            <span className="material-symbols-outlined icon">photo_library</span>
                            <span>Picture Gallery</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="Packages.html" className="nav-link hover-effect">
                            <span className="material-symbols-outlined icon">box</span>
                            <span>Packages</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="Enquiry.html" className="nav-link hover-effect">
                            <span className="material-symbols-outlined icon">contact_support</span>
                            <span>Enquiry Form</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="AboutUs.html" className="nav-link hover-effect">
                            <span className="material-symbols-outlined icon">group</span>
                            <span>About Us</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
};

export default Navbar;