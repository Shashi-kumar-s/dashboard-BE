const { response } = require("express")
const bcrypt = require('bcrypt');
const registerUser = require("../model/registerUser")


exports.registerUser = async (req, res) => {
    try {
        const requestData = req.body;
        const existingUser = await registerUser.findOne({ email: requestData.email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const hashedPassword = await bcrypt.hash(requestData.password, 10);
        requestData.password = hashedPassword;
        const newUserData = new registerUser(requestData);
        const savedData = await newUserData.save();
        res.status(201).json({ message: "register success", data: savedData })
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: "internal servor error" })
    }
}

