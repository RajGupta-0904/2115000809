
const Product = require('../models/Product');
// exports.getAllProducts = async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         res.status(500).json({ error: error.message || 'An error occurred while fetching products'});
//     }
// }

// // Other controller functions for seller-related operations

// // // get user details
// exports.getUserDetails = async (req, res) => {
//     try {
//         // Fetch all seller information
//         const users = await User.find();
//         // console.log(users);

//         if (!users || users.length === 0) {
//             return res.status(400).json({ error: 'No User found' });
//         }

//         // Create an array to hold seller IDs
//         const userIds = users.map(user => user._id);
//         console.log(userIds);

//         // Find existing SellerData document
//         let userData = await SellerInfo.findOne();

//         // If SellerData document doesn't exist, create a new one
//         if (!userData) {
//             userData = new SellerInfo({ userIds });
//         } else {
//             // If SellerData document exists, update the sellerIds array
//             userData.userIds = userIds;
//         }

//         // Save the seller data instance
//         await userData.save();

//         res.status(200).json({ message: 'user data fetched successfully', data: users });
//     } catch (error) {
//         console.error('Error fetching seller details: ', error);
//         res.status(500).json({ error: error.message || "An error occurred while fetching user details"});
//     }
// };

// // Controller function to add a new product
// exports.addProduct = async (req, res) => {
//     try {
        
//         const sellerId = req.sellerId;
//         //const sellerId = req.headers.sellerId; // Get the seller ID from the request headers
//         // const { subcategories } = req.body; // Get product data from request body
//         const { productName, category, brand, itemName, itemDetails, totalQuantity, images, company, price, itemDescription } = req.body;
//         console.log(sellerId);
//         // Check if the sellerId is provided
//         if (!sellerId) {
//             return res.status(400).json({ error: 'Seller ID is required' });
//         }
//         if (!productName || !category || !itemName || !totalQuantity || !price) {
//             return res.status(400).json({ error: 'Please provide all the required information' });
//         }
//         // Create a new product instance with the seller's ID and subcategories
//         // const product = new Product({ sellerId, subcategories });
//         const product = new Product({ 
//             sellerId, 
//             productName, 
//             category, 
//             brand, 
//             itemName, 
//             itemDetails, 
//             totalQuantity, 
//             images, 
//             company, 
//             price, 
//             itemDescription 
//         });
//         // Save the product to the database
//         await product.save();

//         res.status(201).json({ message: 'Product added successfully', data: product });
//     } catch (error) {
//         console.error('Error adding product: ', error);
//         res.status(500).json({ error: error.message || 'An error occurred while adding product' });
//     }
// };
// exports.getProductDetails = async (req, res) => {
//     try {
//         const sellerId = req.sellerId;
//         // Fetch all seller information
 
//         const products = await Product.find({ sellerId });
//         // console.log(users);
        
//         if (!products|| products.length === 0) {
//             return res.status(400).json({ error: 'No Product found' });
//         }
//         if (!sellerId) {
//             return res.status(400).json({ error: 'Seller ID is required' });
//         }
      
//         // console.log(productIdsIds);
//         const seller = await SellerInfo.findByIdAndUpdate(sellerId, { $addToSet: { productIds: { $each: products.map(product => product._id) } } }, { new: true });
//         if (!seller) {
//             return res.status(404).json({ error: 'Seller not found' });
//         }

//         res.status(200).json({ message: 'Product data fetched and stored successfully', data: products });
  
//     } catch (error) {
//         console.error('Error fetching product details: ', error);
//         res.status(500).json({ error: error.message || "An error occurred while fetching product details"});
//     }
// };
// //adding userdetails 
// exports.getUserDetails = async (req, res) => {
//     try {
//         const sellerId = req.sellerId;
//         // Fetch all seller information
 
//         const users = await Product.find({ sellerId });
//         // console.log(users);
        
//         if (!users|| users.length === 0) {
//             return res.status(400).json({ error: 'No Product found' });
//         }
//         if (!sellerId) {
//             return res.status(400).json({ error: 'Seller ID is required' });
//         }
      
//         // console.log(productIdsIds);
//         const seller = await SellerInfo.findByIdAndUpdate(sellerId, { $addToSet: { userIds: { $each: users.map(user => user._id) } } }, { new: true });
//         if (!seller) {
//             return res.status(404).json({ error: 'Seller not found' });
//         }

//         res.status(200).json({ message: 'Product data fetched and stored successfully', data: users });
  
//     } catch (error) {
//         console.error('Error fetching product details: ', error);
//         res.status(500).json({ error: error.message || "An error occurred while fetching product details"});
//     }
// };




