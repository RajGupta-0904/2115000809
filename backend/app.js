const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const productRouter=require('./routes/productRoutes');


const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Afford', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected  to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB: ', error.message);
});

app.use(bodyParser.json());

app.use(productRouter);

app.use(routes);


process.on('uncaughtException', (error) => {
    console.log('Uncaught Exception: ', error);
    process.exit(1);
});

process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection: ', error);
    process.exit(1);
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;