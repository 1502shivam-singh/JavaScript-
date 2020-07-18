const express = require("express");
const bodyParse=require("body-parser")
const app = express();

app.use(express.static("public"));

app.use(bodyParse.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
  res.sendFile(__dirname +"/style.css");
});

app.post("/",function(req,res){
var bmi=((Number)(req.body.weight)/((Number)(req.body.height)*(Number)(req.body.height)));
var rounded = bmi.toFixed(1);

//Used for debuging
//alert(rounded);
//alert(typeof(rounded));

var bmir=parseFloat(rounded);
//alert(typeof(bmir));  Debugging
if(bmir<18.5){
    res.send("Yout BMI is "+bmir+", so you are underweight.");
}
else if((bmir=>18.5) && (bmir<25)){res.send("Your BMI is "+bmir+", so you have a normal weight.");}
else
   { res.send("Your BMI is "+bmir+", so you are overweight.");}
})

app.listen("3000",function(){
  console.log("Server running");
});
