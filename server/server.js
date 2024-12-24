import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import con from './utils/db.js'; // Import the MySQL connection
import employeeRoutes from './Routes/employee.js';


dotenv.config(); // Load environment variables


const app = express();

// Middleware Setup
app.use(express.json());  // To parse JSON request bodies
app.use(cors({ 
  origin: 'http://localhost:5173', 
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true
}));
app.use(cookieParser()); // To parse cookies

app.use('/employees', employeeRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
