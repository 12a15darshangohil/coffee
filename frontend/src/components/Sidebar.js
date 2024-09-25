import React from 'react';
import { FaHome, FaCompass, FaTag, FaHeart, FaCog } from 'react-icons/fa'; // Icons
import { Outlet,Link,useNavigate } from 'react-router-dom';

const Sidebar = () => {
    let navigatee = useNavigate()
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
                    <Link to='/'><li className="flex items-center p-3 hover:bg-[#795548] cursor-pointer rounded-md transition-all">
                        <FaCompass className="mr-4" /> Home
                    </li></Link>
                    <li className="flex items-center p-3 hover:bg-[#795548] cursor-pointer rounded-md transition-all" onClick={()=>{window.localStorage.clear()
                        navigatee('/')
                    }}>
                        <FaTag className="mr-4" /> Logout
                    </li>
                </ul>
            </div>
                <Outlet />
        </div>
    );
};

export default Sidebar;