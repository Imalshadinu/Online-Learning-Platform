const jwt = require('jsonwebtoken');
const TokenBlacklist = require('../models/TokenBlacklist');

const auth = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ error: 'Token is not valid' });
    }
};

const adminAuth = (req, res, next) => {
    auth(req, res, () => {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Admin resource, access denied' });
        }
        next();
    });
};

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    try {
        const blacklistedToken = await TokenBlacklist.findOne({ where: { token } });

        if (blacklistedToken) {
            return res.status(401).json({ error: 'Token is blacklisted' });
        }

        const decoded = jwt.verify(token, 'secret');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = { auth, adminAuth, authMiddleware };
