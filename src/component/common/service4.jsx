import React from "react";
import { Link } from "react-router-dom";

const service4 = () => {
  return (
    <>
      <div className="breadcrumbs ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">Trade Services</h1>
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
              PAKTURK TRADE:
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
              Turkey is the best producer of consumable products in the World.
            </h3>

            <p
              style={{ fontSize: "17px", marginTop: "1rem" }}
              className="wow fadeInUp "
              data-wow-delay=".6s"
            >
              Why and What to Import?
              <br />
              Turkey has become the leading manufacturer in all kinds of Packed
              Food, Stationery and Packing Materials, Home Accessories, Electric
              and Electronics Home Appliances, Automotive Parts, Clothing and
              Textiles Products, Iron & Steel, Chemicals, Cement, Construction
              Materials, Glass & Ceramics and Many More Products.
            </p>
            <p
              style={{ fontSize: "17px", marginTop: "1rem" }}
              className="wow fadeInUp "
              data-wow-delay=".6s"
            >
              According to www.tuik.gov.tr the official statistical web portal
              of Turkish Government, In January-October 2020 period, exports
              were 135 billion 617 million dollars, the main partner country for
              exports was Germany with 12 billion 893 million dollars. The
              Germany was followed by the United Kingdom with 9 billion 40
              million dollars, USA with 8 billion 196 million dollars, Iraq with
              7 billion 208 million dollars and Italy with 6 billion 429 million
              dollars. The ratio of the first five countries in total exports
              was 32.3% in January-October 2020.
            </p>
            <p
              style={{ fontSize: "17px", marginTop: "1rem" }}
              className="wow fadeInUp "
              data-wow-delay=".6s"
            >
              We are providing the best quality and competitive prices to our
              valued clients around the globe.
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

export default service4;
