function bmiCalculator (weight, height) {
    var bmi=(weight/(height*height));
    var rounded = bmi.toFixed(1);
  alert(rounded);
  alert(typeof(rounded));
    var bmir=parseFloat(rounded);
  	alert(typeof(bmir));
    if(bmir<18.5){
        return "Yout BMI is "+bmir+", so you are underweight.";
    }
    else if((bmir=>18.5) && (bmir<25)){return "Your BMI is "+bmir+", so you have a normal weight.";}
    else 
       { return "Your BMI is "+bmir+", so you are overweight.";}
}

bmiCalculator(100,2); //Should return "Your BMI is 25 so, you have a normal weight."
