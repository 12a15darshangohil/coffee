<<<<<<< HEAD
import React, { useEffect } from 'react';
import { FaHome, FaCompass, FaTrashAlt,FaSignOutAlt } from 'react-icons/fa'; // Icons
import { Outlet,Link,useNavigate } from 'react-router-dom';
=======
import React from 'react';
import { FaHome, FaCompass, FaTag, FaHeart, FaCog } from 'react-icons/fa'; // Icons
import { Outlet, Link, useNavigate } from 'react-router-dom';
>>>>>>> d5693039d13feccd88f1a911a17a3ca25d3f6a39

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
    useEffect(()=>{
        document.body.className='dashboard_body'
    })
    return (
        <div className="flex ">
            <div className="w-64  text-white h-screen  p-5 fixed">
                <div className="logo text-center mb-10">
                    {/* <img src="https://www.starbucks.in/assets/icon/logo.png" alt="Brokaly Logo" className="w-30 h-30 rounded-full shadow-lg" /> */}
                </div>
                <ul className="space-y-4 font-bold">
                    <li className="flex items-center p-3 hover:bg-[#23262C] hover:text-[#FEDB69] cursor-pointer rounded-[20px] transition-all bg-white text-[black] shadow-md" onClick={()=>{navigatee('/')}}> 
                        <FaHome className="mr-4" /> Home Page
                    </li>
                    <li className="flex items-center p-3 hover:bg-[#23262C] hover:text-[#FEDB69] cursor-pointer rounded-[20px] transition-all bg-white text-[black] shadow-md" onClick={()=>{navigatee('/')}}> 
                        <FaTrashAlt className="mr-4" /> Delete Account
                    </li>
                    <li className="flex items-center p-3 hover:bg-[#23262C] hover:text-[#FEDB69] cursor-pointer rounded-[20px] transition-all bg-white text-[black] shadow-md" onClick={()=>{window.localStorage.clear()
                        navigatee('/')
                    }}>
                        <FaSignOutAlt className="mr-4" /> Logout
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default Sidebar;