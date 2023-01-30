const mongoose = require('mongoose')


//mongoose.set('strictQuery', true);

const inStockSchema = new mongoose.Schema({
    productId :
 [ {type: mongoose.Types.ObjectId, ref: 'product'}]


})