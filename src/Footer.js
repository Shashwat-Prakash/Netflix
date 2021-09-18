import React from "react";

const myFooter = {
  marginTop: "0rem",
  padding: "0rem",
  backgroundColor: "Grey",
  position: "fixed",
  textAlign: "center",
  bottom: 0,
  left: 0,
  fontFamily: "'Libre Caslon Display', serif",
  width: "100%"
};
const Footer = () => {
  return (
    <div style={myFooter}>
      <p>Copyright &copy; Shashwat</p>
    </div>
  );
};

export default Footer;
