const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
        productName: {type:String ,required:true},
        price: {type:Number,required:true},
        rating:{type:String ,required:true},
        discount: {type:Number,required:true},
        availability:{type:String ,required:true},
        Companies: {
            type: String,
            enum: ['AMZ', 'FLP', 'SNP', 'MYN', 'AZD']
        },
        category: {
            type: String,
            enum: ['Phone', 'Computer', 'Tv', 'EarPhone', 'Tablet',
                   'Mouse', 'Pendrive', 'Speaker', 'Charger', 'PC',
                   'Keypad', 'Bluetooth', 'Remote', 'Headset', 'Laptop']
        }
},{timestamps:true});

// Create the model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
