const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminid: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    passwd: { type: String, required: true }
}, { collection: 'admin' });

module.exports = mongoose.model('Admin', adminSchema);
