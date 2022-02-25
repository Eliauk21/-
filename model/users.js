let mongoose = require('mongoose');

let UsersSchema = mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:Number,required:true}
})
let UsersModel = mongoose.model('users',UsersSchema)

module.exports = UsersModel;

