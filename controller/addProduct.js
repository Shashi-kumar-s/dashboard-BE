const { response } = require('express');
const addProduct = require('../model/addProduct')


exports.addProduct = async (req, res) => {
    try {
      const requestData = req.body;
      const newProductData = new addProduct(requestData);
      const savedData = await newProductData.save();
      res.status(201).json({ message: "Data saved successfully", data: savedData });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  exports.getAllProduct = async (req, res) => {
    try {
      const data = await addProduct.find()
      res.status(200).json({ message: "successfully fetched data", data: data })
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  exports.deleteProductById = async (req, res) => {
    try {
      const productId = req.params.id;
      const deleteProduct = await addProduct.findByIdAndDelete({ _id: productId })
      if (!deleteProduct) { res.status(400).json({ message: "product not found" }) }
      res.status(200).json({ message: "product delete successfully" })
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  exports.getSingleProductById = async (req, res) => {
    try {
      const productId = req.params.id;
      const getSingleProductData = await addProduct.findById({ _id: productId })
      if (!getSingleProductData) { res.status(400).json({ message: "product not found" }) }
      res.status(200).json({ message: "product found successfully", data: getSingleProductData })
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };


  
  exports.updateSingleProductDataById = async (req, res) => {
    try {
      const productId = req.params.id;
      const updateData = req.body;
  
      const updatedProductData = await addProduct.findByIdAndUpdate(productId, updateData, { new: true, runValidators: true });
  
      if (!updatedProductData) {
        return res.status(404).json({ message: "product data not found" });
      }
  
      res.status(200).json({ message: "product data updated successfully", data: updatedProductData });
    } catch (error) {
      console.error("Error:", error);
  
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
  
      res.status(500).json({ message: "Internal server error" });
    }
  };