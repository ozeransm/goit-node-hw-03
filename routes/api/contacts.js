const express = require('express');
const router = express.Router();
const validateBody = require('../../middlewares/validateBody');
const schemaBody = require('../../middlewares/schemaBody');
const validateParams = require('../../middlewares/validateParams');
const schemaParams = require('../../middlewares/schemaParams');
const schemaBodyUpd = require('../../middlewares/schemaBodyUpd');
const schemaEmptyBody = require('../../middlewares/schemaEmptyBody');
const getAll = require('../../controlers/getAll');
const getById = require('../../controlers/getById');
const addItem = require('../../controlers/addItem');
const removeItem = require('../../controlers/removeItem');
const updateItem = require('../../controlers/updateItem');
const updateOneFileldItem = require('../../controlers/updateOneFileldItem');

router.get('/', getAll);

router.get('/:contactId', getById);

router.post('/', validateBody(schemaBody), addItem);

router.delete('/:contactId', removeItem);

router.put('/:contactId', [validateParams(schemaParams), validateBody(schemaBodyUpd)], updateItem);

router.patch('/:contactId/favorite', validateBody(schemaEmptyBody, 'missing field favorite'), updateOneFileldItem);

module.exports = router;
