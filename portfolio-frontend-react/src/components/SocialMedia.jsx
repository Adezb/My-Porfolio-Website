import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/adezb_CEO">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://facebook.com/adebayo.pokanu">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://linkedin.com/in/iamadebayopoks/">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
