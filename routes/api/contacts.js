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
const auth = require('../../middlewares/auth');
const schemaRegister = require('../../middlewares/schemaRegister');
const schemaLogin = require('../../middlewares/schemaLogin')
const updateSubscription = require('../../auth/user/updateSubscription');
const schemaEmptyBodySub = require('../../middlewares/chemaEmptyBodySub');

router.get('/', auth, getAll);

router.get('/:contactId', auth, getById);

router.post('/', [validateBody(schemaBody), auth], addItem);

router.delete('/:contactId', removeItem);

router.put('/:contactId', [validateParams(schemaParams), validateBody(schemaBodyUpd)], updateItem);

router.get('/:contactId/favorite', validateBody(schemaEmptyBody, 'missing field favorite'), updateOneFileldItem);

router.patch('/users', validateBody(schemaEmptyBodySub, 'missing field subscription'), auth, updateSubscription);

module.exports = router;
