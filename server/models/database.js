const mongoose = require("mongoose");
const Connection = ()=>{
     mongoose.set('strictQuery', true);

  mongoose.connect("mongodb://0.0.0.0:27017/RecipeDatabase",{useUnifiedTopology : true,useNewUrlParser: true})
  .then(()=>console.log("connection successfull .."))
  .catch((err)=>console.log(err));

}
Connection();

// Models
require('./Category');
require('./recipe');
