import React from "react";
import Sidebar from "../compnents/Sidebar";

const AdminDashboard = () => {
  const users = [
    { name: "John Carter", email: "john@example.com", phone: "234-567-1234", location: "United States", company: "Google", status: "Online" },
    { name: "Beatrix Moore", email: "beatrix@example.com", phone: "340-456-4287", location: "United Kingdom", company: "WebFlow", status: "Offline" },
    { name: "Nash Carron", email: "nash@example.com", phone: "318-658-8899", location: "Australia", company: "Facebook", status: "Online" },
    { name: "Graeme Kim", email: "graeme@example.com", phone: "567-987-3699", location: "India", company: "Twitter", status: "Online" },
    { name: "Sunny Hudson", email: "sunny@example.com", phone: "178-345-0988", location: "Canada", company: "YouTube", status: "Offline" },
    { name: "Lily Woods", email: "lily@example.com", phone: "312-478-8910", location: "Australia", company: "Spotify", status: "Online" },
    { name: "Francis White", email: "francis@example.com", phone: "401-234-8988", location: "United Kingdom", company: "Pinterest", status: "Offline" },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-6">
        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <p className="text-gray-600">Total Absent</p>
            <h3 className="text-2xl sm:text-3xl font-bold">256</h3>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <p className="text-gray-600">Total Present</p>
            <h3 className="text-2xl sm:text-3xl font-bold">15</h3>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <p className="text-gray-600">Total Users</p>
            <h3 className="text-2xl sm:text-3xl font-bold">90+</h3>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <p className="text-gray-600">Other Users</p>
            <h3 className="text-2xl sm:text-3xl font-bold">55</h3>
          </div>
        </div>

        {/* User Table */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">All Users</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="p-3 text-sm sm:text-base">Name</th>
                  <th className="p-3 text-sm sm:text-base">Email</th>
                  <th className="p-3 text-sm sm:text-base">Phone</th>
                  <th className="p-3 text-sm sm:text-base">Location</th>
                  <th className="p-3 text-sm sm:text-base">Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-3 text-sm">{user.name}</td>
                    <td className="p-3 text-sm">{user.email}</td>
                    <td className="p-3 text-sm">{user.phone}</td>
                    <td className="p-3 text-sm">{user.location}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          user.status === "Online"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;