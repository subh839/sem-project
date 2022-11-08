import React, { useState } from "react";
import logo from "../../images/logo.svg";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          src={logo}
          alt="logo"
          className="w-32 cursor-pointer"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
