const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orders = new Schema({
    tailor_id: String,
    name: String,
    user_id_ref:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'person'
    },
    measurement_id_ref:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'measurement'
    },

    due_date: String,
    clothes:[{
        name: String,
        color:String
    }],
    status: {
        type: String,
        default: 'true'
    },
    description: String 

    
},{timestamps: true});

module.exports = mongoose.model('orders', orders, 'orders');
