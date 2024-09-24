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
                <h3>Transaction History</h3>
                <ul className='pt-3'>
                    <li>Order #001: Cappuccino - $4.50</li>
                    <li>Order #002: Espresso - $3.00</li>
                    <li>Order #003: Latte - $5.00</li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default UserDashboard;