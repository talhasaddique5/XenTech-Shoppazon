import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-4  lg:mx-8 mt-16 ssm:mt-20 lg:mt-96">
      <div className="p-1 w-full bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl "></div>
      <div className="flex items-center text-center w-1/2 ">
        <div className="my-5 flex flex-row max-md:flex-col items-center justify-between text-center leading-8 text-xl w-full text-white tracking-widest ">
          <a
            className="hover:underline text-transparent tracking-wide bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 font-bold hover:underline-offset-8 hover:text-blue-500 "
            href="/"
          >
            Shoppazon
          </a>{" "}
          - by -
          <a
            className="hover:underline text-transparent tracking-wide bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 font-bold leading-6 hover:underline-offset-8 hover:text-blue-500 "
            target="_blank"
            rel="noopener noreferrer"
            href="https://xentech.netlify.app/"
          >
            XenTech ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
