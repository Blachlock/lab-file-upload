const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = Schema({
  username: String,
  email:    String,
  password: String,
  picture: {
    path: String,
    name: String
  }
}, 
  {
  timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" 
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
