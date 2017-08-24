'use strict';

class ApiController {

    handleGetMethod(req, res, next) {
        let pah = '(\\____/)\n' +
            '( ͡ ⚫͜ ʖ͡⚫️\n' +
            '  \\╭👉   \\👉';
        res.status(200).send(pah);
    }

    handlePostMethod(req, res, next) {

        console.log('request', req);

        let pah =   '(\\____/)\n' +
                    '( ͡ ⚫͜ ʖ͡⚫️\n' +
                    '  \\╭👉   \\👉';

        let response = {
            response_type: 'in_channel',
            text: pah
        };
        res.status(200).send(response);
    }
}

module.exports = ApiController;
