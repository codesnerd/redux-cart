import React from "react";
import "./Footer.css";
import "../../index.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <a
          className="footer-link"
          href="https://github.com/codesnerd/redux-cart"
          target="_blank"
          rel="noreferrer"
        >
          &lt;/&gt;
        </a>{" "}
        with ❤️ by{" "}
        <a
          className="footer-link"
          href="https://codesnerd.com"
          target="_blank"
          rel="noreferrer"
        >
          codesnerd
        </a>
      </p>
    </div>
  );
};

export default Footer;
