// pages/dashboard.tsx

import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-yellow-200 rounded-lg shadow">
            <h3 className="text-gray-600">Total Orders</h3>
            <p className="text-3xl font-semibold">1,234</p>
          </div>
          <div className="p-4 bg-yellow-200 rounded-lg shadow">
            <h3 className="text-gray-600">Pending Orders</h3>
            <p className="text-3xl font-semibold">78</p>
          </div>
          <div className="p-4 bg-yellow-200 rounded-lg shadow">
            <h3 className="text-gray-600">Fulfilled Orders</h3>
            <p className="text-3xl font-semibold">1,156</p>
          </div>
          <div className="p-4 bg-yellow-200 rounded-lg shadow">
            <h3 className="text-gray-600">Total Customers</h3>
            <p className="text-3xl font-semibold">3,456</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="p-4 text-left">Order ID</th>
                <th className="p-4 text-left">Customer</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Total</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4">#12345</td>
                <td className="p-4">John Doe</td>
                <td className="p-4">2023-04-15</td>
                <td className="p-4">
                  <span className="inline-block px-2 py-1 bg-yellow-300 rounded-lg text-sm font-semibold">Pending</span>
                </td>
                <td className="p-4">$99.99</td>
                <td className="p-4">
                  <button className="text-blue-500 hover:underline">View</button>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-4">#12346</td>
                <td className="p-4">Jane Smith</td>
                <td className="p-4">2023-04-14</td>
                <td className="p-4">
                  <span className="inline-block px-2 py-1 bg-green-300 rounded-lg text-sm font-semibold">Fulfilled</span>
                </td>
                <td className="p-4">$149.99</td>
                <td className="p-4">
                  <button className="text-blue-500 hover:underline">View</button>
                </td>
              </tr>
              <tr>
                <td className="p-4">#12347</td>
                <td className="p-4">Michael Johnson</td>
                <td className="p-4">2023-04-13</td>
                <td className="p-4">
                  <span className="inline-block px-2 py-1 bg-red-300 rounded-lg text-sm font-semibold">Cancelled</span>
                </td>
                <td className="p-4">$79.99</td>
                <td className="p-4">
                  <button className="text-blue-500 hover:underline">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
