import React from "react";
import grayBg from "../assets/grayBg.png";
import logo from "../assets/logo.png";
import menuLine from "../assets/menuLine.png";
import { CircleOutlined, Circle } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`lg:px-16 md:px-4 gap-4 sm:px-16 fixed z-50  px-6 py-4 flex flex-col md:flex-row items-center justify-between bg-[#dbdbdb] w-[100vw]`}
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <img
        src={logo}
        className="md:w-auto md:h-[4rem] w-[10rem] h-[3rem]"
        alt=""
      />

      <div
        className="flex lg:gap-16 md:gap-8 sm:gap-16 gap-4 md:mr-12 mt-6 bg-no-repeat"
        style={{ backgroundImage: `url(${menuLine})` }}
      >
        <div className=" flex flex-col   gap-1 justify-center items-center">
          <Circle
            className="!text-[0.9rem] text-red-800 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <span className="text-xs sm:text-base flex gap-1">
            <span>Why</span>
            <span>Eupheus</span>
          </span>
        </div>
        <div className=" flex flex-col gap-1 justify-center items-center">
          <CircleOutlined
            className="!text-[0.9rem] cursor-pointer"
            onClick={() => navigate("/about")}
          />

          <span className="text-xs sm:text-base flex gap-1">
            <span>About</span>
            <span>Us</span>
          </span>
        </div>
        <div className=" flex flex-col gap-1 justify-center items-center">
          <CircleOutlined
            className="!text-[0.9rem] cursor-pointer"
            onClick={() => navigate("/solutions")}
          />

          <span className="text-xs sm:text-base">Solutions</span>
        </div>
        <div className=" flex flex-col gap-1 justify-center items-center">
          <CircleOutlined
            className="!text-[0.9rem] cursor-pointer"
            onClick={() => navigate("/demo")}
          />
          <span className="text-xs sm:text-base">Demo</span>
        </div>
        <div className=" flex flex-col gap-1 justify-center items-center">
          <CircleOutlined
            className="!text-[0.9rem] cursor-pointer"
            onClick={() => navigate("/events")}
          />
          <span className="text-xs sm:text-base">Events</span>
        </div>
        <div className=" flex flex-col gap-1 justify-center items-center">
          <CircleOutlined
            className="!text-[0.9rem] cursor-pointer"
            onClick={() => navigate("/media")}
          />
          <span className="text-xs sm:text-base">Media</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
