import React from 'react';
import { Link } from 'react-router-dom'
function Header(){
  return(
    <>
       <div className='flex justify-center p-[15px] shadow-md rounded-b-[22px]'>
        <div className='min-w-[40px] mr-[80px] max-w-[100px] '>
            <img src={`${process.env.PUBLIC_URL}/Logo.png`} className=' h-[50px]' />
        </div>
        <div className='flex gap-10 lg:gap-16  mr-[200px] align-middle my-auto text-slate-500 font-serif text-[18px] '>
          <a>Home</a>
          <a>Gift</a>
          <a>Order</a>
          <a>Pay</a>
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