import React, { useEffect, useState } from 'react';
import './Login.css';
import Swal from 'sweetalert2';
import { useNavigate, useHistory } from 'react-router-dom';


const Login = ({ skip }) => {
    const navigate = useNavigate(); // useNavigate for navigation

    let [login, setLoginn] = useState(true)

    const [authDone, setAuthDone] = useState(false)
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        document.body.className = 'Login_body'
    })

    const loginn = async (e) => {
        e.preventDefault();

        let lusername = document.getElementById('lusername').value;
        let lpass = document.getElementById('lpass').value;

        if (lusername !== '' && lpass !== '') {
            try {
                const response = await fetch('http://localhost:8000/api/login/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: lusername,
                        password: lpass,
                    }),
                    credentials: 'include',
                });

                const data = await response.json();

                if (response.ok) {
                    skip(false)
                    Swal.fire({
                        title: 'Success!',
                        text: 'Login successfully',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        customClass: {
                            popup: 'swal-popup',
                            confirmButton:'swal-AccountOk', // Optional: Custom class for styling
                          },
                    });
                    window.localStorage.setItem('loggedIn', true);
        
                    // Fetch authenticated user data from another API
                    const userResponse = await fetch('http://localhost:8000/api/user-auth/', {
                        method: 'GET',
                        credentials: 'include',
                    });
                        const userData = await userResponse.json();
                        console.log("userdata:", userData);
                        setUserData(userData); // Store user data in state
                        setAuthDone(true); // Set authentication done
                        window.localStorage.setItem('loggedIn', true);
                        
                } else {
                    alert(data.error || 'Login failed');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred during login.');
            }
        } else {
            if (lusername === '') alert('Enter Valid Username');
            if (lpass === '') alert('Enter Valid Password');
        }
    };


    const SignUpp = async (e) => {
        e.preventDefault();
        let Susername = document.getElementById('Susername').value;
        let mobilenumber = document.getElementById('mobilenumber').value;
        let SCpass = document.getElementById('SCpassword').value;

        if (Susername !== '' && mobilenumber !== '' && SCpass !== '') {
            try {
                const response = await fetch('http://localhost:8000/api/signup/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: Susername,
                        pass1: mobilenumber,
                        password: SCpass,
                    }),
                });

                if (response.ok) {
                    Swal.fire({
                        title: 'Account Created!',
                        text: 'Your account has been created successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        customClass: {
                          popup: 'swal-popup',
                          confirmButton:'swal-AccountOk', // Optional: Custom class for styling
                        },
                      });
                } else {
                    const data = await response.json();
                    alert(data.error || 'Failed to create account');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while creating your account.');
            }
        } else {
            if (Susername === '')
                alert('Enter a valid Username');
            if (mobilenumber === '')
                alert('Enter a valid Password');
            if (SCpass === '')
                alert('Enter a valid Password');
        }
    };


    // Navigate to user dashboard
    const goToDashboard = () => {
        navigate('/userdashboard');
    };


    return (
        <>
            <>
                {login ?
                    <div className='auth-container' id='auth-container'>
                        <div className='auth-box scaleA'>
                            <div className='text-[#00754a] font-semibold text-[14px]' style={{ textAlign: "end" }} onClick={() => { skip(false) }}>SKIP</div>
                            <div className='auth-header'>Login</div>
                            <form onSubmit={loginn} id="loginn">
                                <div>
                                    <label className='label_login'>USERNAME</label>
                                    <br />
                                    <input type='text' placeholder='Enter Username *' className='in_login pb-1' id="lusername" />
                                </div>
                                <div className='pt-4'>
                                    <label className='label_login'>PASSWORD</label>
                                    <br />
                                    <input type='password' placeholder='Enter Password *' className='in_login pb-1' id="lpass" />
                                </div>

                                <div className='pt-4 text-[13px] font-semibold text-[#0000008b]'>
                                    Don't have an account? <span className='text-[#00754a] underline' onClick={() => {
                                        document.getElementById('loginn').reset();
                                        setLoginn(false)
                                    }}> SignUp</span></div>

                                <div className='pt-9 pb-2' style={{ textAlign: "center", alignItems: "center" }}>
                                    <button type="submit" className='login_b'>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    :
                    <div className='auth-container'>
                        <div className='auth-box'>
                            <div className='text-[#00754a] font-semibold text-[14px]' style={{ textAlign: "end" }} onClick={() => { skip(false) }}>SKIP</div>
                            <div className='auth-header'>SignUp</div>
                            <form onSubmit={SignUpp}>
                                <div>
                                    <label className='label_login'>USERNAME</label>
                                    <br />
                                    <input type='text' placeholder='Enter Username *' className='in_login pb-1' id="Susername" />
                                </div>
                                <div className='pt-4'>
                                    <label className='label_login'>CREATE PASSWORD</label>
                                    <br />
                                    <input type='password' placeholder='Enter Mobilenumber *' className='in_login pb-1' id="mobilenumber" />
                                </div>
                                <div className='pt-4'>
                                    <label className='label_login'>CONFIRM PASSWORD</label>
                                    <br />
                                    <input type='password' placeholder='Create Password *' className='in_login pb-1' id="SCpassword" />
                                </div>

                                <div className='pt-9 pb-2' style={{ textAlign: "center", alignItems: "center" }}>
                                    <button type="submit" className='login_b'>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </>
        </>
    );
};
export default Login;
