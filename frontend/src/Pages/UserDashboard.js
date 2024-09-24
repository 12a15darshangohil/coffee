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

        <div id="BILL" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#FAFAFA] rounded-[15px]  shadow-lg w-[40%] p-6 px-14 text-center">
        <h2 className="text-2xl font-semibold mb-4">Bill Details</h2>

        {/* Date of Order */}
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-700">Date of Order</p>
          <p className="text-gray-600">2024-12-01</p>
        </div>

        {/* Horizontal Line */}
        <hr className="my-4" />

        {/* Coffee Items */}
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-700">Coffee Items</p>
          {/* {coffeeItems.map((item, index) => (
            <p key={index} className="text-gray-600">
              capachino X 2 &mdash;
            </p>
          ))} */}
          <div className="flex pt-3 justify-between text-gray-600">
            <span>Cappuccino</span>
            <span>X</span>
            <span>2</span>
            <span>=</span>
            <span>₹42</span>
        </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-4" />

        {/* Delivery Fee */}
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-700">Delivery Fee</p>
          <p className="text-gray-600">₹ 12</p>
        </div>

        {/* Horizontal Line */}
        <hr className="my-4" />

        {/* Grand Total */}
        <div className="mb-4">
          <p className="text-lg font-bold text-gray-700">Grand Total</p>
          <p className="text-gray-800 font-semibold">₹ 54</p>
        </div>

        {/* Thank You Message */}
        <div className="mt-6 text-center">
          <p className="text-lg font-bold text-green-600">Thank you for your purchase!</p>
        </div>

        {/* Close Button */}
        <div className="mt-6">
          <button onClick={()=>{document.getElementById("BILL").style.display="none"}}
            className="px-4 py-2 bg-gray-800 w-[80%] rounded-[15px] text-white  hover:bg-gray-700 transition">
            Close
          </button>
        </div>
      </div>
    </div>
        </>
    );
};

export default UserDashboard;