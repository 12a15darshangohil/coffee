import React from 'react';
import './UserDashboard.css';
import Sidebar from '../components/Sidebar';

const UserDashboard = () => {
    return (
        <>
        
        <Sidebar/>
        <div className="dashboard-content" style={{marginLeft:"250px"}}>
            <h2>Welcome, Ronak!</h2>
            
            <div className="trending-section">
                <h3>Trending Items</h3>
                <div className="trending-cards pt-3">
                    <div className="card">
                        <h4>Strawberry Crime</h4>
                        <p>A smooth and creamy coffee experience.</p>
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
    <h3 className="mb-4 text-xl font-semibold text-gray-800">Transaction History</h3>
    <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-700 text-white">
            <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Coffee Name</th>
                <th className="px-4 py-2 border">Content</th>
                <th className="px-4 py-2 border">Amount ($)</th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b hover:bg-gray-100" onClick={()=>{document.getElementById("BILL").style.display="flex"}}>
                <td className="px-4 py-2 border">001</td>
                <td className="px-4 py-2 border">2024-09-23</td>
                <td className="px-4 py-2 border">Cappuccino</td>
                <td className="px-4 py-2 border">Small, with extra foam</td>
                <td className="px-4 py-2 border">4.50</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-100">
                <td className="px-4 py-2 border">002</td>
                <td className="px-4 py-2 border">2024-09-22</td>
                <td className="px-4 py-2 border">Espresso</td>
                <td className="px-4 py-2 border">Double shot</td>
                <td className="px-4 py-2 border">3.00</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-100">
                <td className="px-4 py-2 border">003</td>
                <td className="px-4 py-2 border">2024-09-21</td>
                <td className="px-4 py-2 border">Latte</td>
                <td className="px-4 py-2 border">Medium, soy milk</td>
                <td className="px-4 py-2 border">5.00</td>
            </tr>
        </tbody>
    </table>
</div>
        </div>

 
  <div id="BILL" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 hidden">
    <div className="bg-white rounded-[15px] shadow-lg w-[90%] max-w-md p-8 text-center">
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
          className="px-4 py-3 bg-blue-600 w-full rounded-[10px] text-white hover:bg-blue-500 transition"
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