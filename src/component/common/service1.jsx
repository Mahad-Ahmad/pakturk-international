import React from "react";
import { Link } from "react-router-dom";

const Service1 = () => {
  return (
    <>
      <div className="breadcrumbs ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">Property Services</h1>
                <ul className="breadcrumb-nav"></ul>
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
                marginTop: "5rem",
                textAlign: "left",
                display: "block",
                color: "black",

                fontWeight: "bold",
              }}
              className="wow fadeInUp"
              data-wow-delay=".4s"
            >
              PAKTURK PROPERTIES:
            </h3>
            <h3
              style={{
                marginTop: "1.5rem",
                color: "black",
              }}
              className="wow fadeInUp"
              data-wow-delay=".4s"
            >
              A Vast and Fascinating Country with over 8,000 miles of Coastline.
            </h3>

            <p
              style={{ fontSize: "17px", marginTop: "1rem" }}
              className="wow fadeInUp "
              data-wow-delay=".6s"
            >
              Why invest in Turkey? <br />
              Turkey is the 13th largest economy of the World. Turkey made a
              great progress in every sector to boom the economy especially in
              the real estate sector. The record 1.5 million houses sold out in
              2019.The progress in construction has brought Turkey among the
              most attractive destination of Europe with all the facilities of
              health, education and transportation. Despite the growth in recent
              years, Turkey is still below the average of total leasable area
              per person compared to the European average. This indicates
              potential for further retail growth in Turkey. Investment in
              Turkish Real Estates ensures the Short Term and Long-Term profits
              as well as a reasonable rental income for the investors.
            </p>
            <p
              style={{ fontSize: "17px", marginTop: "1rem" }}
              className="wow fadeInUp "
              data-wow-delay=".6s"
            >
              We can offer you the best deals of the Town and we can advise you
              the best projects to invest as per your priorities. We have ready
              to move and ready to work residential, commercial, agricultural
              and industrial properties and running businesses for sale. Along
              with all above services, additionally we are providing consultancy
              services for Turkish Citizenship, Turkish Short-Term Residence
              Permits, Company Formation and Business Investments in Turkey, in
              this way we provide you complete settlement package under one
              roof. Our competent team of Real Estate Consultants, Lawyers and
              Trade Solutions will plan your movement and settlement based on
              accurate knowledge of Turkish Law and real time market statistics.
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

export default Service1;
