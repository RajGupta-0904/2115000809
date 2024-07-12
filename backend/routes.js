const express = require('express');
const productRoutes = require('./routes/productRoutes');
const router = express.Router();

router.use(productRoutes);

module.exports = router;