const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Get token from headers
    const token = req.headers.authorization?.split(' ')[1];

    // If no token → deny access
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // store user info (id, role) in req object
        next(); // move to next function (controller)
    } catch (error) {
        res.status(401).json({ message: 'Token is invalid or expired' });
    }
};

module.exports = authMiddleware;