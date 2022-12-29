import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { client } from "../../client";

import "./Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className="head-text">You can contact me here</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.mail} alt="email" />
          <a href="mailto:temitopeceo@gmail.com" className="p-text">
            temitopeceo@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.smartphone} alt="mobile" />
          <a href="tel: +234 8022485204" className="p-text">
            +234 8022485204
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}{" "}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for reaching out</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(Footer, "contact", "app__primarybg");
