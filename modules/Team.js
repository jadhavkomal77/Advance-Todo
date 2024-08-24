const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
}, { timestamps: true })

module.exports = mongoose.model("team", teamSchema)