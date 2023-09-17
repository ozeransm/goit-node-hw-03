const express = require('express');
const router = express.Router();
const validateBody = require('../../middlewares/validateBody');
const schemaBody = require('../../middlewares/schemaBody');
const validateParams = require('../../middlewares/validateParams');
const schemaParams = require('../../middlewares/schemaParams');
const schemaBodyUpd = require('../../middlewares/schemaBodyUpd');
const schemaEmptyBody = require('../../middlewares/schemaEmptyBody');
const getAll = require('./getAll');
const getById = require('./getById');
const addItem = require('./addItem');
const removeItem = require('./removeItem');
const updateItem = require('./updateItem');
const updateOneFileldItem = require('./updateOneFileldItem');

router.get('/', getAll);

router.get('/:contactId', getById);

router.post('/', validateBody(schemaBody), addItem);

router.delete('/:contactId', removeItem);

router.put('/:contactId', [validateParams(schemaParams), validateBody(schemaBodyUpd)], updateItem);

router.patch('/:contactId/favorite', validateBody(schemaEmptyBody, 'missing field favorite'), updateOneFileldItem);

module.exports = router;
