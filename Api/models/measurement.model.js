const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const measurement = new Schema({
    tailor_id: String,
    name: String,
    user_id_ref:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'person'
    },

    lmbai: String,
    bazu: String,
    teera: String,
    gala: String,
    gala: String,

    gala: String,
    gala: String,
    gala: String,
    gala: String,

    packet_samne: String,
    packet_side: String,
    packet_shalwar: String,
    
    description: String,

    status: String
    
},{timestamps: true});

module.exports = mongoose.model('measurement', measurement, 'measurement');
