<h1>Eample or Excercise:</h1>
<p> variable
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: nm not declare
<p>Why :aa ek hosting thay se aetle two part ma pade and let nm; e top ma aavshe

</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error:undefind aave se 
<p>Why : thre is TDZ
 aa ek hosting thay se aetle two part ma pade and let nm; e top ma aavshe
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: 2
<p>Why : 
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: 10
<p>Why : let se aetle one declare run thay but block scope pn run thay jp clg karo to
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p> run thashe 
<p>person = {} ; ❌ </p>butnot run object se aetle object aakha{} ma change no thay
<p>Answer or Error:  
<p>Why : 
</div>
 
<p> data type
 <br>
<hr>
<br>
<h3>Example 1 :</h3>
<p>true + false </p> 
<p> ans: 1
</div>
 
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p> ans: 1
</div>
 
<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>ans:1212
</div>
 
<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p> ans : false-----
</div>
 
<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p> ans : 11
</div>


<p> oparetors
<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
<p> ans :both are greater than 5
</div>
 
<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
<p>Answer or Error:  Acess granted
</div>
 
<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
<p>Answer or Error:  Pleasant day
</div>
 
<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
<p>Answer or Error: falsy value
</div>
 
<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Answer or Error:  c
</div>
 
<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Answer or Error: Gold 
</div>
 
<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Answer or Error:  Deny
</div>
 
<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>Answer or Error: 6
</div>
 
<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>Answer or Error: 9 
</div>
 
<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>Answer or Error:  5 4
</div>
 
<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>Answer or Error:  5 5
</div>
 
<div>
<h1>Example 11:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>Answer or Error:  console.log(m--) => 10 console.log(m) => 9
</div>
 
<div>
<h1>Example 11:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>Answer or Error: 6 
</div>
 
<div>
<h1>Example 11:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
return ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>Answer or Error:  101
</div>
 
<div>
<h1>Example 12:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p>Answer or Error:  Matched
</div>


<p> controllflow statement
<div>
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
    case 2:
    console.log("Two");
    case 3:
    console.log("Three");
}</P>
<p> ans : Two
<div>
 
<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<div>
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
</div>
<div>
 
<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<div>function game(value1,value2){
   if(value1 === rock && value2 === scissors){
        return "rock";
    }else if (value1 === paper && value2 === rock){
        return "paper";
    }else if (value1 === scissors && value2 === paper){
        return "scissors";
    }else {
        return "it's a tie";
    }
}
 
</div>
<div>