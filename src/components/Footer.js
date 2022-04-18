import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#26331A]">
      <div className="md:mx-32 mx-10 flex flex-col md:flex-row justify-evenly items-center py-6">
        <ul className="flex text-lg font-semibold gap-10 text-[#98B66E] text-l mr-0 items-center">
          <Link to="/terms">
            <li className="link">Terms</li>
          </Link>
          <Link to="/privacy">
            <li className="link">Privacy Policy</li>
          </Link>
        </ul>
        <p>
          <p className="text-lg flex items-center gap-2 text-[#98B66E] cursor-pointer">
            <span className="text-2xl mt-1">&copy;</span>Copyright 2022 Imali
            media, All rights reserved.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
