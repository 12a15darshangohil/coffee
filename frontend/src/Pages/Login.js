import React, { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({skip}) => {
    let [login,setLoginn]=useState(true)
    useEffect(()=>{
        document.body.className='Login_body'
    })
    const loginn =(e)=>{
        e.preventDefault();
        let lusername= document.getElementById('lusername').value;
        let lpass= document.getElementById('lpass').value;
        if(lusername !=  '' & lpass != ""){
            alert('Login Successfully')
            window.localStorage.setItem('loggedIn',true)
        }
        else{
            if(lusername ==  '')
                 alert('Enter Valid Username')
            if(lpass == "")  
                alert('Enter Valid Password !')
        }
        
    }
    const SignUpp =(e) =>{
          e.preventDefault();
          let Susername= document.getElementById('Susername').value;
          let mobilenumber =document.getElementById('mobilenumber').value;
          let SCpass= document.getElementById('SCpassword').value;
          if(Susername !=  '' & mobilenumber != "" & SCpass != ""){
            fetch('',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({Susername:Susername,mobilenumber:mobilenumber,SCpass}),
            })
            alert('Create Account Successfully')
        }
        else{
            if(Susername ==  '')
                 alert('Enter Valid Username')
            if(mobilenumber ==  '')
                 alert('Enter Valid Mobilenumber')
            if(SCpass == "")  
                alert('Enter Valid Password !')
        }
         
    }
  return (
    <>
    { login ?
        <div className='auth-container' id='auth-container'>
        <div className='auth-box scaleA'>
            <div className='text-[#00754a] font-semibold text-[14px]' style={{textAlign:"end"}} onClick={()=>{skip(false)}}>SKIP</div>
            <div className='auth-header'>Login</div>
            <form onSubmit={loginn} id="loginn">
                <div>
                    <label className='label_login'>USERNAME</label>
                    <br/>
                    <input type='text' placeholder='Enter Username *' className='in_login pb-1' id="lusername"/>
                </div>
                <div className='pt-4'>
                    <label className='label_login'>PASSWORD</label>
                    <br/>   
                    <input type='text' placeholder='Enter Password *' className='in_login pb-1' id="lpass"/>
                </div>

                <div className='pt-4 text-[13px] font-semibold text-[#0000008b]'>
                Don't have an account? <span className='text-[#00754a] underline' onClick={()=>{
                    document.getElementById('loginn').reset();
                    setLoginn(false)}}> SignUp</span></div>

                <div className='pt-9 pb-2' style={{textAlign:"center",alignItems:"center"}}>
                    <button type="submit" className='login_b'>Login</button>
                </div>
            </form>
        </div>
    </div> 
    : 
    <div className='auth-container'>
    <div className='auth-box'>
        <div className='text-[#00754a] font-semibold text-[14px]' style={{textAlign:"end"}} onClick={()=>{skip(false)}}>SKIP</div>
        <div className='auth-header'>SignUp</div>
        <form onSubmit={SignUpp}>
            <div>
                <label className='label_login'>USERNAME</label>
                <br/>
                <input type='text' placeholder='Enter Username *' className='in_login pb-1' id="Susername"/>
            </div>
            <div className='pt-4'>
                    <label className='label_login'>MOBILE NUMBER</label>
                    <br/>
                    <input type='text' placeholder='Enter Mobilenumber *' className='in_login pb-1' id="mobilenumber"/>
                </div>
            <div className='pt-4'>
                <label className='label_login'>CREATE PASSWORD</label>
                <br/>
                <input type='text' placeholder='Create Password *' className='in_login pb-1' id="SCpassword"/>
            </div>

            <div className='pt-9 pb-2' style={{textAlign:"center",alignItems:"center"}}>
                <button type="submit" className='login_b'>Login</button>
            </div>
        </form>
    </div>
</div> 
    }
    </>
    
  );
};
export default Login;
