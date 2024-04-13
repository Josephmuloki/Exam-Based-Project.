import React from "react";
import "./footer.css";
import { FcShipped } from "react-icons/fc";
import { RiCustomerService2Fill } from "react-icons/ri";



const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="left-box">
                <div className="box">
                    <div className="icon_box">
                      <FcShipped/>
                    </div>
                    <div className="details">
                      <h3>Free delivery</h3>
                      <p>Get Free delivery when you buy books worth $120</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon_box">
                      <RiCustomerService2Fill/>
                    </div>
                    <div className="details">
                      <h3>Customer Services</h3>
                      <p>24/7 customer services</p>
                    </div>
                </div>
              </div>
            <div className="right_box">
              <div className="header">
                <p>Get the best books around East Africa at affordable prices. All books are certified and from the authors</p>
              </div>
              <div className="bottom">
                <div className="box">
                  <h3>Your Account</h3>
                  <ul>
                    <li>About Us</li>
                    <li>Account</li>
                    <li>Payment</li>
                    <li>Sales</li>
                  </ul>
                </div>
                <div className="box">
                  <h3>Products</h3>
                  <ul>
                    <li>Delivery</li>
                    <li>Track order</li>
                    <li>New Product</li>
                    <li>Old Product</li>
                  </ul>
                </div>
                <div className="box">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>EAC Close. Afrika Mashariki Road. P.O. Box 1096. Arusha</li>
                    <li>+255 (0)27 216 2100</li>
                    <li>eac@eachq.org | sgoffice@eachq.org</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Footer;