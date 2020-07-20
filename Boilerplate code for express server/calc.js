const express = require("express");
const bodyParse=require("body-parser")
const app = express();

app.use(express.static("public"));

app.use(bodyParse.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
//BMI Calculation starts  
var bmi=((Number)(req.body.weight)/((Number)(req.body.height)*(Number)(req.body.height)));
var rounded = bmi.toFixed(1);
var bmir=parseFloat(rounded);
if(bmir<18.5){
    res.send("Yout BMI is "+bmir+", so you are underweight.");
}
else if((bmir=>18.5) && (bmir<25)){res.send("Your BMI is "+bmir+", so you have a normal weight.");}
else
   { res.send("Your BMI is "+bmir+", so you are overweight.");}
  //BMI Calculation end
})

app.listen("3000",function(){
  console.log("Server running");
});
