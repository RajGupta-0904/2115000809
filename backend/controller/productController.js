
const Product = require('../models/Product');
const { validationResult } = require('express-validator');
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: error.message || 'An error occurred while fetching products'});
    }
}

exports.addProduct = async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }
    const { productName, price, rating, discount, availability, Companies, category } = req.body;

    try {
        const newProduct = new Product({
            productName,
            price,
            rating,
            discount,
            availability,
            Companies,
            category
        });
        await newProduct.save();
        // res.status(201).json({ message: 'Product added successfully', product: newProduct });
        res.status(200).json({newProduct});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
exports.getTopProducts = async (req, res) => {
    try {
        const { category, Companies, limit } = req.query;
        if (!category || !Companies || !limit) {
            return res.status(400).json({ message: 'Category, Companies, and limit are required' });
        }
        const products = await Product.find({ category, Companies: Companies })
            .sort({ rating: -1, price: 1 })
            .limit(parseInt(limit)); 
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};





