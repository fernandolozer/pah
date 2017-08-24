'use strict';

var express = require('express');
var router = express.Router();

let ApiController = require('./../controller/api.controller');

let controller = new ApiController();

router.get('/', controller.handleGetMethod.bind(controller));
// Slack sends a post event
router.post('/', controller.handlePostMethod.bind(controller));

module.exports = router;
