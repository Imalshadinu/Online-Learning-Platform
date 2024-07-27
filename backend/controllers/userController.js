const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Course = require('../models/Course');

exports.registerUser = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ first_name, last_name, email, password: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, 'secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.logoutUser = async (req, res) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, 'secret');
        const expirationTime = decoded.exp * 1000; // JWT expiration time in milliseconds

        await TokenBlacklist.create({
            token,
            expiresAt: new Date(expirationTime),
        });

        res.json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
