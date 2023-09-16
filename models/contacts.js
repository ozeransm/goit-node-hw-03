const mongoose = require('mongoose');
const createError = require('../routes/api/createError');

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

const listContacts = async () => await Contacts.find({});

const getContactById = async (contactId) => await Contacts.find({_id: contactId})

const removeContact = async (contactId) => await Contacts.findByIdAndDelete({_id: contactId});

const addContact = async (body) => await Contacts.create(body); 

const updateContact = async (contactId, body) => {
  try{
    const result = await Contacts.findByIdAndUpdate(contactId, body);
    return result;
  }catch(err){
    throw createError('NOT_FOUND', err.message);
  }
}

const updateStatusContact = async (contactId, body) => { 
  try{
    const result = await Contacts.findByIdAndUpdate(contactId, body);
    return result;
  }catch(err){
    throw createError('NOT_FOUND', err.message);
  }
  
  
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact
}
