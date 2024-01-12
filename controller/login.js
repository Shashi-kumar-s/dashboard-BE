const { response } = require("express")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginUser = require("../model/registerUser")


exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ userId: user._id, password: user.password, email: user.email }, 'your-secret-key', { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
