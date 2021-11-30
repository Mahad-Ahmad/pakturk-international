import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="breadcrumbs">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title">Page Not Found</h1>
                  {/* <ul className="breadcrumb-nav">
                    <li>
                      <Link to="/home">Services</Link>
                    </li>
                    <li>Blog</li>
                  </ul> */}
                </div>
              </div>
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
                    <Link to="/home" className="btn">
                      Go Home
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

export default NotFound;
