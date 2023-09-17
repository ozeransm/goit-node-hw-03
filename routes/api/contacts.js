const express = require('express');
const Contacts = require('../../models/contacts');
const router = express.Router();
const validateBody = require('../../middlewares/validateBody');
const schemaBody = require('../../middlewares/schemaBody');
const createError = require('./createError');
const validateParams = require('../../middlewares/validateParams');
const schemaParams = require('../../middlewares/schemaParams');
const validateBodyUpd = require('../../middlewares/validateBodyUpd');
const schemaBodyUpd = require('../../middlewares/schemaBodyUpd');
const validateEmptyBody = require('../../middlewares/validateEmptyBody');
const schemaEmptyBody = require('../../middlewares/schemaEmptyBody');

router.get('/', async (req, res, next) => {
  try{
    const data = await Contacts.find({});
    if (data){
      res.status(200).json({ 
      status: 'Success',
      code: 200,
      data,
      });
      
    }
  } catch(err){
    next(createError('INTERNAL_SERVER_ERROR',err));
  }
   
})

router.get('/:contactId', async (req, res, next) => {

  try{
    const data = await Contacts.find({_id: req.params.contactId})
    if(data){
      res.status(200).json({ 
        status: 'Success',
        code: 200,
        data,
        });
    }
  } catch(err){
    next(createError('NOT_FOUND',err));
  }

})

router.post('/', validateBody(schemaBody), async (req, res, next) => {

  try{
    const data = await Contacts.create(req.body);
    if (data){
        res.status(201).json({ 
        status: 'Created',
        code: 201,
        data,
      })
      
    }else next(createError('INTERNAL_SERVER_ERROR'));
  } catch(err){
    next(createError('INTERNAL_SERVER_ERROR', err));
  }

})

router.delete('/:contactId', async (req, res, next) => {

  try{
    const data = await Contacts.findByIdAndDelete({_id: req.params.contactId});
    if (data){
        res.status(200).json({ 
        message: 'contact deleted',
        status: 'Delete',
        code: 200,
        data,
      })
      
    }else next(createError('NOT_FOUND','Not found by id'));
  } catch(err){
    next(createError('INTERNAL_SERVER_ERROR', err));
  }

})

router.put('/:contactId', [validateParams(schemaParams), validateBodyUpd(schemaBodyUpd)], async (req, res, next) => {
  try{
    const data = await Contacts.findByIdAndUpdate(req.params.contactId, req.body);
    if (data){
        res.status(200).json({ 
        message: 'contact updated',
        status: 'Update',
        code: 200,
        data,
      })
      
    }
  } catch(err){
    next(createError('NOT_FOUND', err.message));
  }
  
})

router.patch('/:contactId/favorite', validateEmptyBody(schemaEmptyBody, 'missing field favorite'), async (req, res, next) => {
  try{
    const data = await Contacts.findByIdAndUpdate(req.params.contactId, req.body);
    if (data){
        res.status(200).json({ 
        message: 'contact updated',
        status: 'Update',
        code: 200,
        data,
      })
      
    }
  } catch(err){
    next(createError('NOT_FOUND', err.message));
  }
  
})

module.exports = router;
