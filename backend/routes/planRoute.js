const express = require("express")
const { getPlans } = require("../controllers/planController")

const router = express.Router()

router.get("/getplan", getPlans)

module.exports = router