import React from "react";
import "./footer.scss";

const Footer = ({ children }) => {
  return (
    <div className="lmj-footer">
      {children}
      <div>Made by Medhi and Romain</div>
    </div>
  );
};
export default Footer;
