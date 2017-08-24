'use strict';

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    let pah = '(\\____/)\n' +
        '( ͡ ⚫͜ ʖ͡⚫️\n' +
        '  \\╭👉   \\👉';
    res.status(200).send(pah);
});

module.exports = router;
