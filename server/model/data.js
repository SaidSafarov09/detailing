const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        reguired: true,
        unique: true
    },
    phone: String,
    service: String,
    type: String ,
    day: String ,
    time: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Data', dataSchema)