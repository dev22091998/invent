const mongoose = require("mongoose")

const planSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    data: [
        {
            model: {
                type: String,
                required: true
            },
            detalNumber: {
                type: Number,
                required: true
            },
            deallyPlan: {
                type: Number
            },
            firstShiftPlan: {
                type: Number
            },
            secondShiftPlan: {
                type: Number
            },
        }
    ]
        // _id: {
        //     type: String,
        // },
        // data: [
        //     {
        //         model: {
        //             typeof: String
        //         },
        //         detalNum: {
        //             type: String
        //         },
        //         perHour: {
        //             type: String
        //         },
        //         firstShiftPlan: {
        //             type: String
        //         },
        //         plan: {
        //             type: String
        //         },
        //         produced: {
        //             type: String
        //         },
        //         deliveredToWarehouse: {
        //             type: String
        //         },
    
    
        //         enteredTheWarehouse: {
        //             type: String
        //         }, 
        //         sentFromWarehouse: {
        //             type: String
        //         },
        //         productInWarehouse: {
        //             type: String
        //         }
        //     }
        // ]
});

module.exports = mongoose.model("Plan", planSchema)