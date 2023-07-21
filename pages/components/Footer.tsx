import React from "react";
import config from "../index.json";

const Footer = () => {
  const footer = config.footer;
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer px-8 py-16 flex justify-center align-center flex-col bg-neutral-800">
      <div className="mx-auto text-3xl text-neutral-400 mb-8 space-x-10">
      </div>
      <span className="text-sm text-center text-neutral-600">
        
      </span>
    </div>
  );
};

export default Footer;