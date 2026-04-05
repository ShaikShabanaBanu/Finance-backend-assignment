
const Finance = require("../models/Finance");

exports.createRecord = async(req,res)=>{
  const data = await Finance.create(req.body);
  res.json(data);
};

exports.getRecords = async(req,res)=>{
  const {type, category} = req.query;
  const filter = {};
  if(type) filter.type = type;
  if(category) filter.category = category;

  const records = await Finance.find(filter);
  res.json(records);
};

exports.updateRecord = async(req,res)=>{
  const data = await Finance.findByIdAndUpdate(req.params.id, req.body,{new:true});
  res.json(data);
};

exports.deleteRecord = async(req,res)=>{
  await Finance.findByIdAndDelete(req.params.id);
  res.json({msg:"Deleted"});
};
