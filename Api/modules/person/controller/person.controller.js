const { ObjectID } = require("bson");
const logger = require('../../../utils/winstonService');
let person = require("../../../models/person.model.js");
let measurement = require("../../../models/measurement.model.js");

const mongoose = require('mongoose');
const path = require('path');


const controller = (req) => {
  return {

    addUser: async (res) => {
      try {

        let requestedata = req.body.details;
        let  _person ={}, _measurement={};
        if(requestedata._id){
          _person = await person.findOneAndUpdate({_id:mongoose.Types.ObjectId(requestedata._id)},
          {
            $set:{
              tailor_id: requestedata.tailor_id,
              name: requestedata.name,
              age: requestedata.age,
              phone: requestedata.phone,
              email: requestedata.email,
              address: requestedata.address,
              status: requestedata.status
            }
          }
          ,{new:true, upsert:true}); 

          _measurement = await measurement.findOneAndUpdate({user_id_ref:_person._id},
            {
              $set:{
                tailor_id: requestedata.tailor_id,
                name: requestedata.name,
                user_id_ref:_person._id,
                lmbai: requestedata.lmbai,
                bazu: requestedata.bazu,
                teera: requestedata.teera,
                gala: requestedata.gala,
                chhati: requestedata.chhati,
                qamar: requestedata.qamar,
                ghera: requestedata.ghera,
                shalwar: requestedata.shalwar,
                pancha: requestedata.pancha,
                packet_samne: requestedata.packet_samne,
                packet_side: requestedata.packet_side,
                packet_shalwar: requestedata.packet_shalwar,
                description: requestedata.description,
                kaff: requestedata.kaff,
                modda: requestedata.modda,
                status: requestedata.status
              }
            }
            ,{new:true, upsert:true}); 



        }else{
          _person = await person.findOneAndUpdate({tailor_id:requestedata.tailor_id},
          {
            $set:{
              tailor_id: requestedata.tailor_id,
              name: requestedata.name,
              age: requestedata.age,
              phone: requestedata.phone,
              email: requestedata.email,
              address: requestedata.address,
              status: requestedata.status
            }
          }
          ,{new:true, upsert:true}); 


          _measurement = await measurement.findOneAndUpdate({user_id_ref:_person._id},
            {
              $set:{
                tailor_id: requestedata.tailor_id,
                name: requestedata.name,
                user_id_ref:_person._id,
                lmbai: requestedata.lmbai,
                bazu: requestedata.bazu,
                teera: requestedata.teera,
                gala: requestedata.gala,
                chhati: requestedata.chhati,
                qamar: requestedata.qamar,
                ghera: requestedata.ghera,
                shalwar: requestedata.shalwar,
                pancha: requestedata.pancha,
                packet_samne: requestedata.packet_samne,
                packet_side: requestedata.packet_side,
                packet_shalwar: requestedata.packet_shalwar,
                description: requestedata.description,
                kaff: requestedata.kaff,
                modda: requestedata.modda,
                status: requestedata.status
              }
            }
            ,{new:true, upsert:true}); 

        }
        console.log("yooo data :", _person);
        res.send({ status: 200, message: "Person added.", data: _person });

      } catch (e) {
        logger(0, "error in updateUser" + e.toString());
        res.send({ status: 500, message: "something went wrong" });
      }
    },


    getUser: async (res) => {
      try {

        let query = req.body.details;
        // let query = jsonData.filter;
        let users=[];
        if((!query)||query=={}||query==null||query==undefined){
          users = await person.find({});
        }else if(query._id){
          users = await person.find({_id:mongoose.Types.ObjectId(query._id)});
        }else{
          users = await person.find(query);
        }
        let response = {};
        response.status = 200;
        response.message = "data fetched successfully";
        response.data = users;

        res.send(response);
      } catch (e) {
        logger(0, "error in getUser " + e.toString());
        res.send({ status: 500, message: "something went wrong" });
      }
    },


    searchUser: async (res) => {
      try {

        let query = req.body.details;
        // let query = jsonData.filter;
        let users=[];
        if((!query)||query=={}||query==null||query==undefined){
          users = await person.find({});
        }else if(query._id){
          users = await person.find({_id:mongoose.Types.ObjectId(query._id)});
        }else if(query.tailor_id){
          users = await person.find({tailor_id:query.tailor_id});
        }else if(query.name){
          users = await person.find({name:query.name});
        }else if(query.phone){
          users = await person.find({phone:query.phone});
        }else{
          users = await person.find(query);
        }
        let response = {};
        response.status = 200;
        response.message = "data fetched successfully";
        response.data = users;

        res.send(response);
      } catch (e) {
        logger(0, "error in getUser " + e.toString());
        res.send({ status: 500, message: "something went wrong" });
      }
    },

    deleteUser: async (res) => {
      try {
        let requestedata = req.body.details;
        let _person= {};
        if(requestedata._id){
          _person = await person.findOneAndDelete({_id:mongoose.Types.ObjectId(requestedata._id)});
          const _measurement = await measurement.findOneAndDelete({user_id_ref:mongoose.Types.ObjectId(requestedata._id)});
          
        }
        res.send({ status: 200, message: "Person deleted.", data: _person });

      } catch (e) {
        logger(0, "error in updateUser" + e.toString());
        res.send({ status: 500, message: "something went wrong" });
      }
    },

  }
};

module.exports = controller;
