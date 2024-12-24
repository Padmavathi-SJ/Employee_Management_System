import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    email: '',
    educational_qualification: '',
    role: '',
    salary: '',
    experience: '',
    native_address: '',
    profile_picture: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        'http://localhost:3000/api/employees/add',
        employeeData
      );
      if (response.data.message === 'Employee added successfully') {
        navigate('/'); // Navigate back to the Employee management page after successful addition
      }
    } catch (err) {
      setError('Failed to add employee. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-6 rounded-lg w-96 bg-white shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Add Employee</h2>
        
        {error && <div className="text-red-600 mb-4">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={employeeData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={employeeData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="educational_qualification" className="block text-gray-700 font-medium mb-2">
              Educational Qualification:
            </label>
            <input
              type="text"
              name="educational_qualification"
              value={employeeData.educational_qualification}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Educational Qualification"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
              Role:
            </label>
            <input
              type="text"
              name="role"
              value={employeeData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Role"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="salary" className="block text-gray-700 font-medium mb-2">
              Salary:
            </label>
            <input
              type="number"
              name="salary"
              value={employeeData.salary}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Salary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">
              Experience (in years):
            </label>
            <input
              type="number"
              name="experience"
              value={employeeData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Experience"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="native_address" className="block text-gray-700 font-medium mb-2">
              Native Address:
            </label>
            <textarea
              name="native_address"
              value={employeeData.native_address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Native Address"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="profile_picture" className="block text-gray-700 font-medium mb-2">
              Profile Picture URL:
            </label>
            <input
              type="text"
              name="profile_picture"
              value={employeeData.profile_picture}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Profile Picture URL"
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
