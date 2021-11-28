import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer section">
          <div className="footer-top">
            <div className="container">
              <div className="inner-content">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-footer f-about">
                      <div className="logo">
                        <Link to="/home">
                          <img
                            style={{ width: "25vh" }}
                            src="assets/images/logo/white-logo.svg"
                            alt="#"
                          />
                        </Link>
                      </div>
                      <p>
                        Making the world a better place through constructing
                        elegant hierarchies.
                      </p>
                      <h4 className="social-title">Follow Us On:</h4>
                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/PakTurkInternational"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="lni lni-facebook-filled"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/pakturk_properties/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="lni lni-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/PakturkT"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="lni lni-twitter-original"></i>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://www.youtube.com/c/PakTurkInternationalTurkey"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="lni lni-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-12">
                    <div className="single-footer f-link">
                      <h3>Top Services</h3>
                      <ul>
                        <li>
                          <Link to="/service2">Turkish Citizenship</Link>
                        </li>
                        <li>
                          <Link to="/service2">Turkish Residence Permit</Link>
                        </li>
                        <li>
                          <Link to="/service2">Company Registration </Link>
                        </li>
                        <li>
                          <Link to="/service2">Private Health Insurance</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-12">
                    <div className="single-footer f-link">
                      <h3>Support</h3>
                      <ul>
                        <li>
                          <Link to="/service1"> Real Estate</Link>
                        </li>
                        <li>
                          <Link to="/service2">Consultancy</Link>
                        </li>
                        <li>
                          <Link to="/service3">Tourism</Link>
                        </li>
                        <li>
                          <Link to="/service4">Trade</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-footer newsletter">
                      <h3>Subscribe</h3>
                      <p>Subscribe to our newsletter for the latest updates</p>
                      <form
                        action="#"
                        method="get"
                        target="_blank"
                        className="newsletter-form"
                      >
                        <input
                          name="EMAIL"
                          placeholder="Email address"
                          required="required"
                          type="email"
                        />
                        <div className="button">
                          <button className="sub-btn">
                            <i className="lni lni-envelope"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="container">
              <div className="inner-content">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <p className="copyright-text">
                      © 2022 PakTurk - All Rights Reserved
                    </p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12 ">
                    <div style={{}}>
                      <p
                        className="copyright-owner"
                        style={{ color: "#6c757d" }}
                      >
                        Designed and Developed by{" "}
                        <a
                          style={{ marginRight: 0 }}
                          href="https://technicmentors.com"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Technic Mentors
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <Link to="#" className="scroll-top">
          <i className="lni lni-chevron-up"></i>
        </Link>
      </div>
    );
  }
}

export default Footer;
