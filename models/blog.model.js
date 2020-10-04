const mongoose = require('mongoose');

const Schema =  mongoose.Schema

const Blogschema =  new Schema({
    username: { type: String, required: true },
    heading: {type: String, required:true},
    text:{type:String, required:true},
    commentby:{type:Array},
    comment:{type:Array},
}, {
    timestamps: true,
  });

const Blogs = mongoose.model('Blogs', Blogschema)

module.exports= Blogs