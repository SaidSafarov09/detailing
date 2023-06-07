const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/data';

const connect = async () => {
    await mongoose.connect(URI)
}

module.exports = connect