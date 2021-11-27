import React, { Component } from "react";
import { Link } from "react-router-dom";

import emailjs from "emailjs-com";

class Contact extends Component {
  render() {
    function sendEmail(e) {
      e.preventDefault();
      emailjs
        .sendForm(
          "gmail",
          "template_o86cugo",
          e.target,
          "user_UpSLmq0N0Buy5AGhWC41b"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      e.target.reset();
    }

    // function sendEmail(e) {
    //   e.preventDefault();
    //   emailjs
    //     .sendForm(
    //       "service_1owrjhq",
    //       "template_f4eis9c",
    //       e.target,
    //       "user_pFBB2sw1XR3oykxlO97J0"
    //     )
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => console.log(err));
    //   e.target.reset();
    // }
    return (
      <div>
        <div className="breadcrumbs">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title">Contact Us</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="">
            <div className="section-title1"> */}
        <section id="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-5 mb-md-0">
                <div
                  className="block section-title1"
                  style={{ marginTop: -150 }}
                >
                  <h2
                    className="subtitle wow fadeInDown"
                    data-wow-duration="500ms"
                    data-wow-delay=".3s"
                  >
                    Contact Us
                  </h2>
                  <p
                    className="subtitle-des wow fadeInDown"
                    data-wow-duration="500ms"
                    data-wow-delay=".5s"
                  ></p>
                  <div className="contact-form">
                    <form id="contact-form" onSubmit={sendEmail}>
                      <div
                        className="form-group wow  mb-3"
                        data-wow-duration="500ms"
                        data-wow-delay=".6s"
                      >
                        <input
                          required
                          type="text"
                          placeholder="Your Name"
                          className="form-control"
                          name="name"
                          id="name"
                        />
                      </div>
                      <div
                        className="form-group wow fadeInDown mb-3"
                        data-wow-duration="500ms"
                        data-wow-delay=".8s"
                      >
                        <input
                          required
                          type="email"
                          placeholder="Your Email"
                          className="form-control"
                          name="user_email"
                          id="email"
                        />
                      </div>
                      <div
                        className="form-group wow fadeInDown mb-3"
                        data-wow-duration="500ms"
                        data-wow-delay="1s"
                      >
                        <input
                          type="text"
                          placeholder="Subject"
                          className="form-control"
                          name="subject"
                          id="subject"
                        />
                      </div>
                      <div
                        className="form-group wow fadeInDown mb-3"
                        data-wow-duration="500ms"
                        data-wow-delay="1.2s"
                      >
                        <textarea
                          required
                          rows="6"
                          placeholder="Message"
                          className="form-control"
                          name="message"
                          id="message"
                        ></textarea>
                      </div>
                      <div id="success" className="success">
                        Thank you. The Mailman is on His Way :)
                      </div>
                      <div id="error" className="error">
                        Sorry, don't know what happened. Try later :(
                      </div>
                      <div
                        id="submit"
                        className="wow fadeInDown button"
                        data-wow-duration="500ms"
                        data-wow-delay="1.4s"
                      >
                        <button
                          type="submit"
                          id="contact-submit"
                          className="btn  hvr-bounce-to-right"
                          value="Send Message"
                        >
                          Send
                        </button>
                      </div>{" "}
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="map-area ">
                  <h2
                    style={{ textAlign: "center", marginTop: -70 }}
                    className="subtitle  "
                    data-wow-duration="500ms"
                    data-wow-delay=".3s"
                  >
                    Find Us
                  </h2>
                  <p
                    className="subtitle-des wow fadeInDown"
                    data-wow-duration="500ms"
                    data-wow-delay=".5s"
                  ></p>
                  <div className="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.0980622934367!2d28.995422715541284!3d41.06684907929492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6ff3c2a608d%3A0xe835dfc5b0573f99!2zTWVjaWRpeWVrw7Z5LCBCw7x5w7xrZGVyZSBDZC4gNjcvNzEgRDo5LCAzNDM4NCDFnmnFn2xpL8Swc3RhbmJ1bCwgVHVya2V5!5e0!3m2!1sen!2s!4v1642672164606!5m2!1sen!2s"
                      width="100%"
                      title="techmap"
                      height={450}
                      style={{ border: 0 }}
                      frameBorder={0}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                    {/* <iframe
                      title="techmap"
                      src="https://goo.gl/maps/aCuASDo9AU7GQvvPA"
                      width="100%"
                      height={400}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row address-details margin"
              style={{ marginTop: -50, marginBottom: -170 }}
            >
              <div className="col-lg-4 col-sm-6">
                <div
                  className="address "
                  data-wow-duration="500ms"
                  data-wow-delay=".3s"
                >
                  <i className="fas fa-map-marker-alt"></i>
                  <p>
                    Mecidiyeköy Mah. Büyükdere Cad. No:67-71 Alba İş Merkez,
                    D:Kat: 9/1, Şişli/İstanbul
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div
                  className="email "
                  data-wow-duration="500ms"
                  data-wow-delay=".7s"
                >
                  <i className="far fa-envelope"></i>
                  <p> md@pakturkinternational.com</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="phone"
                  data-wow-duration="500ms"
                  data-wow-delay=".9s"
                >
                  <i className="fas fa-phone"></i>
                  <p> +90 553 169 75 43</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </div>
          </div>
        </div> */}

        {/* 
        <section className="mb-4">
          <div className="row">
            <div className="col-12">
              <div className="section-title1">
                <h2
                  style={{ marginTop: "5rem" }}
                  className="wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  Contact Us
                </h2>
                <p
                  style={{ fontSize: "17px", marginBottom: "6rem" }}
                  className="wow fadeInUp "
                  data-wow-delay=".6s"
                >
                  Do you have any questions? Please do not hesitate to contact
                  us directly. Our team will come back to you within a matter of
                  hours to help you.
                </p> */}

        {/* <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              onSubmit={sendEmail}
              id="contact-form"
              // name="contact-form"
              // action="mail.php"
              // method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="md-form mb-3 "
                    className=" wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <label htmlFor="name" className="center text">
                      Name
                    </label>
                    <input
                      // placeholder="Name"
                      required
                      autoFocus
                      type="text"
                      id="name"
                      name="name"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className="md-form mb-3"
                    className="  wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <label htmlFor="email" className="center text">
                      Email
                    </label>
                    <input
                      // placeholder="Enter your Email"
                      required
                      type="email"
                      id="email"
                      name="nemail"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="md-form mb-3"
                    className=" wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <label htmlFor="subject" className="center1">
                      Subject
                    </label>
                    <input
                      // placeholder="Enter your Subject"
                      required
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="md-form"
                    className=" wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <label htmlFor="message" className="center1">
                      Message
                    </label>
                    <textarea
                      // placeholder="Please Write something here"
                      required
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control form-control-lg lg-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="button mt-3 " data-wow-delay=".6s" id="submit">
                <button
                  type="submit"
                  id="contact-submit"
                  className="btn btn-default btn-send hvr-bounce-to-right"
                  value="Send Message"
                >
                  Send
                </button>
              </div>{" "}
            </form>

            <div className="status"></div>
          </div>

          <div className="col-md-3 ">
            <ul className="list-unstyled mb-0">
              <li style={{ marginTop: "2rem" }}>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <h4 className="" style={{ margin: 0, fontSize: 16 }}>
                  Address:
                </h4>
                <p className="" data-wow-delay=".6s">
                  Mecidiyeköy Mah. Büyükdere Cad. No:67-71 Alba İş Merkez,
                  D:Kat: 9/1, Şişli/İstanbul
                </p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>{" "}
                <h4 className="" style={{ margin: 0, fontSize: 16 }}>
                  Phone:
                </h4>
                <p className=" " data-wow-delay=".6s">
                  +90 553 169 75 43
                </p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <h4 className="" style={{ margin: 0, fontSize: 16 }}>
                  Mail:
                </h4>
                <p className=" " data-wow-delay=".6s">
                  md@pakturkinternational.com
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* </div>
            </div>
          </div>
        </section> */}

        {/* <div className="col-md-8 mb-10">
          <div className="map-area">
            <h2
              className="subtitle  wow fadeInDown"
              data-wow-duration="500ms"
              data-wow-delay=".3s"
            >
              Find Us
            </h2>
            <p
              className="subtitle-des wow fadeInDown"
              data-wow-duration="500ms"
              data-wow-delay=".5s"
            ></p>
            <div className="map">
              <iframe
                title="techmap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.1118732519594!2d74.18045181464807!3d32.174257821781744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f290aaac0bc1d%3A0x5fe9f2902e3ba73b!2sTechnic%20Mentors!5e0!3m2!1sen!2s!4v1633324044217!5m2!1sen!2s"
                width="100%"
                height={400}
                frameBorder={0}
                style={{ border: 0, marginBottom: 100 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>  */}
      </div>
    );
  }
}

export default Contact;
