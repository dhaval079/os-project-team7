
const bodyParser = require("body-parser");
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path = require("path");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+ ""));

//? if you want to store the database in cloud then use this:
mongoose.connect("mongodb+srv://dhaval079:msZuTSg16fhJn5lG@cluster0.rm7on6v.mongodb.net/practice" , {useNewUrlParser:true},{useUnifiedTopoplogy:true});

//? or if you want to store the database in your localhost that is your computer itself then use this:
// mongoose.connect("mongodb://127.0.0.1:27017/userdb" , {useNewUrlParser:true},{useUnifiedTopoplogy:true});

const newschema2={
    varA:String, 
    varB:String,
    varC:String,
    var1:String,
    var2:String,
    var3:String, 
    var4:String,
    var5:String,
    var6:String,
    var7:String,
    var8:String,
    var9:String,
    var10:String,
    var11:String,
    var12:String,
    var13:String,
    var14:String,
    var15:String,
    var16:String,
    var17:String,
    var18:String,
    var19:String,
    var20:String,
    var21:String,
    var22:String,
    var23:String,
    var24:String,
    var25:String,
    var26:String,
    var27:String,
   };

const newschema3={
    output1:String,
    output2:String,
    output3:String, 
    output4:String,
    output5:String,
    output6:String,
    output7:String,
    output8:String,
    output9:String,
    output10:String,
    output11:String,
    output12:String,
    output13:String,
    output14:String,
    output15:String,
    output16:String,
    output17:String,
    output18:String
   };

const newschema8={
        resA:String,
        resB:String,
        resC:String,
        processSeq1:String,
        processSeq2:String,
        processSeq3:String,
        processSeq4:String,
        processSeq5:String
};


const practice_collectionNewedited=mongoose.model("practice_collectionNewedited",newschema2);
const practice_collectionNeweditedOut=mongoose.model("practice_collectionNeweditedOut",newschema3);
const practice_collectionNeweditedSeq=mongoose.model("practice_collectionNeweditedSeq",newschema8);

app.get("/",function(req,res){
    res.sendFile(__dirname + "/b2.html")
})

app.post("/",function(req,res){
    let newnote4= practice_collectionNewedited({
        varA:req.body.varA,
        varB:req.body.varB,
        varC:req.body.varC,
        var1:req.body.var1,
        var2:req.body.var2,
        var3:req.body.var3,
        var4:req.body.var4,
        var5:req.body.var5,
        var6:req.body.var6,
        var7:req.body.var7,
        var8:req.body.var8,
        var9:req.body.var9,
        var10:req.body.var10,
        var11:req.body.var11,
        var12:req.body.var12,
        var13:req.body.var13,
        var14:req.body.var14,
        var15:req.body.var15,
        var16:req.body.var16,
        var17:req.body.var17,
        var18:req.body.var18,
        var19:req.body.var19,
        var20:req.body.var20,
        var21:req.body.var21,
        var22:req.body.var22,
        var23:req.body.var23,
        var24:req.body.var24,
        var25:req.body.var25,
        var26:req.body.var26,
        var27:req.body.var27
    })
    newnote4.save();

    let newnote6= practice_collectionNeweditedOut({
        outputA:req.body.outputA,
        outputB:req.body.outputB,
        outputC:req.body.outputC,
        output1:req.body.output1,
        output2:req.body.output2,
        output3:req.body.output3,
        output4:req.body.output4,
        output5:req.body.output5,
        output6:req.body.output6,
        output7:req.body.output7,
        output8:req.body.output8,
        output9:req.body.output9,
        output10:req.body.output10,
        output11:req.body.output11,
        output12:req.body.output12,
        output13:req.body.output13,
        output14:req.body.output14,
        output15:req.body.output15,
        output16:req.body.output16,
        output17:req.body.output17,
        output18:req.body.output18,
    })
    newnote6.save();

    

let newnote8=practice_collectionNeweditedSeq({ 
    resA:req.body.resA,
    resB:req.body.resB,
    resC:req.body.resC,
    processSeq1:req.body.processSeq1,
    processSeq2:req.body.processSeq2,
    processSeq3:req.body.processSeq3,
    processSeq4:req.body.processSeq4,
    processSeq5:req.body.processSeq5
})
    newnote8.save();

    res.redirect("/");
})

app.listen(5000,function(){
    console.log("Server Connected Successfully");
})