import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <div className="breadcrumbs">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title">About Us</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>About Us</li>
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
                style={{ marginTop: "6rem" }}
                className="wow fadeInUp"
                data-wow-delay=".4s"
              >
                About Us
              </h2>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                PAKTURK INTERNATIONAL DIŞ TICARET LIMITED ŞIRKETI as an
                association of companies, a team of experienced professionals,
                are offering multiple and multidimensional services to our
                valuable clients around the globe. Being in Istanbul, the
                business and cultural hub of Turkey, our services expand from
                Real Estate to Consultancy Service and from International Trade
                to Tourism Services.
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                As Pakturk Properties we can offer you the best deals of the
                Town and we can advise you the best projects to invest as per
                your priorities. We have ready to move and ready to work
                residential, commercial, agricultural and industrial properties
                and running businesses for sale. We are Authorised Sales Agents
                of more than 50 Mega Projects of Istanbul, Antalya, Edirne,
                Bodrum, Fatihe and Marmaris.
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                We as Pakturk Consultancy, are providing consultancy services
                for Turkish Citizenship, Turkish Short-Term Residence Permits,
                Company Formation in Turkey and Business Investments. Our
                competent team of Chartered Accountants, Lawyers, Consultants
                and Analytics provide these services based on accurate knowledge
                of Turkish Law and real time market statistics.
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                As Pakturk Trade we work as a bridge between Turkish
                Manufacturers and Buyers across the world. We are authorised
                sales agents of several Turkish Manufacturing Groups and can
                find you the best quality and price for your desired products.
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                We as Pakturk Tourism, are working as a destination management
                company (DMC) with local knowledge, expertise and resources,
                working in the design and implementation of events, activities,
                tours, transportation and program logistics.
              </p>
              <h2
                style={{ marginTop: "5rem" }}
                className="wow fadeInUp"
                data-wow-delay=".4s"
              >
                Our Vision
              </h2>
              <p className="wow fadeInUp para" data-wow-delay=".6s">
                To become one of the most reliable, trustworthy and competent
                local partners for all settlement and trade solutions.
              </p>
              <h2
                style={{ marginTop: "5rem" }}
                className="wow fadeInUp"
                data-wow-delay=".4s"
              >
                Our Mission
              </h2>
              <p className="wow fadeInUp para" data-wow-delay=".6s">
                To provide multidimensional services to our worldwide customers
                through our competent, professional, experienced team, well
                calculated forecasts, time bound shipments and trustworthy
                business relations.
              </p>
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

export default About;
