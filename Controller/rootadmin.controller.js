const rootadmin = require("../Model/rootadmin.model.js")

// All user
const getrootadmins =async (req,res)=>{
    try{
        const rootadmins=await rootadmin.find({});
        res.status(200).json(rootadmins);
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    } 
};

// Single user
const getrootadmin=async (req,res)=>{
    try{
        const{id}=req.params;
        const rootadmins=await rootadmin.findById(id);
        if(!rootadmins) {
            return res.status(404).json("Root Admin doesnt exist");
        }
        res.status(200).json(rootadmins);
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    } 
    };
//CREATE
const createrootadmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Check if user with the same email already exists
    const existingUser = await rootadmin.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Root Admin with the same email already exists" });
    }

    // Create new user
    const newUser = await rootadmin.create({ username, email, password });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleterootadmin=async(req,res)=>{
    try {
        const {id} =req.params;
        const rootadmins = await rootadmin.findByIdAndDelete(id);
        if(!rootadmins) {
            return res.status(404).json("User doesnt exist");
        }
        res.status(200).json("User Deleted");
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const updaterootadmin = async(req,res)=>{
    try {
        const {email} = req.body;
        const {id} = req.params;
        const exisitinguser = await rootadmin.findOne({email});
        if (exisitinguser && exisitinguser._id !== id) {
            return res.status(400).json({message:"Already user exist with this email id!"});
        } 
        const rootadmins = await rootadmin.findByIdAndUpdate(id, req.body);
        if(!rootadmins) {
            return res.status(404).json("User doesnt exist");
        }
        res.status(200).json("User Updated successfully !");   
    } catch (error) {
        res.status(500).json({
            message: error.message,
        }); 
    }
}

module.exports={
    getrootadmins,  //All users
    getrootadmin,   //Single user
    createrootadmin,//Create user
    deleterootadmin,//Delete user
    updaterootadmin,//Update user
}