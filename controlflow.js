// Control Flow Statements in Javascrit

// if-else sataement (if, if-else, if-else-if else)
// if ((conditin) {})    
if (12<13){
    console.log(true);
}

if(15 <13){
    console.log(true);
} // condition is false that why if statement not run

if(!12){
    console.log("number !12");
}

if(!0){
    console.log("number !0")
}

// if-else statement
if (12<13){
    console.log(true);
}else{
    console.log(false);
}

if(15 < 13){
    console.log(true);//condition is false that why if statement not run
} else{
    console.log(false);
}// if staement condition is false that run

if(!12){
    console.log("number !12");
}else{
    console.log("number not !12");
}

if(!0){
    console.log("number !0")
}else{
    console.log("number not !0");
}

//if-else if-else staement
 let loggedin = true;
 let admin = true;
 if (loggedin && admin){
    console.log("welcome admin");
 }else if(loggedin){
    console.log("welcome user");
 }else{
    console.log("go to login page");
 } 

 // switch statement
 switch("BOGO"){
     case "BOGO":
          console.log("buy one get one");
          break;
     case "First50":
          console.log("50% off on first order");
          break; 
     case "blackFriday":
          console.log("it's black friday ssale - get at Rs.50");
          break;  
     default:
          console.log("offer not valid");
 }

 let trafic = "red";
 switch(trafic){
    case "red":
        console.log("stop");
        break;
    case "green":
        console.log("go to");
        break;
    case "yellow":
        console.log("wait");
        break;
    default:
        console.log("trafic signal not valid");            
 }

 //Early Return Pattern
 function score(value){
    if(value >90){
        return "value is more than 90";
    }else if (value <80){
        return "value is less than 80";
    }else if (value <70){
        return "value is less than 70";
    }else if (value <60){
        return "value is less than 60";
    }else{
        return "value is less than 60";
    }
 }
 score(100);

 function score1(value){
    if(value >90) return "value is more than 90";
    else if (value <80) return "value is less than 80";
    else if (value <70) return "value is less than 70";
    else if (value <60) return "value is less than 60";
    else return "value is less than 60";
    
 }

  function score2(value){
    if(value < 60) return "value is less than 60";
    else if (value <70) return "value is less than 70";
    else if (value <80) return "value is less than 80";
    else if (value <90) return "value is less than 90";
    else return "value is more than 90";
 }

   function getGrade(score){
        if(score >= 90 && score <=100){
            return "A +";
        }else if(score >= 80 && score <= 90){
            return "A";
        }else if(score >= 70 && score <= 80){
            return "B";
        }else if(score >= 60 && score <= 70){
            return "C";
        }else if(score >= 33 && score <= 60){
            return "D";
        }else if(score >= 0 && score <= 33){
            return "FAIL";
        }else {
            return "invalid marks"
        }
    }

    function game(value1,value2){
   if(value1 === "rock" && value2 === "scissors"){
        return "rock";
    }else if (value1 === "paper" && value2 === "rock"){
        return "paper";
    }else if (value1 === "scissors" && value2 === "paper"){
        return "scissors";
    }else {
        return "it's a tie";
    }
}
    