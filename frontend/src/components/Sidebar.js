import React from 'react';
import { FaHome, FaCompass, FaTag, FaHeart, FaCog } from 'react-icons/fa'; // Icons
import '../Pages/UserDashboard.css';
import { Outlet } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar fixed">
            <div className="logo">
                <img src="brokaly-logo.png" alt="Brokaly Logo" />
            </div>
            <ul className="sidebar-list">
                <li>
                    <FaHome /> Dashboard
                </li>
                <li>
                    <FaCompass /> Explore
                </li>
                <li>
                    <FaTag /> Offers
                </li>
                <li>
                    <FaHeart /> Favorites
                </li>
                <li>
                    <FaCog /> Settings
                </li>
            </ul>
        </div>
        </div>
        
    );
};

export default Sidebar;