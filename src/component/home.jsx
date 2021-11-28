import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <section className="hero-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="hero-content">
                  <h4 className="wow fadeInUp" data-wow-delay=".2s">
                    Be The Game Changer
                  </h4>
                  <h1 className="wow fadeInUp" data-wow-delay=".4s">
                    Accelerate Your Buisness Growth
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    Helping You Grow Your Business Exponentially By
                    <br /> offering multiple and multidimensional
                    <br /> services around the globe.
                  </p>
                  <div className="button wow fadeInUp" data-wow-delay=".8s">
                    <Link to="/services" className="btn ">
                      Discover More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <div className="hero-image">
                  <img
                    className="main-image"
                    src="assets/images/hero/hero-image.png"
                    alt="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="services section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h3 className="wow zoomIn" data-wow-delay=".2s">
                    What we offer
                  </h3>
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    Our Services
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    We can offer you the best deals of the Town and we can
                    advise you the best projects to invest as per your
                    priorities.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <Link to="/service1">
                  <div className="single-service">
                    <div className="main-icon">
                      <i className="lni lni-grid-alt"></i>
                    </div>
                    <h4 className="text-title">PakTurk Properties</h4>
                    <p style={{ color: "#727272" }}>
                      A Vast and Fascinating Country with over 8,000 miles of
                      Coastline.
                    </p>
                  </div>
                </Link>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <Link to="/service2">
                  <div className="single-service">
                    <div className="main-icon">
                      <i className="lni lni-keyword-research"></i>
                    </div>
                    <h4 className="text-title">PakTurk Consultancy</h4>
                    <p style={{ color: "#727272" }}>
                      Turkey is a rapidly developing and increasingly
                      sophisticated market.
                    </p>
                  </div>
                </Link>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <Link to="/service3">
                  {" "}
                  <div className="single-service">
                    <div className="main-icon">
                      <i className="lni lni-vector"></i>
                    </div>
                    <h4 className="text-title">PakTurk Tourism</h4>
                    <p style={{ color: "#727272" }}>
                      Pass through the Footprints of Byzantines, Romans and
                      Ottoman.
                    </p>
                  </div>
                </Link>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <Link to="/service4">
                  {" "}
                  <div className="single-service">
                    <div className="main-icon">
                      <i className="lni lni-display-alt"></i>
                    </div>
                    <h4 className="text-title">PakTurk Trade</h4>
                    <p style={{ color: "#727272" }}>
                      Turkey is the best producer of consumable products in the
                      World.
                    </p>
                  </div>
                </Link>
              </div>
              {/* <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-service">
                  <div className="main-icon">
                    <i className="lni lni-cloud-network"></i>
                  </div>
                  <h4 className="text-title">Cloud Computing</h4>
                  <p>
                    Invest in Bitcoin on the regular or save with one of the
                    highest interest rates on the market.
                  </p>
                </div>
              </div> */}
              {/* <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="single-service">
                  <div className="main-icon">
                    <i className="lni lni-display-alt"></i>
                  </div>
                  <h4 className="text-title">Graphics Design</h4>
                  <p>
                    Invest in Bitcoin on the regular or save with one of the
                    highest interest rates on the market.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <section className="about section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <div className="image wow fadeInLeft" data-wow-delay=".2s">
                  <img src="assets/images/about/about-image.jpg" alt="#" />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="content wow fadeInRight" data-wow-delay=".4s">
                  <h4>Make Turkey Your Second Home</h4>
                  <h2>
                    Turkey has become the Most Favourite Destination for
                    International Investors.
                  </h2>
                  <p>
                    We will assist you at each step to your re-location &
                    settlement process in Turkey. Either it is buying a home for
                    your family or setting a profitable business, we will be
                    your trustworthy partners in Turkey.
                  </p>
                  <div className="list">
                    <div className="single-list">
                      <div className="list-icon">
                        <i className="lni lni-checkmark"></i>
                      </div>
                      <h4 style={{ marginTop: "1px" }}>
                        Turkish Citizenship by Investment
                      </h4>
                      {/* <p>Quis autem vel eum reprehenderit</p> */}
                    </div>
                    <div className="single-list ">
                      <div className="list-icon ">
                        <i className="lni lni-checkmark"></i>
                      </div>
                      <h4 style={{ marginTop: "1px" }}>
                        {" "}
                        Turkish Short Term Residence Permit
                      </h4>
                      {/* <p>Quis autem vel eum reprehenderit</p> */}
                    </div>
                    <div className="single-list ">
                      <div className="list-icon ">
                        <i className="lni lni-checkmark"></i>
                      </div>
                      <h4 style={{ marginTop: "1px" }}>
                        {" "}
                        Company Registration & Business Setup in Turkey
                      </h4>
                      {/* <p>Quis autem vel eum reprehenderit</p> */}
                    </div>
                    <div className="single-list ">
                      <div className="list-icon">
                        <i className="lni lni-checkmark"></i>
                      </div>
                      <h4>Turkish Work Permit</h4>
                      {/* <p>Quis autem vel eum reprehenderit</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="shadow">
          <section className=" shadow block" data-aos="zoom-in">
            {/* <header className="block__header">
            <h2>What our Customers are Saying</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              ipsam.
            </p>
          </header> */}

            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h2
                    style={{ marginTop: "5rem" }}
                    className="wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    What our Customers are Saying
                  </h2>
                  {/* <p
                  style={{ fontSize: "17px", marginTop: "1rem" }}
                  className="wow fadeInUp "
                  data-wow-delay=".6s"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                  ipsam.
                </p> */}
                </div>
              </div>
            </div>
            <div className="container1">
              <div className="card testimonial">
                <div className="grid grid--1x2">
                  <div className="testimonial__image">
                    <img
                      // style={{ height: 380, objectFit: "cover" }}
                      src="assets/images/testimonial.jpg"
                      alt="A happy, smiling customer"
                    />
                    {/* <span className="icon-container icon-container--accent">
                    <svg className="icon--white icon--small">
                      <use href="assets/images/sprite.svg#quotes"></use>
                    </svg>
                  </span> */}
                  </div>

                  <blockquote className="quote">
                    <p
                      className="quote__text wow fadeInUp"
                      style={{ fontSize: "17px", marginTop: "1rem" }}
                      data-wow-delay=".6s"
                    >
                      PakTurk helped my business and I know they’ll help yours.
                      After our meetings I now have a much better plan and can
                      actually see the end results. Thank you Pakturk team
                    </p>
                    <footer>
                      <div className=" media wow fadeInUp" data-wow-delay=".6s">
                        <div
                          className="media__image"
                          style={{ marginTop: "1.5rem" }}
                        >
                          <svg className="icon icon--primary quote__line">
                            <use href="assets/images/sprite.svg#line"></use>
                          </svg>
                        </div>
                        <div className="media__body">
                          <p
                            data-wow-delay=".6s"
                            style={{
                              marginTop: "1rem",
                              fontSize: "20px",
                              fontFamily: "Spartan, sans-serif",
                            }}
                            className="wow fadeInUp media__title quote__author"
                          >
                            Muhammad Mushtaq Butt
                          </p>
                          <div className="wow fadeInUp " data-wow-delay=".4s">
                            <p
                              style={{
                                marginTop: "1rem",
                                fontSize: "14px",
                                color: "#7e57ff",
                                fontFamily: "Spartan, sans-serif",
                              }}
                              className="quote__organization"
                            >
                              CEO AL BADAR ENGINEERING COMPANY (PVT) LTD
                            </p>
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="call-action">
          <div className="container">
            <div className="inner-content">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-7 col-12">
                  <div className="text">
                    <h2>
                      Turkey
                      <br />{" "}
                      <span>
                        {" "}
                        A Vast and Fascinating Country With Over 8,000 Miles of
                        Coastline.
                      </span>
                    </h2>
                    <p className="style">Make Turkey, Your second Home.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5 col-12">
                  <div className="button">
                    <Link to="/contact" className="btn">
                      Let's Go
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
