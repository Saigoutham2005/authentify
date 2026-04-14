const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // must be provided
        trim: true      // removes spaces before and after
    },
    email: {
        type: String,
        required: true,
        unique: true,   // ensures no two users can have the same email
        lowercase: true // converts automatically to lowercase
    },
    password: {
        type: String,
        required: true,
        minlength: 6    // at least 6 characters
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // only these two roles are allowed
        default: 'user'          // by default, user is normal user
    }
}, { timestamps: true }); // adds createdAt and updatedAt automatically

module.exports = mongoose.model('User', userSchema);