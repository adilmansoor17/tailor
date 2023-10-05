const { ObjectID } = require("bson");
const logger = require('../../../utils/winstonService');
let person = require("../../../models/person.model.js");
let measurement = require("../../../models/measurement.model.js");

const mongoose = require('mongoose');
const path = require('path');


const controller = (req) => {
  return {

    editMeasurement: async (res) => {
      try {

        let requestedata = req.body.details;
        _measurement = await measurement.findOneAndUpdate({user_id_ref:requestedata.user_id_ref},
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

        res.send({ status: 200, message: "Person added.", data: _measurement });

      } catch (e) {
        logger(0, "error in updateUser" + e.toString());
        res.send({ status: 500, message: "something went wrong" });
      }
    },
    deleteMeasurement: async (res) => {
      try {
        let requestedata = req.body.details;
        let _measurement= {};
        if(requestedata._id){
          _measurement = await measurement.findOneAndDelete({_id:mongoose.Types.ObjectId(requestedata._id)});
        }
        res.send({ status: 200, message: "Measurement deleted.", data: _measurement });

      } catch (e) {
        logger(0, "error in updateUser" + e.toString());
        res.send({ status: 500, message: "something went wrong" });
      }
    },

    getMeasurement: async (res) => {
      try {

        let query = req.body.details;
        // let query = jsonData.filter;
        let _measurement=[];
        if((!query)||query=={}||query==null||query==undefined){
          _measurement = await measurement.find({}).populate('user_id_ref');
        }else if(query._id){
          _measurement = await measurement.find({_id:mongoose.Types.ObjectId(query._id)}).populate('user_id_ref');
        }else  if(query.user_id_ref){
          _measurement = await measurement.find({user_id_ref:mongoose.Types.ObjectId(query.user_id_ref)}).populate('user_id_ref');
        }else{
          _measurement = await measurement.find(query).populate('user_id_ref');
        }
        let response = {};
        response.status = 200;
        response.message = "data fetched successfully";
        response.data = _measurement;

        res.send(response);
      } catch (e) {
        logger(0, "error in getUser " + e.toString());
        res.send({ status: 500, message: "something went wrong" });
      }
    },
    searchMeasurement: async (res) => {
      try {

        let query = req.body.details;
        // let query = jsonData.filter;
        let _measurement=[];
        if((!query)||query=={}||query==null||query==undefined){
          _measurement = await measurement.find({}).populate('user_id_ref');
        }else if(query._id){
          _measurement = await measurement.find({_id:mongoose.Types.ObjectId(query._id)}).populate('user_id_ref');
        }else  if(query.user_id_ref){
          _measurement = await measurement.find({user_id_ref:mongoose.Types.ObjectId(query.user_id_ref)}).populate('user_id_ref');
        }else if(query.tailor_id){
          _measurement = await measurement.find({tailor_id:query.tailor_id}).populate('user_id_ref');
        } else{
          _measurement = await measurement.find(query).populate('user_id_ref');
        }
        let response = {};
        response.status = 200;
        response.message = "data fetched successfully";
        response.data = _measurement;

        res.send(response);
      } catch (e) {
        logger(0, "error in getUser " + e.toString());
        res.send({ status: 500, message: "something went wrong" });
      }
    }

  }
};

module.exports = controller;
