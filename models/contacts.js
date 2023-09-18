const mongoose = require('mongoose');

  const schema = new mongoose.Schema(
  
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  }
  );
const Contacts = mongoose.model('contact', schema);

module.exports = Contacts;
