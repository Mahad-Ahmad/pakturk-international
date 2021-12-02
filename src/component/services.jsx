import React, { Component } from "react";
import { Link } from "react-router-dom";

class Services extends Component {
  render() {
    return (
      <div>
        <div className="breadcrumbs ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title">Service's</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>Services</li>
                  </ul>
                </div>
              </div>
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
                A Vast and Fascinating Country with over 8,000 miles of
                Coastline.
              </h3>

              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                Why invest in Turkey? <br />
                Turkey is the 13th largest economy of the World. Turkey made a
                great progress in every sector to boom the economy especially in
                the real estate sector. The record 1.5 million houses sold out
                in 2019.The progress in construction has brought Turkey among
                the most attractive destination of Europe with all the
                facilities of health, education and transportation. Despite the
                growth in recent years, Turkey is still below the average of
                total leasable area per person compared to the European average.
                This indicates potential for further retail growth in Turkey.
                Investment in Turkish Real Estates ensures the Short Term and
                Long-Term profits as well as a reasonable rental income for the
                investors.
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                We can offer you the best deals of the Town and we can advise
                you the best projects to invest as per your priorities. We have
                ready to move and ready to work residential, commercial,
                agricultural and industrial properties and running businesses
                for sale. Along with all above services, additionally we are
                providing consultancy services for Turkish Citizenship, Turkish
                Short-Term Residence Permits, Company Formation and Business
                Investments in Turkey, in this way we provide you complete
                settlement package under one roof. Our competent team of Real
                Estate Consultants, Lawyers and Trade Solutions will plan your
                movement and settlement based on accurate knowledge of Turkish
                Law and real time market statistics.
              </p>

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
                PAKTURK CONSULTANCY:
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
                Make Turkey, Your second Home.
              </h3>

              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                What are best Settlement Solutions,
                <br />
                Turkey is a large and charming market with plenty of export
                opportunities for exporters. It is home to both large
                multinationals and local businesses with a strong
                entrepreneurial culture. Country’s prospects are positive and
                there is room for growth. Turkey is a rapidly developing and
                increasingly sophisticated market. It has a growing middle class
                and domestic consumer base of more than 84 million people.
                Turkey’s population is one of the youngest and fastest growing
                in Europe, predicted to reach nearly 87 million by 2023.
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                Turkey straddles both Europe and Asia and borders a range of
                countries. Its strategic location means it can act as a
                springboard for manufacturers, traders and service renders.
                Locating yourself in Istanbul, the business hub of the country
                will open the doors of new business opportunities in markets
                such as Europe, UK, USA, Canada, Central Asia, Africa, Balkan
                States and South Asia.
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                We have a professional, competent and experienced Team of Real
                Estate Consultants, Immigration Experts, Lawyers and Chartered
                Accountants. Our offered services are Real Estate Management
                (Sale / Purchase / Rental Management), Business Investment
                (Business Proposal to Turn Key Services), Turkish Citizenship,
                Short Term Residence Permit, Renewal / Extension of Short-Term
                Residence Permit, Company Registration, Long Term Residence
                Permit and Work Permits.
              </p>
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
                continents, located along the Black Sea and the Mediterranean,
                the land of history and civilizations has become the most
                popular tourist destination across the globe.
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                Historical Heritage, Natural Wonders, Delicious Cuisine, Iconic
                Sight Seeing, Green Flag Beaches, State of the Art Fun Parks,
                Memorable Moments on Hot Air Balloon, Traditional Hamams (Baths)
                and Massage Centers, World Class Brands for Shopping,
                Fascinating Turkish Music and Dance on Sailing Cruise in Open
                Sea and the peaceful Islands are the main attractions for
                travelers to visit Turkey.
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                We are offering the best tourism services like Airport
                Transfers, Hotel Reservations, Daily Group Tours, Customized
                Private Tours, Popular Cruise Dinners, Hot Air Balloon
                Reservations, Conference and Trade Fair Management, Domestic Air
                Tickets, Educational and Industrial Tours.
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
                Turkey has become the leading manufacturer in all kinds of
                Packed Food, Stationery and Packing Materials, Home Accessories,
                Electric and Electronics Home Appliances, Automotive Parts,
                Clothing and Textiles Products, Iron & Steel, Chemicals, Cement,
                Construction Materials, Glass & Ceramics and Many More Products.
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                According to www.tuik.gov.tr the official statistical web portal
                of Turkish Government, In January-October 2020 period, exports
                were 135 billion 617 million dollars, the main partner country
                for exports was Germany with 12 billion 893 million dollars. The
                Germany was followed by the United Kingdom with 9 billion 40
                million dollars, USA with 8 billion 196 million dollars, Iraq
                with 7 billion 208 million dollars and Italy with 6 billion 429
                million dollars. The ratio of the first five countries in total
                exports was 32.3% in January-October 2020.
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

export default Services;
