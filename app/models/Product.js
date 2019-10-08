const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    productName:{
        type:String,
        require:true,
        trim:true
    },
    company:{
        type:String,
        require:true,
        trim:true
    },
    batchNo:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    MRP:{
        type:Number,
        require:true
    },
    Rate:{
        type:Number
    }
},
{
    timestamps:true
});

module.exports = mongoose.model('Product',productSchema);