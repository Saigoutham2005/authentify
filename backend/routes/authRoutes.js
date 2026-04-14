const express = require('express');
const router = express.Router();

const { signup, login } = require('../controllers/authController');

const authMiddleware = require('../middlewares/authMiddleware');

const roleMiddleware = require('../middlewares/roleMiddleware');


router.post('/signup', signup);
router.post('/login', login);

// ✅ Protected route example
router.get('/dashboard', authMiddleware, (req, res) => {
    res.json({ message: `Welcome ${req.user.id}, you are authorized!` });
});

router.get('/admin', authMiddleware, roleMiddleware(['admin']), (req, res) => {
    res.json({ message: 'Welcome Admin! You have full access.' });
});

module.exports = router;