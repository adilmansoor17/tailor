let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let fileUpload = require("express-fileupload");
let fs = require("fs");
let https = require("https");
let http = require("http");
const morgan = require('morgan');
const logger = require('./utils/winstonService');
const dotenv = require('dotenv');
const loadConfig = dotenv.config();
const CONFIG = require('./config/config');
const db = require('./db');
var cors = require('cors');
const moment = require('moment');



let app = express();
app.get('/', (req, res) => {
    res.send({status:200, message: 'you are on shooda api'});
});
// Add headers



app.use(function (req, res, next) {

    //  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
     res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allowdb
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
});


app.use(cors());
app.use(morgan('dev'));
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const routes = require('./router');
app.use('/api', routes);



app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "dist/angular-matrial-design")));


//Socket & port init
let server = app.listen(CONFIG.PORT.EXPRESS, function () {
    logger(2, "Express server listening on port " + CONFIG.PORT.EXPRESS);
    // pccService.subscribeWebhook();
});



console.log("Url: ", CONFIG.BASE_URL)



// Redirect all the other requests
app.get("*", (req, res) => {
    res.send({status: 404, message: 'The specified url does not exists'});
});

NODE_TLS_REJECT_UNAUTHORIZED = 0;