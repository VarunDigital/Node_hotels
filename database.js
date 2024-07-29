const mongoose = require('mongoose');

// Define mongodb connection url
const mongoURL = 'mongodb://localhost/students';

// set up mongodb connection
mongoose.connect(mongoURL);

// Get the default connection
const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connected successfully');
});

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// This is a comment

module.exports = db;