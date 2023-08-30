const { ObjectID } = require("bson");
const logger = require('../../../utils/winstonService');
let person = require("../../../models/person.model.js");
const mongoose = require('mongoose');
const path = require('path');


const controller = (req) => {
    return {

    setData: async (res) => {
        try {
         
          let requestedata = req.body.data;
          //console.log("req.body, req.body.data",req.body,req.body.data)
          let _person = new person();
          _person.name = requestedata.name;
          _person.pass = requestedata.pass;
          _person.save();

          console.log("yooo data :", _person);

          // let newperson=await person.create({name:"asbsdf",pass:"ag"});
          // console.log("yea, there: ",newperson);
          
          res.send({ status: 200, message: "Person added.", data:_person });

        } catch (e) {
          logger(0, "error in updateUser" + e.toString());
          res.send({ status: 500, message: "something went wrong" });
        }
      },

      
      getUser: async (res) => {
        try {
          
          let jsonData = req.body.data;
         // let query = jsonData.filter;

          //let user = await person.findOne({_id:mongoose.Types.ObjectId('61a51ad93eb6445418b6ace8')});
        //  let user = await person.findOne({name:jsonData.name});
  
          let response = {};
          response.status = 200;
          response.message = "data fetched successfully";
          response.data = {};
  
          res.send(response);
        } catch (e) {
          logger(0, "error in getUser " + e.toString());
          res.send({ status: 500, message: "something went wrong" });
        }
      }  
    }
};

module.exports = controller;
