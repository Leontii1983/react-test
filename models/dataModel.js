const mongoose = require('mongoose');
const slugify = require('slugify');

const dataSchema = new mongoose.Schema({

    name : {
        type: String
    }
 


});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;