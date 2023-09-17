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

router.get('/', async (req, res, next) => getAll(req, res, next));

router.get('/:contactId', async (req, res, next) => getById(req, res, next));

router.post('/', validateBody(schemaBody), async (req, res, next) => addItem(req, res, next));

router.delete('/:contactId', async (req, res, next) => removeItem(req, res, next));

router.put('/:contactId', [validateParams(schemaParams), validateBody(schemaBodyUpd)], async (req, res, next) => updateItem(req, res, next));

router.patch('/:contactId/favorite', validateBody(schemaEmptyBody, 'missing field favorite'), async (req, res, next) => updateOneFileldItem(req, res, next));

module.exports = router;
