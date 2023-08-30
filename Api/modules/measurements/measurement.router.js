const router = require('express').Router();
const logger = require('../../utils/winstonService');
const controller = require('./controller/measurement.controller');


    router.route('/getMeasurement')
    .post(async (req, res) => {
        console.log("yea, got these mans: ")
        controller(req).getMeasurement(res);

    });

    router.route('/editMeasurement')
    .post(async (req, res) => {
        console.log("yea, got these mans: ")
        controller(req).editMeasurement(res);

    });

    router.route('/searchMeasurement')
    .post(async (req, res) => {
        console.log("yea, got these mans: ")
        controller(req).searchMeasurement(res);

    });

    router.route('/deleteMeasurement')
    .post(async (req, res) => {
        console.log("yea, got these mans: ")
        controller(req).deleteMeasurement(res);

    });
module.exports = router;
