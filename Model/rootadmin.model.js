const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const rootadminSchema = mongoose.Schema(
    {
        username:{
            type:"String",
            required:true,
        },
        email:{
            type:"String",
            required:true,
        },
        password:{
            type:"String",
            required:true,
        }
    },
    {
        timestamps:true,
    }
)

const rootadmin = mongoose.model("rootadmin",rootadminSchema);
module.exports=rootadmin;