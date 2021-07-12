import "./Header.css";
import React from "react";
const Header = () => {
  return (
    <div onClick={() => window.scroll(0, 0)} className="header">
      Movie Web
    </div>
  );
};

export default Header;
