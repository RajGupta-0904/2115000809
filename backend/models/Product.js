const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
        productName: {type:String },
        price: {type:Number},
        rating:{type:String},
        discount: {type:Number},
        availability:{type:String},
        Companies: {
            type: String,
            enum: ['AMZ', 'FLP', 'SNP', 'MYN', 'AZD'],
            // required:true,
        },
        category: {
            type: String,
            enum: ['Phone', 'Computer', 'Tv', 'EarPhone', 'Tablet',
                   'Mouse', 'Pendrive', 'Speaker', 'Charger', 'PC',
                   'Keypad', 'Bluetooth', 'Remote', 'Headset', 'Laptop'],
                //    required:true,
            
        }
},{timestamps:true});

// Create the model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
