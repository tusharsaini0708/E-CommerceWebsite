import React from "react";

const Footer = () => {
  return (
    <footer className="footersection">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div>
              <h3>ABOUT COMPANY</h3>
              <p>
                CrazyBy is an Online Shopping site for Men and Women
                Clothing.CrazyBy was created on the principle of creating impact
                through innovation, honesty and thoughtfulness.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <h3>Navigation Links</h3>
              <p>
                <a href="#" style={{ color: "white", display: "block" }}>
                  Home
                </a>
                <a href="#" style={{ color: "white", display: "block" }}>
                  Products
                </a>
                <a href="#" style={{ color: "white", display: "block" }}>
                  Categories
                </a>

                <a href="#" style={{ color: "white", display: "block" }}>
                  ContactUs
                </a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <h3>ContactUs</h3>
              <p>
                <i className="fas fa-phone"></i> &ensp;+91-1234567890
              </p>
              <p>
                <i className="far fa-envelope"></i> &ensp;something11@gmail.com
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                &ensp;12th,Sector-16,Ahazad Nagar,Delhi-682340
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="socialbtn">
            <ul className="innersocial">
              <li className="socialbtnitem">
                <a
                  href="https://www.telegram.com"
                  target="blank"
                  className="socialbtnlink"
                >
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </li>
              <li className="socialbtnitem">
                <a
                  href="https://www.facebook.com"
                  target="blank"
                  className="socialbtnlink"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="socialbtnitem">
                <a
                  href="https://www.instagram.com"
                  target="blank"
                  className="socialbtnlink"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="socialbtnitem">
                <a
                  href="https://www.twitter.com"
                  target="blank"
                  className="socialbtnlink"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          <p className="text-center">Copyright @2020 All Rights Reserved !</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
