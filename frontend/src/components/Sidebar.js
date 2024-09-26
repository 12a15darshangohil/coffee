import React, { useEffect } from 'react';
import { FaHome, FaCompass, FaTrashAlt, FaSignOutAlt } from 'react-icons/fa'; // Icons
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Sidebar = () => {
    let navigatee = useNavigate()
    useEffect(() => {
        document.body.className = 'dashboard_body'
    })


    const navigate = useNavigate(); // useNavigate hook for redirection

    const deleteAccount = async () => {
         Swal.fire({
            title: "Are you sure?",
                text: "Once deleted, you will not be able to recover your account!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: '#FF4757', // Custom confirm button color
                cancelButtonColor: '#1E90FF',   // Custom cancel button color
                confirmButtonText: 'Yes, remove it',
                cancelButtonText: 'No, keep it',
                customClass: {
                    title: 'swal-title',
                    popup: 'swal-popup',
                    content: 'swal-content',
                    confirmButton: 'swal-confirm',
                    cancelButton: 'swal-cancel',
                },
        })
        .then(async (willDelete) => {
            if (willDelete.isConfirmed) {
                await  fetch('http://localhost:8000/api/delete-account/', {
                    method: 'POST',
                    credentials: 'include', // Include session cookies for authentication
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                await Swal.fire( {
                    title:"Your account has been deleted!",
                    icon: "success",
                    customClass: {
                        popup: 'swal-popup',
                        confirmButton: 'swal-AccountOk', // Optional: Custom class for styling
                    },
                });
                navigate('/');
                window.localStorage.clear()
            } else {
                Swal.fire({title:"Your account is safe!",
                    customClass: {
                        popup: 'swal-popup',
                        confirmButton: 'swal-AccountOk', // Optional: Custom class for styling
                    },
                }
                );
            }
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
                        deleteAccount()
                    }}>
                        <FaTrashAlt className="mr-4" /> Delete Account
                    </li>
                    <li className="flex items-center p-3 hover:bg-[#23262C] hover:text-[#FEDB69] cursor-pointer rounded-[20px] transition-all bg-white text-[black] shadow-md" onClick={() => {
                        window.localStorage.clear()
                        navigatee('/')
                    }}>
                        <FaSignOutAlt className="mr-4" />
                        <button type='button'>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default Sidebar;