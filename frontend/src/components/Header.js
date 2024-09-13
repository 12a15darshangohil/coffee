import React from 'react';
import { Link,useLocation } from 'react-router-dom'
function Header(){
  const Location=useLocation();
  return(
    <>
       <div className='flex justify-center p-[15px] shadow-md w-full border-b-[#DEE2E6] border-b-4 bg-white'>
        <div className='min-w-[40px] mr-[80px] max-w-[100px] '>
            <img src={`${process.env.PUBLIC_URL}/Logo.png`} className=' h-[50px]' />
        </div>
        <div className='flex gap-10 lg:gap-16  md:mr-[400px]  align-middle my-auto text-slate-500  text-[18px] '>
          <a href="/" className={`hover:text-[#4A8A66] ${Location.pathname.split('/')[1]=="" ? 'text-[#00754A] font-bold border-b-2 border-b-[#00754A] pb-2':""}`}>Home</a>
          <Link to="/" className={`hover:text-[#4A8A66] ${Location.pathname.split('/')[1]=="gift" ? 'text-[#00754A] font-bold':""}`}>Gift</Link>
          <Link to="/Order" className={`hover:text-[#4A8A66] ${Location.pathname.split('/')[1]=="Order" ? 'text-[#00754A] font-bold border-b-2 border-b-[#00754A] pb-2':""}`}>Order </Link>
          <Link to="/" className='hover:text-[#4A8A66]'>Pay</Link>
        </div>
        <div className=' text-xl text-slate-500 w-full max-w-[300px] shadow-md flex my-auto py-2 px-5 rounded-full mr-[80px] '>
            <input type="text" className='text-sm w-full bg-transparent border-none outline-none px-3' placeholder="Looking for something specific ?" />
        </div>
        <div className='text-xl text-slate-500 my-auto ' >
            <img src="https://www.starbucks.in/assets/icon/account_thin.svg" />
        </div>
       </div>

    </>
  )
}
export default Header