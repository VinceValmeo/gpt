import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer__section">
      <div className="footer__earlyAccess">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button type="button">Request Early Access</button>
      </div>

      <div className="footer__links">
        <div className="footer__links__logo">
          <h2>GPT-3</h2>
          <p>
            Crechterwoord K12 182 DK <br />
            Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="footer__links__links">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer__links__links">
          <h4>Company</h4>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer__links__links">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <footer>© 2021 GPT-3. All rights reserved.</footer>
    </div>
  );
}

export default Footer;
