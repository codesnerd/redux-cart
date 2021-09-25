import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <a
          className="footer-link"
          href="https://github.com/codesnerd/redux-cart"
          target="_blank"
        >
          &lt;/&gt;
        </a>{" "}
        with ❤️ by{" "}
        <a
          className="footer-link"
          href="https://codesnerd.com/"
          target="_blank"
        >
          codesnerd
        </a>
      </p>
    </div>
  );
};

export default Footer;
