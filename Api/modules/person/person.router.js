const router = require('express').Router();
const logger = require('../../utils/winstonService');
const controller = require('./controller/person.controller');


router.route('/getUser')
    .post(async (req, res) => {
        console.log("yea, got these mans: ")
        controller(req).getUser(res);

    });

    router.route('/addUser')
    .post(async (req, res) => {
        console.log("yea, got these mans: ")
        controller(req).addUser(res);

    });

    router.route('/searchUser')
    .post(async (req, res) => {
        console.log("yea, got these mans: ")
        controller(req).searchUser(res);

    });

    router.route('/deleteUser')
    .post(async (req, res) => {
        console.log("yea, got these mans: ")
        controller(req).deleteUser(res);

    });
module.exports = router;
