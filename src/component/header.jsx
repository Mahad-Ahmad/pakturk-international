import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleActive = (id) => {
    setActiveIndex(id);
    // remove the curly braces
  };
  const handleHomeActive = () => {
    setActiveIndex(1);
  };
  const navItem = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Blog", link: "/blog" },
    { id: 5, name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <header className="header navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="nav-inner">
                <nav className="navbar navbar-expand-lg">
                  <Link
                    className="navbar-brand"
                    onClick={handleHomeActive}
                    to="/home"
                  >
                    <img
                      className="img-logo"
                      // style={{ width: 220 }}
                      src="assets/images/logo/white-logo.svg"
                      alt="Logo"
                    />
                  </Link>
                  <button
                    className="navbar-toggler mobile-menu-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" className="navbar-nav ms-auto">
                      {navItem.map((item) => (
                        <li key={item.id} className="nav-item">
                          <Link
                            to={item.link}
                            onClick={() => handleActive(item.id)}
                            className={
                              activeIndex === item.id ? "active" : "unactive"
                            }
                            aria-label="Toggle navigation"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      {/* <li className="nav-item">
                          <Link to="/about" aria-label="Toggle navigation">
                            About
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/services" aria-label="Toggle navigation">
                            Services
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/blog" aria-label="Toggle navigation">
                            Blog
                          </Link>
                        </li> */}

                      {/* <li className="nav-item">
                            <a
                              className="dd-menu collapsed"
                              // href="javascript:void(0)"
                              data-bs-toggle="collapse"
                              data-bs-target="#submenu-1-2"
                              aria-controls="navbarSupportedContent"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                            >
                              About Us
                            </a>
                            <ul className="sub-menu collapse" id="submenu-1-2">
                              <li className="nav-item">
                                <a href="blog-grid.html">Blog Grid</a>
                              </li>
                              <li className="nav-item">
                                <a href="blog-single.html">Blog Single</a>
                              </li>
                            </ul>
                          </li> */}
                      {/* <li className="nav-item">
                          <Link to="/contact" aria-label="Toggle navigation">
                            Contact Us
                          </Link>
                        </li> */}
                    </ul>
                  </div>
                  <div className="button">
                    <Link to="/contact" className="btn">
                      Get started
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

// const Header = () => {
//   const [showHomeIcon, setHomeIcon] = useState(true);
//   const [showAboutIcon, setAboutIcon] = useState(false);
//   const [showServicesIcon, setServicesIcon] = useState(false);
//   const [showContactIcon, setContactIcon] = useState(false);
//   const [showTestimonialsIcon, setTestimonialsIcon] = useState(false);

//   function handleHome() {
//     setHomeIcon(true);
//     setAboutIcon(false);
//     setServicesIcon(false);
//     setContactIcon(false);
//     setTestimonialsIcon(false);

//     console.log(
//       showHomeIcon,
//       showAboutIcon,
//       showServicesIcon,
//       showContactIcon,
//       showTestimonialsIcon
//     );
//   }
//   function handleAbout() {
//     if (!showHomeIcon) {
//       setHomeIcon(false);
//       setAboutIcon(true);
//       setServicesIcon(false);
//       setContactIcon(false);
//       setTestimonialsIcon(false);
//     }
//     console.log(
//       showHomeIcon,
//       showAboutIcon,
//       showServicesIcon,
//       showContactIcon,
//       showTestimonialsIcon
//     );
//   }
//   function handleServices() {
//     if (!showServicesIcon) {
//       setHomeIcon(false);
//       setAboutIcon(false);
//       setServicesIcon(true);
//       setContactIcon(false);
//       setTestimonialsIcon(false);
//     }
//     console.log(
//       showHomeIcon,
//       showAboutIcon,
//       showServicesIcon,
//       showContactIcon,
//       showTestimonialsIcon
//     );
//   }
//   function handleContact() {
//     if (!showContactIcon) {
//       setHomeIcon(false);
//       setAboutIcon(false);
//       setServicesIcon(false);
//       setContactIcon(true);
//       setTestimonialsIcon(false);
//     }
//     console.log(
//       showHomeIcon,
//       showAboutIcon,
//       showServicesIcon,
//       showContactIcon,
//       showTestimonialsIcon
//     );
//   }
//   function handleTestimonials() {
//     if (!showTestimonialsIcon) {
//       setHomeIcon(false);
//       setAboutIcon(false);
//       setServicesIcon(false);
//       setContactIcon(false);
//       setTestimonialsIcon(true);
//     }
//     console.log(
//       showHomeIcon,
//       showAboutIcon,
//       showServicesIcon,
//       showContactIcon,
//       showTestimonialsIcon
//     );

//     return (
//       <div>
//         <div className="preloader">
//           <div className="preloader-inner">
//             <div className="preloader-icon">
//               <span></span>
//               <span></span>
//             </div>
//           </div>
//         </div>

//         <header className="header navbar-area">
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-lg-12">
//                 <div className="nav-inner">
//                   <nav className="navbar navbar-expand-lg">
//                     <Link className="navbar-brand" to="/home">
//                       <img src="assets/images/logo/white-logo.svg" alt="Logo" />
//                     </Link>
//                     <button
//                       className="navbar-toggler mobile-menu-btn"
//                       type="button"
//                       data-bs-toggle="collapse"
//                       data-bs-target="#navbarSupportedContent"
//                       aria-controls="navbarSupportedContent"
//                       aria-expanded="false"
//                       aria-label="Toggle navigation"
//                     >
//                       <span className="toggler-icon"></span>
//                       <span className="toggler-icon"></span>
//                       <span className="toggler-icon"></span>
//                     </button>
//                     <div
//                       className="collapse navbar-collapse sub-menu-bar"
//                       id="navbarSupportedContent"
//                     >
//                       <ul id="nav" className="navbar-nav ms-auto">
//                         <li className="nav-item">
//                           <Link
//                             to="/home"
//                             className={showHomeIcon ? "active" : ""}
//                             aria-label="Toggle navigation"
//                             onClick={handleHome}
//                           >
//                             Home
//                           </Link>
//                         </li>
//                         <li className="nav-item">
//                           <Link
//                             to="/about"
//                             className={showAboutIcon ? "active" : ""}
//                             aria-label="Toggle navigation"
//                             onClick={handleAbout}
//                           >
//                             About
//                           </Link>
//                         </li>
//                         <li className="nav-item">
//                           <Link
//                             to="/services"
//                             aria-label="Toggle navigation"
//                             onClick={handleServices}
//                           >
//                             Services
//                           </Link>
//                         </li>
//                         <li className="nav-item">
//                           <Link
//                             to="/blog"
//                             aria-label="Toggle navigation"
//                             onClick={handleTestimonials}
//                           >
//                             Blog
//                           </Link>
//                         </li>

//                         {/* <li className="nav-item">
//                           <a
//                             className="dd-menu collapsed"
//                             // href="javascript:void(0)"
//                             data-bs-toggle="collapse"
//                             data-bs-target="#submenu-1-2"
//                             aria-controls="navbarSupportedContent"
//                             aria-expanded="false"
//                             aria-label="Toggle navigation"
//                           >
//                             About Us
//                           </a>
//                           <ul className="sub-menu collapse" id="submenu-1-2">
//                             <li className="nav-item">
//                               <a href="blog-grid.html">Blog Grid</a>
//                             </li>
//                             <li className="nav-item">
//                               <a href="blog-single.html">Blog Single</a>
//                             </li>
//                           </ul>
//                         </li> */}
//                         <li className="nav-item">
//                           <Link
//                             to="/contact"
//                             aria-label="Toggle navigation"
//                             onClick={handleContact}
//                           >
//                             Contact Us
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="button">
//                       <Link to="/contact" className="btn">
//                         Get started
//                       </Link>
//                     </div>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>
//       </div>
//     );
//   }
