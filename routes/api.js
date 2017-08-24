'use strict';

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    let pah = '(\\____/)\n' +
        '( ͡ ⚫͜ ʖ͡⚫️\n' +
        '  \\╭👉   \\👉';
    res.status(200).send(pah);
});

// Slack sends a post event
router.post('/', (req, res) => {

    let response = {
        response_type: 'in_channel',
        text: '(\\____/)\n' +
            '( ͡ ⚫͜ ʖ͡⚫️\n' +
            '  \\╭👉   \\👉'
    };
    res.status(200).send(response);
});

module.exports = router;
