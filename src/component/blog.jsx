import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div>
        <div className="breadcrumbs">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title">Blog</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <Link to="/home">Services</Link>
                    </li>
                    <li>Blog</li>
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
                Life in Turkey
              </h2>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                Turkey, the gateway between Asia and Europe enjoys a unique
                geographical location alongside the Black Sea and the
                Mediterranean. It has a centuries-old civilization spanning the
                Byzantine and Ottoman eras. Its rich history, culture and a
                strong economy makes it one of the most popular tourist and
                investment destination around the globe.
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                A unique historical heritage, colors of enriched culture,
                natural wonders, delicious cuisines, iconic sights, blue flag
                beaches, state-of-the-art amusement parks, rides on helicopters
                and hot air balloons, exotic Turkish music and dances on sea
                cruises to idyllic islands, traditional bath and massage centers
                and world class shopping malls, the country has something for
                every traveler. By hosting the highest number of tourists ever
                in 2019, Turkey became the 6th most visited country in the
                world, according to recently revealed figures by the UNWTO
                (United Nations World Tourism Organization).
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                Located at the crossroads of Europe and Asia and having a
                strategic position between the Eastern and Western world, Turkey
                has become the safest investment place for global business
                community. Turkey's impressive growth performance and structural
                reforms implemented over the past decade have landed it on the
                radar of many international investors. According to Ey’s
                Attractiveness Survey, Europe, Turkey became the 7th most
                popular FDI (Foreign Direct Investment) destination of Europe in
                2018. Up until 2002, total FDI into Turkey stood only at USD 15
                billion while the country has since attracted around USD 209
                billion of FDI during the 2003-2018 period. As of end-2018, the
                number of companies with foreign capital in Turkey hit 65,533,
                up from 5,600 in 2002.
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                Turkey does not only lay at the junction of the two continents,
                it also gives you a beautiful combination of cultures emerging
                from the East and West. Along with its own unique cultural
                history and strong social structure, Turkey has ensured the
                freedoms of liberal West as well as guarantees the choice of
                traditional Eastern lifestyle. Hence, Turkey not only is a hot
                location for investment but also provides a world class living
                experience full of luxuries to people who move here for an
                economical living from the West or for a lavish environment from
                the East.
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                With the freedom one enjoys here as an expat and the
                multicultural society its metropolitan cities have emanated in,
                it takes no trouble to find your home taste or enjoy the living
                city you else could enjoy only in your home country. The
                welcoming nature of its inhabitants puts you at extra comfort to
                wear, eat and live as per your likes. This probably is the
                reason that its cities are not only known for their beautiful
                mosques but are also home to historical churches and synagogues.
                Interestingly, should one want to move to this beautiful
                destination, your choice is not restricted to only big populated
                cities, many peaceful towns and villages along the beautiful
                coasts of Marmara and Black Sea offer you peace yet are full of
                luxuries which you elsewhere would just enjoy in the big cities.
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                The most obvious concerns of an expat in a new country are
                health, education and security. Education is totally free for
                all local and foreign residents. Turkey is a famous medical
                treatment destination for whole Gulf, Europe, UK and USA because
                of its reasonable cost and high standards as compared to any of
                the European country. You will be entitled to benefit from the
                world’s finest health, education and law enforcement systems in
                Turkey. Moreover you will enjoy the fool proof sanitation and
                public hygiene, uninterrupted utility supplies, finest public
                transportation system, fresh and healthy food items, economical
                shopping experience at hundreds of modern shopping malls with
                national and international brands, peaceful recreational and
                social facilities in public parks and theatre beaches, world’s
                famous Turkish cuisines and delights at traditional restaurants
                and state of the art indoor and outdoor sports complexes.
              </p>
              <p
                style={{ fontSize: "17px", marginTop: "1rem" }}
                className="wow fadeInUp "
                data-wow-delay=".6s"
              >
                In these days, expats are being warmly welcomed by local Turkish
                population, especially Muslims, who are treated as brothers and
                friends. With the majority of its local population being
                Muslims, Halal Food and clothing including the traditional
                Muslim attires is available everywhere. The increasing
                realization of the locals about need for economic integration
                with rest of the world has increased an atmosphere of learning
                foreign languages here. Hence, language barrier which
                traditionally had been quoted as downside would probably cease
                to be a problem in the coming days.
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

export default Blog;
