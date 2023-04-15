
const bodyParser = require("body-parser");
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path = require("path");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+ ""));


mongoose.connect("mongodb+srv://dhaval079:msZuTSg16fhJn5lG@cluster0.rm7on6v.mongodb.net/diskAlgo" , {useNewUrlParser:true},{useUnifiedTopoplogy:true});

const newschema2={
    bitstream:String,
    initial:String,
    final:String,
   };

const diskAlgo=mongoose.model("diskAlgo",newschema2);


app.get("/",function(req,res){
    res.sendFile(__dirname + "/schedule.html")
})

app.post("/",function(req,res){
    let newnote4= diskAlgo({
        bitstream:req.body.bitstream,
        initial:req.body.initial,
        final:req.body.final,
})
newnote4.save();
res.redirect("/");
});

app.listen(5505,function(){
    console.log("Server Connected Successfully");
});