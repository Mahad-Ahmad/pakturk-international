import React from "react";
import { Link } from "react-router-dom";

const Service3 = () => {
  return (
    <>
      <div className="breadcrumbs ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">Tourism Services</h1>
                <ul className="breadcrumb-nav">
                  {/* <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>Services</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="section-title1">
            <h2
              style={{ marginTop: "5rem" }}
              className="wow fadeInUp"
              data-wow-delay=".4s"
            >
              Our Services
            </h2>
            <h3
              style={{
                marginTop: "4rem ",
                textAlign: "left",
                display: "block",
                color: "black",
                fontFamily: "Spartan, sans-serif",
                fontWeight: "bold",
              }}
              className="wow fadeInUp"
              data-wow-delay=".4s"
            >
              PAKTURK TOURISM:
            </h3>
            <h3
              style={{
                margin: "1.5rem",
                color: "black",
                fontFamily: "Spartan, sans-serif",
              }}
              className="wow fadeInUp"
              data-wow-delay=".4s"
            >
              Pass through the Footprints of Byzantines, Romans and Ottoman.
            </h3>

            <p
              style={{ fontSize: "17px", marginTop: "1rem" }}
              className="wow fadeInUp "
              data-wow-delay=".6s"
            >
              Love nature? Let’s explore Turkey with us,
              <br />
              Turkey, the gate way to East and West, bridging the two
              continents, located along the Black Sea and the Mediterranean, the
              land of history and civilizations has become the most popular
              tourist destination across the globe.
            </p>
            <p
              style={{ fontSize: "17px", marginTop: "1rem" }}
              className="wow fadeInUp "
              data-wow-delay=".6s"
            >
              Historical Heritage, Natural Wonders, Delicious Cuisine, Iconic
              Sight Seeing, Green Flag Beaches, State of the Art Fun Parks,
              Memorable Moments on Hot Air Balloon, Traditional Hamams (Baths)
              and Massage Centers, World Class Brands for Shopping, Fascinating
              Turkish Music and Dance on Sailing Cruise in Open Sea and the
              peaceful Islands are the main attractions for travelers to visit
              Turkey.
            </p>
            <p
              style={{ fontSize: "17px", marginTop: "1rem" }}
              className="wow fadeInUp "
              data-wow-delay=".6s"
            >
              We are offering the best tourism services like Airport Transfers,
              Hotel Reservations, Daily Group Tours, Customized Private Tours,
              Popular Cruise Dinners, Hot Air Balloon Reservations, Conference
              and Trade Fair Management, Domestic Air Tickets, Educational and
              Industrial Tours.
            </p>
            <p
              style={{ fontSize: "17px", marginTop: "1rem" }}
              className="wow fadeInUp "
              data-wow-delay=".6s"
            >
              Experiencing Turkey with our professional expertise, world class
              hospitality, 24/7 customer care back up and fair pricing policy
              makes your travel a life time pleasant memory.
            </p>
          </div>
        </div>
      </div>
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
                  We can offer you the best deals of the Town and we can advise
                  you the best projects to invest as per your priorities.
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
    </>
  );
};

export default Service3;
