import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaHome,
  FaBox,
  FaCog,
  FaBell,
  FaPlusSquare,
  FaIdeal,
} from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { BsSpeakerFill } from "react-icons/bs";
import { IoCamera } from "react-icons/io5";
import { RiCellphoneFill } from "react-icons/ri";
import { GiDeliveryDrone } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      <nav className="flex flex-col gap-4">
       

        <NavLink
          to="/dashboard/audio"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700"
        >
          <BsSpeakerFill size={20} />
          Audio-Product
        </NavLink>

        <NavLink
          to="/dashboard/camera"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700"
        >
          <IoCamera size={20} />
          Camera-Product
        </NavLink>

        <NavLink
          to="/dashboard/cellphone"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700"
        >
          <RiCellphoneFill size={20} />
          Cell-Phone-Product
        </NavLink>

         <NavLink
          to="/dashboard/dealproduct"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700"
        >
          <FaIdeal size={20} />
          Deal-Products
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700"
        >
          <GiDeliveryDrone size={20}/>
          Drones-Product
        </NavLink>

        

       
     
          <NavLink
            to="/dashboard/logout"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700"
          >
            <CiLogout />
            logout
          </NavLink>
     
      </nav>
    </div>
  );
};

export default Sidebar;
