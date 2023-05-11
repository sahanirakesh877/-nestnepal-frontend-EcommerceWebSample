
import React from "react";

const Footer = () => {
  return (
    <>
      <footer  >
      <section className="border-bottom pt-4">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-lg-4">
              <h3 className="pb-3">Shop_LoGo</h3>
              <p>Address: 60-49 Road 11378 New York</p>
              <p>Phone: +65 11.188.888</p>
              <p>Email: hello@colorlib.com</p>
            </div>
            <div className="col-lg-4 ">
              <h6 className="useful pb-3">Useful Links</h6>
              <div className="d-flex  side">
                <div className="col-lg-6 list">
                  <ul>
                    <li>About Us</li>
                    <li>About Our Shop</li>
                    <li>Secure Shopping</li>
                    <li>Delivery infomation</li>
                    <li>Privacy Policy</li>
                    <li>Our Sitemap</li>
                  </ul>
                </div>
                <div className="col-lg-6 list">
                  <ul>
                    <li>Who We Are</li>
                    <li>Our Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Innovation</li>
                    <li>Testimonials</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h6 className="useful pb-3">Join Our Newsletter Now</h6>
              <p className="get">
                Get E-mail updates about our latest shop and special offers.
              </p>
              <input
                type="email"
                placeholder="Enter your mail"
                className="enter"
              />{" "}
              <span>
                <button className="btn">subscribe</button>
              </span>
              <div className=" pt-4 ico">
                <ul className="alexa ">
                  <li>
                    <i class="bi bi-facebook"></i>
                  </li>
                  <li>
                    <i class="bi bi-whatsapp"></i>
                  </li>
                  <li>
                    <i class="bi bi-twitter"></i>
                  </li>
                  <li>
                    <i class="bi bi-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </section>
    
      <section>
        <div className="container last">
          <div className="row pt-3 pb-3">
            <div className="col-lg-8 last1">
              <p>
                Copyright ©2023 All rights reserved | This template is made with Rakesh Sahani
              </p>
            </div>
            <div className="col-lg-4">
                <img src="https://preview.colorlib.com/theme/ogani/img/payment-item.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      </footer>
    </>
  );
};

export default Footer;
