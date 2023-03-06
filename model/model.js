const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    employeeid: {
        required: true,
        type: Number
    },
    
    firstname: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },


    hireDate: {
        required: true,
        type: Date
    }
})

module.exports = mongoose.model('Data', dataSchema)