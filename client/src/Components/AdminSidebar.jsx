import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white">
        <div className="p-6">
          <Link
            to="/admin-dashboard"
            className="text-2xl font-bold text-white hover:text-blue-300"
          >
            EMS
          </Link>
        </div>
        <ul className="mt-4 space-y-2">
          <li>
            <Link
              to="/admin-dashboard"
              className="block px-4 py-2 text-white rounded hover:bg-blue-700"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin-dashboard/employee"
              className="block px-4 py-2 text-white rounded hover:bg-blue-700"
            >
              Manage Employees
            </Link>
          </li>
          <li>
            <Link
              to="/admin-dashboard/category"
              className="block px-4 py-2 text-white rounded hover:bg-blue-700"
            >
              Category
            </Link>
          </li>
          <li>
            <Link
              to="/admin-dashboard/allocateWork"
              className="block px-4 py-2 text-white rounded hover:bg-blue-700"
            >
              Allocate Work
            </Link>
          </li>
          <li>
            <Link
              to="/admin-dashboard/leave"
              className="block px-4 py-2 text-white rounded hover:bg-blue-700"
            >
              Leave
            </Link>
          </li>
          <li>
            <Link
              to="/admin-dashboard/salary"
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

export default AdminSidebar;
