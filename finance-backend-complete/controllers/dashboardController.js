
const Finance = require("../models/Finance");

exports.getSummary = async(req,res)=>{
  const income = await Finance.aggregate([
    {$match:{type:"income"}},
    {$group:{_id:null, total:{$sum:"$amount"}}}
  ]);

  const expense = await Finance.aggregate([
    {$match:{type:"expense"}},
    {$group:{_id:null, total:{$sum:"$amount"}}}
  ]);

  res.json({
    totalIncome: income[0]?.total || 0,
    totalExpense: expense[0]?.total || 0,
    balance:(income[0]?.total || 0)-(expense[0]?.total || 0)
  });
};
