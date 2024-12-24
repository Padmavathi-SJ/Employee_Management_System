import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Components/Pages/AdminDashboard';
import Employee from './Components/employee/Employee';
import Category from './Components/category/Category';
import AddCategory from './Components/category/AddCategory';
import AddEmployee from './Components/employee/AddEmployee';
import EditEmployee from './Components/employee/EditEmployee';
import AllocateWork from './Components/allocateWork/AllocateWork';
import Leave from './Components/Leave/Leave';
import Salary from './Components/salary/Salary';
import EmployeeDashboard from './Components/Pages/EmployeeDashboard';
import Profile from './Components/Profile/Profile';  // Create a Profile Component for User
import AllocatedWork from './Components/allocateWork/AllocatedWork';  // Create Allocated Work Component for User

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}

        {/* Admin Routes - with Admin Sidebar */}
        <Route path="/admin-dashboard" element={<AdminDashboard/>}>
          <Route path="employee" element={<Employee />} />
          <Route path="category" element={<Category />} />
          <Route path="allocatework" element={<AllocateWork />} />
          <Route path="leave" element={<Leave />} />
          <Route path="salary" element={<Salary />} />
          <Route path="add_category" element={<AddCategory />} />
          <Route path="add_employee" element={<AddEmployee />} />
          <Route path="edit_employee/:id" element={<EditEmployee />} />
        </Route>

        {/* User Routes - with User Sidebar */}
        <Route path="/employee-dashboard" element={<EmployeeDashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="allocatedWork" element={<AllocatedWork />} />
          <Route path="leave" element={<Leave />} />
          <Route path="salary" element={<Salary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
