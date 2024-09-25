import React from 'react';
import './UserDashboard.css';
import Sidebar from '../components/Sidebar';

const UserDashboard = () => {
    return (
        <>
        
        <Sidebar/>
        <div className="dashboard-content mx-[30px]" style={{marginLeft:"260px"}}>
            <h2 className='text-[35px] font-bold'>Welcome, Ronak!</h2>
            
            <div className="trending-section">
                <h3 className='text-[20px] font-bold text-gray-800'>Trending Items</h3>
                <div className="trending-cards pt-3">
                <div  className='flex relative w-[380px] px-4 bg-[#F9F9F9] py-5 rounded-[8px] item_container mr-[28px] my-[15px] scaleA'>
                  <div>
                <img src='https://starbucksstatic.cognizantorderserv.com/Items/Small/108177.jpg' className='rounded-full absolute left-[-40px]' style={{maxWidth:'130px',maxHeight:'130px'}} />
                </div>
                            <div className='flex flex-col ml-[80px] w-full'>
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
                    <div className="card">
                        <h4>Caramel Ribban</h4>
                        <p>Strong and bold, for the true coffee lovers.</p>
                    </div>
                    <div className="card">
                        <h4>Mocha Cookie</h4>
                        <p>Rich and milky, perfect for a light sip.</p>
                    </div>
                </div>
            </div>



            <div className="transaction-history pt-2">
    <h3 className="mb-4 text-[20px] font-bold text-gray-800">Transaction History</h3>
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
    <div className="border-b border-gray-300 rounded-[20px] hover:bg-gray-200 transition duration-200 cursor-pointer p-4 grid grid-cols-5 gap-4" onClick={() => { document.getElementById("BILL").style.display = "flex"; }}>
      <div>001</div>
      <div>2024-09-23</div>
      <div>Cappuccino</div>
      <div>Small, with extra foam</div>
      <div>$4.50</div>
    </div>
    <div className="border-b border-gray-300 rounded-[20px] hover:bg-gray-200 transition duration-200 cursor-pointer p-4 grid grid-cols-5 gap-4">
      <div>002</div>
      <div>2024-09-22</div>
      <div>Espresso</div>
      <div>Double shot</div>
      <div>$3.00</div>
    </div>
    <div className="border-b border-gray-300 rounded-[20px] hover:bg-gray-200 transition duration-200 cursor-pointer p-4 grid grid-cols-5 gap-4">
      <div>003</div>
      <div>2024-09-21</div>
      <div>Latte</div>
      <div>Medium, soy milk</div>
      <div>$5.00</div>
    </div>
  </div>
</div>


</div>
        </div>

 
  <div id="BILL" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 hidden ">
    <div className="bg-white rounded-[15px] shadow-lg w-[90%] max-w-md p-8 text-center scaleA">
      <h2 className="text-3xl font-bold text-gray-800  my-4">Bill Details</h2>

      {/* Order Date */}
      <div className="flex justify-between mb-4">
        <p className="text-lg font-medium text-gray-700">Order Date</p>
        <p className="text-gray-600">December 1, 2024</p>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-300 my-4" />

      {/* Coffee Items */}
      <div className="mb-4">
        <div className="text-lg font-bold text-[#808080c5] flex py-2 ">Coffee Items</div>
        <div className="flex justify-between my-2">
          <span>Cappuccino (x2)</span>
          <span className="font-semibold font-serif">₹42</span>
        </div>
        <div className="flex justify-between my-2">
          <span>Latte (x1)</span>
          <span className="font-semibold font-serif">₹18</span>
        </div>
        <div className="flex justify-between my-2">
          <span>Espresso (x1)</span>
          <span className="font-semibold font-serif">₹15</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-300 my-4" />

      {/* Delivery Fee */}
      <div className="flex justify-between mb-4">
        <p className="text-lg font-medium text-gray-700">Delivery Fee</p>
        <p className="text-gray-600 font-serif">₹12</p>
      </div>

      <div className="h-[2px]  my-4 border-dashed border" />

      {/* Grand Total */}
      <div className="flex justify-between mb-4">
        <p className="text-xl font-bold text-gray-800">Total Amount</p>
        <p className="text-2xl font-semibold text-gray-900 font-serif">₹87</p>
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
    );
};

export default UserDashboard;