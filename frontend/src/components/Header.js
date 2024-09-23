import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from '../Pages/Login';
function Header({ value }) {
  const Location = useLocation();
  const navigatee = useNavigate();
  let [login, setLogin] = useState(false)
  const Slogin = (value) => {
    setLogin(value)
  }
  const serch = () => {
    navigatee("serch")
  }
  return (
    <>
      <div className='flex justify-center p-[15px] shadow-md w-full border-b-[#DEE2E6] border-b-2 bg-white'>
        <div className='min-w-[40px] mr-[80px] max-w-[100px] '>
          <img src={`${process.env.PUBLIC_URL}/Logo.png`} className=' h-[50px]' />
        </div>
        <div className='flex gap-10 lg:gap-16  md:mr-[400px]  align-middle my-auto text-slate-500  text-[18px] '>
          <a href="/" className={`hover:text-[#4A8A66] ${Location.pathname.split('/')[1] == "" ? 'text-[#00754A] font-bold border-b-2 border-b-[#00754A] pb-2' : ""}`}>Home</a>
          <Link to="/" className={`hover:text-[#4A8A66] ${Location.pathname.split('/')[1] == "gift" ? 'text-[#00754A] font-bold' : ""}`}>Gift</Link>
          <Link to="/Order" className={`hover:text-[#4A8A66] ${Location.pathname.split('/')[1] == "Order" ? 'text-[#00754A] font-bold border-b-2 border-b-[#00754A] pb-2' : ""}`}>Order </Link>
          <Link to="/Cart" className={` relative hover:text-[#4A8A66] ${Location.pathname.split('/')[1] == "Cart" ? 'text-[#00754A] font-bold border-b-2 border-b-[#00754A] pb-2' : ""}`} onClick={() => { value.setnotify(false) }}>
            <span class={`absolute left-9 top-1 flex h-2 w-2 ${value.notify ? 'block' : 'hidden'}`}>
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[red] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[red]"></span>
            </span>
            Pay</Link>
        </div>
        <div className=' text-xl text-slate-500 w-full max-w-[300px] shadow-md flex my-auto py-2 px-5 rounded-full mr-[80px] ' style={{width:"150px"}} onClick={serch} >
          <img src="	https://www.starbucks.in/assets/icon/search.svg"></img>
          <input type="text" id="serchh" className='text-sm w-full bg-transparent border-none outline-none px-3' placeholder="Looking for something specific ?" />
        </div>
<<<<<<< HEAD
        <div className='text-xl text-slate-500 my-auto ' onClick={() => { setLogin(true) }}>
          <img src="https://www.starbucks.in/assets/icon/account_thin.svg" />
=======
<<<<<<< HEAD
        <div className='text-xl text-slate-500 my-auto ' onClick={() => { setLogin(true) }}>
          <img src="https://www.starbucks.in/assets/icon/account_thin.svg" />
=======
        <div className='text-xl text-slate-500 my-auto ' onClick={()=>{if(Boolean(window.localStorage.getItem('loggedIn')) != true)
          {setLogin(true)}}}>
            {
              Boolean(window.localStorage.getItem('loggedIn')) &&
              <Link to="/userdashboard"> <img src="https://www.starbucks.in/assets/icon/account_thin.svg"/></Link>
            }
            {
              Boolean(window.localStorage.getItem('loggedIn')) != true &&
                   <img src="https://www.starbucks.in/assets/icon/account_thin.svg"/>
            }
            
>>>>>>> 817e3eabfd2d978428f3c2e6ab1c13fdfabeb327
>>>>>>> a2882c6ff9e9d54376a9273c0f2aaa24376b4f70
        </div>
      </div>
      {login && <Login skip={Slogin} />}
    </>
  )
}
export default Header