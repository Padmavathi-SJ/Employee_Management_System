CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Auto-increment primary key
    name VARCHAR(255) NOT NULL,         -- Employee's name
    email VARCHAR(255) UNIQUE NOT NULL, -- Employee's email (unique)
    educational_qualification VARCHAR(255), -- Employee's educational qualification
    role VARCHAR(255),                  -- Employee's role/position
    salary DECIMAL(10, 2),              -- Employee's salary (2 decimal places)
    experience INT,                     -- Number of years of experience
    native_address TEXT,                -- Employee's native address (can be long text)
    profile_picture VARCHAR(255)        -- URL or path to the profile picture
);
