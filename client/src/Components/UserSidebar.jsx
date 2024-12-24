import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserSidebar = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white">
        <div className="p-6">
          <Link
            to="/employee-dashboard"
            className="text-2xl font-bold text-white hover:text-blue-300"
          >
            EMS
          </Link>
        </div>
        <ul className="mt-4 space-y-2">
          <li>
            <Link
              to="/employee-dashboard"
              className="block px-4 py-2 text-white rounded hover:bg-blue-700"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/employee-dashboard/profile"
              className="block px-4 py-2 text-white rounded hover:bg-blue-700"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/employee-dashboard/allocatedWork"
              className="block px-4 py-2 text-white rounded hover:bg-blue-700"
            >
              Allocated Work
            </Link>
          </li>
          <li>
            <Link
              to="/employee-dashboard/leave"
              className="block px-4 py-2 text-white rounded hover:bg-blue-700"
            >
              Leave
            </Link>
          </li>
          <li>
            <Link
              to="/employee-dashboard/salary"
              className="block px-4 py-2 text-white rounded hover:bg-blue-700"
            >
              Salary
            </Link>
          </li>

          <li>
            <Link
              to="/logout"
              className="block px-4 py-2 text-white rounded hover:bg-red-700"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Employee Management System</h1>
        {/* Render nested route components here */}
        <Outlet />
      </div>
    </div>
  );
};

export default UserSidebar;
