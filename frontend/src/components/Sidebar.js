import React from 'react';
import { FaHome, FaCompass, FaTag, FaHeart, FaCog } from 'react-icons/fa'; // Icons
import { Outlet } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="flex ">
            <div className="w-64 bg-[#3E2723] text-white h-screen rounded-r-[15px] p-5 fixed">
                <div className="logo text-center mb-10">
                    <img src="brokaly-logo.png" alt="Brokaly Logo" className="w-30 h-30 rounded-full shadow-lg" />
                </div>
                <ul className="space-y-0">
                    <li className="flex items-center p-3 hover:bg-[#795548] cursor-pointer rounded-md transition-all">
                        <FaHome className="mr-4" /> Dashboard
                    </li>
                    <li className="flex items-center p-3 hover:bg-[#795548] cursor-pointer rounded-md transition-all">
                        <FaCompass className="mr-4" /> Explore
                    </li>
                    <li className="flex items-center p-3 hover:bg-[#795548] cursor-pointer rounded-md transition-all">
                        <FaTag className="mr-4" /> Offers
                    </li>
                    <li className="flex items-center p-3 hover:bg-[#795548] cursor-pointer rounded-md transition-all">
                        <FaHeart className="mr-4" /> Favorites
                    </li>
                    <li className="flex items-center p-3 hover:bg-[#795548] cursor-pointer rounded-md transition-all">
                        <FaCog className="mr-4" /> Settings
                    </li>
                </ul>
            </div>
                <Outlet />

        </div>
    );
};

export default Sidebar;