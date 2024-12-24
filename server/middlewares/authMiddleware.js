import jwt from 'jsonwebtoken';
import con from '../utils/db.js';  // MySQL connection

// Middleware to verify employee token
const verifyEmployee = async (req, res, next) => {
    try {
        // Get token from the Authorization header
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];  // "Bearer <token>"

        if (!token) {
            return res.status(401).json({ success: false, error: "Token Not Provided" });
        }

        // Verify the token
        const decoded = await jwt.verify(token, process.env.JWT_KEY);
        if (!decoded || !decoded.id) {
            return res.status(401).json({ success: false, error: "Invalid token: No employee ID found" });
        }

        // Query MySQL to find the employee by ID from the decoded token
        const query = 'SELECT * FROM employees WHERE id = ?';
        con.query(query, [decoded.id], (err, results) => {
            if (err) {
                return res.status(500).json({ success: false, error: 'Database Error' });
            }

            if (results.length === 0) {
                return res.status(404).json({ success: false, error: 'Employee Not Found' });
            }

            // Attach employee data to request object
            req.employee = results[0];  // Assuming the employee data is in results[0]

            next();  // Proceed to the next middleware or route handler
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: 'Server Error' });
    }
};

export default verifyEmployee;
