
const bodyParser = require("body-parser");
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path = require("path");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+ ""));


mongoose.connect("mongodb+srv://dhaval079:msZuTSg16fhJn5lG@cluster0.rm7on6v.mongodb.net/roundRobin" , {useNewUrlParser:true},{useUnifiedTopoplogy:true});

const newschema2={
    timeQunatum:String,
    inputa1:String,
    inputa2:String,
    inputa3:String,
    inputa4:String,
    inputb1:String,
    inputb2:String,
    inputb3:String,
    inputb4:String
   };

const roundrobinCollection=mongoose.model("roundrobinCollection",newschema2);


app.get("/",function(req,res){
    res.sendFile(__dirname + "/roundrobin.html")
})

app.post("/",function(req,res){
    let newnote4= roundrobinCollection({
        timeQunatum:req.body.timeQunatum,
        inputa1:req.body.inputa1,
        inputa2:req.body.inputa2,
        inputa3:req.body.inputa3,
        inputa4:req.body.inputa4,
        inputb1:req.body.inputb1,
        inputb2:req.body.inputb2,
        inputb3:req.body.inputb3,
        inputb4:req.body.inputb4
})
newnote4.save();
res.redirect("/");
});

app.listen(8000,function(){
    console.log("Server Connected Successfully");
});