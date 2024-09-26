import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom'


const UserDashboard = () => {
  let navigate = useNavigate()
  let [trandingItems, setItem] = useState([1, 2, 3])
  let [historydata, setDataH] = useState([])
  let [billDetails, setBillDetails] = useState(false)
  useEffect(() => {
    fetch('http://localhost:8000/api/user-orders/', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setDataH(data.orders)
        console.log(data.orders)
      })
  }, [])
if( Boolean(window.localStorage.getItem('loggedIn'))){
  return (
    <>

      <Sidebar />
      <div className="dashboard-content mx-[30px]" style={{ marginLeft: "260px" }}>
        <h2 className='text-[35px] font-bold'>Welcome, Ronak!</h2>

        <div className="trending-section">
          <h3 className='text-[20px] font-bold text-gray-800'>Trending Items</h3>
          <div className="trending-cards pt-3 px-[60px]">

            {
              trandingItems.map(items => {
                return (
                  <>
                    <div className='flex relative w-[330px] px-4 bg-[#F9F9F9] py-4 rounded-[8px] item_container mr-[28px] my-[30px] scaleA'>
                      <div>
                        <img src='https://starbucksstatic.cognizantorderserv.com/Items/Small/108177.jpg' className='rounded-[19px] absolute left-[-40px] top-[23px] my-auto shadow-xl' style={{ maxWidth: '150px', maxHeight: '110px' }} />
                      </div>
                      <div className='flex flex-col ml-[70px] w-full'>
                        <div className='px-4 mb-[5px] mt-[20px]' style={{ minHeight: "80px" }}>
                          <div className='mb-1'>
                            <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="veg-item" style={{ width: '16px', height: '16px' }} />
                          </div>
                          <div className='mb-1.5 text-[18px] font-medium'>
                            xyz
                          </div>
                          <div className='mb-2 text-[13px] font-normal text-[#21252976] FontTitle'>
                            xyz
                          </div>
                        </div>
                        <div className='flex flex-row justify-between px-3'>
                          <div className='text-[20px] font-serif font-normal'>₹ xyz</div>
                          <button onClick={() => {
                            // addToCart(xyz)
                            // value.setnotify(true)
                          }} className='px-6 py-2 bg-[#00754A] hover:bg-[#979797] rounded-[30px] text-[14px] font-bold text-[#C6C6C6] Add_item'>Add Item</button>
                        </div>
                      </div>

                    </div>

                  </>
                )
              })
            }

          </div>
        </div>

        <div className="transaction-history p-4 bg-[#edededb0] rounded-[20px] mt-5" >
          <h3 className="mb-4 text-[20px] font-bold text-[black] ml-4" style={{ color: 'black' }}>Transaction History</h3>
          <div className="overflow-x-auto p-4 ">
            <div className="bg-gray-800 text-white rounded-[15px] shadow-xl mb-4 p-4">
              <div className="grid grid-cols-5 gap-4  pb-2">
                <div className="font-semibold">#</div>
                <div className="font-semibold">Date</div>
                <div className="font-semibold">Coffee Name</div>
                <div className="font-semibold">Content</div>
                <div className="font-semibold">Amount ($)</div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-md">
              {
                historydata.map(items => {
                  return (
                    <>
                      <div className="border-b border-gray-300 rounded-[20px] hover:bg-gray-200 transition duration-200 cursor-pointer p-4 grid grid-cols-5 gap-4" onClick={() => {
                        setBillDetails(Array(items))
                        console.log(Array(items))
                        if(billDetails) {document.getElementById("BILL").style.display = "flex";} }}>
                        <div>00{items.id}</div>
                        <div>{items.order_time.split('T')[0]}</div>
                        <div>Cappuccino</div>
                        <div>Small, with extra foam</div>
                        <div>₹ {items.total_price}</div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>

        </div>
      </div>

      {billDetails  && billDetails.map(element  => {
        return (
          <>
            <div id="BILL" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 hidden ">

              <div className="bg-white rounded-[15px] shadow-lg w-[90%] max-w-md p-8 text-center scaleA">
                <h2 className="text-3xl font-bold text-gray-800  my-4">Bill Details</h2>

                {/* Order Date */}
                <div className="flex justify-between mb-4">
                  <p className="text-lg font-medium text-gray-700">Order Date</p>
                  <p className="text-gray-600">{element.order_time.split('T')[0]}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-300 my-4" />

                {/* Coffee Items */}
                <div className="mb-4">
                  <div className="text-lg font-bold text-[#808080c5] flex py-2 ">Coffee Items</div>
                  {
                  element.cart_items.map(items =>{
                    return(
                      <>
                      <div className="flex justify-between my-2">
                    <span>{items.title} (x2)</span>
                    <span className="font-semibold font-serif">₹ {items.price}</span>
                  </div>
                      </>
                    )
                  })}
                  
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-300 my-4" />

                {/* Delivery Fee */}
                <div className="flex justify-between mb-4">
                  <p className="text-lg font-medium text-gray-700">Delivery Fee</p>
                  <p className="text-gray-600 font-serif">₹ 100</p>
                </div>

                <div className="h-[2px]  my-4 border-dashed border" />

                {/* Grand Total */}
                <div className="flex justify-between mb-4">
                  <p className="text-xl font-bold text-gray-800">Total Amount</p>
                  <p className="text-2xl font-semibold text-gray-900 font-serif">₹{element.total_price}</p>
                </div>


                {/* Close Button */}
                <div className="mt-6">
                  <button
                    onClick={() => { document.getElementById("BILL").style.display = "none"; }}
                    className="px-4 py-3 bg-[#1F2937] w-full rounded-[10px] text-white hover:bg-[#1f2937cb] transition"
                    aria-label="Close Bill"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </>
        )
      })}


    </>
  );}
  else{
      return(
        <>
        {
          navigate('404')
        }
        </>
      )
  }
};

export default UserDashboard;