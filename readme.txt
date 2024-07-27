Setup Database:

CREATE DATABASE online_learning;
CREATE USER '#username'@'localhost' IDENTIFIED BY '#password';
GRANT ALL PRIVILEGES ON online_learning.* TO '#username'@'localhost';
FLUSH PRIVILEGES;

USE online_learning;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'admin') NOT NULL
);

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE enrollments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

How to run Backend repository:

01. cd backend
02. npm start

How to run Frontend repository:

01. cd Frontend
02. cd online-learning-platform
03. npm i
04. ng serve