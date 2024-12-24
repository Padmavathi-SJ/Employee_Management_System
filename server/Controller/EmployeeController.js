import  con  from '../utils/db.js'; // Assuming you're exporting your DB connection

// Function to add an employee
const addEmployee = (req, res) => {
  const { name, email, educational_qualification, role, salary, experience, native_address, profile_picture } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }
  const checkEmailQuery = 'SELECT * FROM employees WHERE email = ?';

  con.query(checkEmailQuery, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Employee with this email already exists' });
    }

    // Query to insert the new employee
    const insertEmployeeQuery = `
      INSERT INTO employees (name, email, educational_qualification, role, salary, experience, native_address, profile_picture)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [name, email, educational_qualification, role, salary, experience, native_address, profile_picture];

    con.query(insertEmployeeQuery, values, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error adding employee', error: err });
      }

      return res.status(201).json({ message: 'Employee added successfully', employeeId: result.insertId });
    });
  });
};

export { addEmployee };
