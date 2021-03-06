const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    content: {
        type:String,
    },
    date:{
        type: Date,
        default: Date.now
    },
    author:{
        type: String,
        required: true
    }
});


mongoose.model("Post", postSchema);