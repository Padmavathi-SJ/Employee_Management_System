import React from 'react';
import { useNavigate } from 'react-router-dom';

const Employee = () => {
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate('/add_employee'); // Navigate to AddEmployee component
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Employee Management</h2>
      <button
        onClick={handleAddEmployee}
        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add Employee
      </button>
    </div>
  );
};

export default Employee;
