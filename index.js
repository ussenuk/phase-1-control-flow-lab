function scuberGreetingForFeet(ride){
  // Write your code here!
  let charges ="I will gladly take your thirty bucks.";
  let thisOnIsOnMe = "This one is on me!";
  let not = "No can do.";
  if (ride > 2500){
    //let thisOnIsOnMe = "This one is on me!";
    return not;
  } else if (ride > 2000){
    //let charges ="I will gladly take your thirty bucks.";
    return charges;
  } else if (ride <= 400){
    return thisOnIsOnMe;
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  //if (city==="NYC"){let ok="Ok, sounds good."; return ok;}
  let a = "NYC";
  return (city != a) ? "No go." : "Ok, sounds good.";
}

function switchOnCharmFromTip(Tip){
  // Write your code here!
  switch (Tip) {

    case 'generous':
        return Tip = "Thank you so much.";
        //break;

    case 'not as generous':
        return Tip = "Thank you.";
        //break;
    
    default:
        return Tip = "Bye.";
      //break;
}

}