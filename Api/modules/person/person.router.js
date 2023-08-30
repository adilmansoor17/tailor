const router = require('express').Router();
const logger = require('../../utils/winstonService');
const controller = require('./controller/person.controller');

router.route('/setData')
    .post(async (req, res) => {
        controller(req).setData(res);
    });

router.route('/getData')
    .post(async (req, res) => {
        console.log("yea, got these mans: ")
        controller(req).getData(res);

    });


module.exports = router;
