import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#26331A]">
      <div className="md:mx-36 flex items-center justify-between mx-12 ">
        <Link to="/">
          <div className="p-4">
            <img
              src="assets/eco-main-logo.png"
              className="md:h-16 md:w-16 w-12 h-12"
              alt="app logo"
            />
          </div>
        </Link>

        <ul className="flex text-lg font-semibold gap-10 text-[#98B66E] text-l mr-0 items-center">
          <Link to="/terms">
            <li className="link">Terms</li>
          </Link>
          <Link to="/privacy">
            <li className="link">Privacy Policy</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
