import React from "react";

const Footer = () => {
  return (
    <div>
      <p style={{ position: "absolute", bottom: "0", textAlign: "center", width: "100%" }}>
        Copyright &copy; {new Date().getFullYear()} Bhavesh Bhimte
      </p>
    </div>
  );
};

export default Footer;
