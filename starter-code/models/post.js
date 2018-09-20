const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = Schema({
  content: String,
  creatorId: {type: Schema.Types.ObjectId, ref:'User'},
  picPath: String,
  picName: String,
}, 
  {
  timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" 
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = Post;