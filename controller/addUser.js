const { response } = require('express');
const addUser = require('../model/addUser')

exports.addUser = async (req, res) => {
  try {
    const requestData = req.body;
    const newUserData = new addUser(requestData);
    const savedData = await newUserData.save();
    res.status(201).json({ message: "Data saved successfully", data: savedData });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const data = await addUser.find()
    res.status(200).json({ message: "successfully fetched data", data: data })
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const deleteUser = await addUser.findByIdAndDelete({ _id: userId })
    if (!deleteUser) { res.status(400).json({ message: "user not found" }) }
    res.status(200).json({ message: "user delete successfully" })
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.getSingleUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const getSingleUserData = await addUser.findById({ _id: userId })
    if (!getSingleUserData) { res.status(400).json({ message: "user not found" }) }
    res.status(200).json({ message: "user found successfully", data: getSingleUserData })
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.updateSingleUserDataById = async (req, res) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;

    const updatedUserData = await addUser.findByIdAndUpdate(userId, updateData, { new: true, runValidators: true });

    if (!updatedUserData) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", data: updatedUserData });
  } catch (error) {
    console.error("Error:", error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: "Validation error", errors: error.errors });
    }

    res.status(500).json({ message: "Internal server error" });
  }
};



