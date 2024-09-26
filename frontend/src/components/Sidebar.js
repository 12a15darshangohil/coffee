import React, { useEffect } from 'react';
import { FaHome, FaCompass, FaTrashAlt, FaSignOutAlt } from 'react-icons/fa'; // Icons
import { Outlet, Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    function userLogout() {
        fetch('http://localhost:8000/api/logout/', {
            method: 'POST',
            credentials: 'include', // Include session cookies for authentication
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response.ok) {
                    localStorage.clear();
                    console.log('Logout successful');
                    window.location.href = '/'; // Redirect to the homepage after logout
                } else {
                    console.error('Logout failed, response status:', response.status);
                    throw new Error('Logout failed');
                }
            })
            .catch(error => {
                console.error('Error during logout:', error);
            });
    }

    let navigatee = useNavigate()
    useEffect(() => {
        document.body.className = 'dashboard_body'
    })


    const navigate = useNavigate(); // useNavigate hook for redirection

    const deleteAccount = () => {
        fetch('http://localhost:8000/api/delete-account/', {
            method: 'POST',
            credentials: 'include', // Include session cookies for authentication
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response.ok) {
                    console.log('Account deleted successfully');
                    // Optionally redirect the user after deletion
                    navigate('/'); // Redirect after deletion
                } else {
                    return response.json().then(err => {
                        throw new Error(err.error);
                    });
                }
            })
            .catch(error => {
                console.error('Error deleting account:', error);
            });
    };

    return (
        <div className="flex ">
            <div className="w-64  text-white h-screen  p-5 fixed">
                <div className="logo text-center mb-10">
                    {/* <img src="https://www.starbucks.in/assets/icon/logo.png" alt="Brokaly Logo" className="w-30 h-30 rounded-full shadow-lg" /> */}
                </div>
                <ul className="space-y-4 font-bold">
                    <li className="flex items-center p-3 hover:bg-[#23262C] hover:text-[#FEDB69] cursor-pointer rounded-[20px] transition-all bg-white text-[black] shadow-md" onClick={() => { navigatee('/') }}>
                        <FaHome className="mr-4" /> Home Page
                    </li>
                    <li className="flex items-center p-3 hover:bg-[#23262C] hover:text-[#FEDB69] cursor-pointer rounded-[20px] transition-all bg-white text-[black] shadow-md" onClick={() => {
                        navigatee('/')
                        deleteAccount()
                    }}>
                        <FaTrashAlt className="mr-4" /> Delete Account
                    </li>
                    <li className="flex items-center p-3 hover:bg-[#23262C] hover:text-[#FEDB69] cursor-pointer rounded-[20px] transition-all bg-white text-[black] shadow-md" onClick={() => {
                        window.localStorage.clear()
                        navigatee('/')
                        userLogout()
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