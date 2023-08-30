const router = require('express').Router();

const person = require('./modules/person/person.router');
console.log("in routerrr ");

router.use('/person', person);

module.exports = router;
