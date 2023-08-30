const router = require('express').Router();

const person = require('./modules/person/person.router');
const measurement = require('./modules/measurements/measurement.router');

console.log("in routerrr ");

router.use('/person', person);
router.use('/measurement', measurement);
module.exports = router;
