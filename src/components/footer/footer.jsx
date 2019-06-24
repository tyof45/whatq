import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerItem1"><h2>whatQ</h2></div>
      <div className="footerItem2">
        <ul>
          <h3>Help</h3>
          <li>Vendor Contact</li>
          <li>Event Requests</li>
          <li></li>
          <li>Contact Us</li>
          <li>Request a Feature</li>
        </ul>
      </div>
      <div className="footerItem3"></div>
      <div className="footerItem4"></div>
      <div className="footerItem5"></div>
      <div className="footerItem6">
        <img alt="facebook icon" className="socialMediaIcon" src="../facebook.svg" />
        <img alt="instagram icon" className="socialMediaIcon" src="../instagram.svg" />
        <img alt="twitter icon" className="socialMediaIcon" src="../twitter.svg" />
        <img alt="pinterest icon" className="socialMediaIcon" src="../pinterest.svg" />
      </div>
      <div className="footerItem7">©WhatQ 2019</div>
    </footer>
  );
}

export default Footer;