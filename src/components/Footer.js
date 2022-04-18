import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#26331A]">
      <div className="md:mx-32 mx-10 flex flex-col md:flex-row justify-center items-center py-6">
        {/*  */}
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
