const user = require("../Model/user.model.js");

// All users
const getUsers = async (req, res) => {
    try {
        const users = await user.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Single user
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await user.findById(id);
        if (!users) {
            return res.status(404).json("User doesn't exist");
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// CREATE
const createUser = async (req, res) => {
    try {
        const { username, email, password, admin_type } = req.body;
        // Check if user with the same email already exists
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with the same email already exists" });
        }

        // Create new user
        const newUser = await user.create({ username, email, password, admin_type });
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await user.findByIdAndDelete(id);
        if (!users) {
            return res.status(404).json("User doesn't exist");
        }
        res.status(200).json("User Deleted");
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const { email } = req.body;
        const { id } = req.params;
        const existingUser = await user.findOne({ email });
        if (existingUser && existingUser._id !== id) {
            return res.status(400).json({ message: "User with this email id already exists!" });
        }
        const users = await user.findByIdAndUpdate(id, req.body);
        if (!users) {
            return res.status(404).json("User doesn't exist");
        }
        res.status(200).json("User Updated successfully!");
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
}
