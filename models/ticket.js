const mongoose = require("mongoose")
    const schema = mongoose.Schema(
        {
            "name":String,
            "age":String,
            "source":String,
            "destination":String,
            "phoneno":String
        }
    )
let ticketmodel = mongoose.model("ticket",schema);
module.exports = {ticketmodel}