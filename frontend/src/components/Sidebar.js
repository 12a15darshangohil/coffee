import React from 'react';
import { FaHome, FaCompass, FaTag, FaHeart, FaCog } from 'react-icons/fa'; // Icons
import { Outlet, Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {

    function userLogout() {
        // Fetch authenticated user data first
        fetch('http://localhost:8000/api/user-auth/', {
            method: 'GET',
            credentials: 'include', // Ensures cookies (session) are included in the request
        })
            .then(response => {
                if (response.ok) {
                    // If the user is authenticated, proceed with logout
                    return fetch('http://localhost:8000/api/logout/', {
                        method: 'POST', // Assuming the logout endpoint uses POST
                        credentials: 'include', // Ensures session cookies are sent for logout
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                } else {
                    throw new Error('User is not authenticated');
                }
            })
            .then(logoutResponse => {
                if (logoutResponse.ok) {
                    // Successfully logged out, handle redirection or UI changes
                    console.log('Logout successful');
                    window.location.href = '/login'; // Redirect to login page after logout
                } else {
                    throw new Error('Logout failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

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
                    <li className="flex items-center p-3 hover:bg-[#795548] cursor-pointer rounded-md transition-all" onClick={() => {
                        window.localStorage.clear()
                        navigatee('/')
                    }}>
                        <FaTag className="mr-4" />
                        <button onClick={userLogout}>Logout</button>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default Sidebar;