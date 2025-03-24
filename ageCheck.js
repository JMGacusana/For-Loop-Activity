// If Statement Activity
let yourAge = pareInt(prompt("Enter Your Age: "));

if (yourAge <  13){                       // this will be exevute the age below 13
   console.log("You are a Child");
}else if(yourAge >=13 && yourAge <= 19){  // this will execute the age froom 13-19
   console.log("You are a Teenager");
}else{                                    // this will execute the age 20 and above
   console.log("You are an Adult");
}
