const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        reguired: true,
        unique: true
    },
    phone: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Data', dataSchema)