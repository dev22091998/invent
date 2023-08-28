const planModel = require("../models/planModel")

module.exports.getPlans = async(req, res)=>{
    const plans = await planModel.find()
    res.send(plans)
}