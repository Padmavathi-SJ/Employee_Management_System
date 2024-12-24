import mysql from 'mysql';

const con=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "padmacs253",
    database: "employee"
})

con.connect(function(err) {
    if(err) {
        console.log("connection error", err.message);
    }
    else {
        console.log("connected succesfully");
    }
})

export default con;