// function
// what --> function is a block of code that performs a specific task.
// why --> to avoid code repetition and to make code modular and reusable.
// how --> function keywork, name, parameters, body, return statement

// type of functions
// function name(params) {} --> function declaration
// function abc(){}
//let fnc = function (){} --> function expression
// let fnc = function (){};
// let fnc = () => {} --> arrow function --> fat arrow function
// let func1 = () => {};

// function temp_cart(){
//     console.log("Adding Product");
// }
// temp_cart();
// temp_cart();
// temp_cart();

// parameters vs arguments
// parameters are the names listed in the function definition (params --> () ni ander lakheli values)
// arguments are the real values passed to the function (args --> function call karti () ni ander lakheli(pass) kareli values)

// function cartBtn(product) {
//     console.log("adding", product, "to cart");
// }
// cartBtn("dell");
// cartBtn("HP");
// cartBtn("apple");

// function product_price(product, price) {
//     console.log("adding", product, "to cart with", price);
//     }
// product_price("dell", 40000);
// product_price("hp", 670000);
// product_price("apple", 90000);


// convert  into function expression
// let fuc = function(){}
// function fnc_expression = function (product, price) {
//     console.log("adding", product, "to cart with", price);
//     }
// fnc_expression("hp", 670000);
// fnc_expression("apple", 90000);
// fnc_expression("dell", 40000);

 // convert into arrow function
 // let fnc = () => {}   
// function fnc_arrow = (product, price) =>{
//     console.log("adding", product, "to cart with", price);
//     }
//  fnc_arrow("apple", 90000);
//  fnc_arrow("dell", 40000);
//  fnc_arrow("hp", 670000);

// Default, rest parameters in function
// default
// function def(v1, v2){
//     console.log(v1,v2);
// }
// def();

// function buyNow(product = "products Name" , price ="product_price"){
//     console.log(product,price);
// }
// buyNow("moblie",789);

// rest --> jyare function ma multiple arguments pass karva to vadhare params banava pade se mate te na
// karvu pade te mate parameter use kariye chhiye 
// (rest --> ... jo function na parameter ni anader lakhva ma aave se)

// function abcd(v1, v2, v3, v4,v5,v6,v7,v8,v9,v10){
//     console.log(v1, v2, v3, v4,v5,v6,v7,v8,v9,v10)
// }
// abcd(1,2,3,4,5,6,7,8,9,10);

// function abcd1(v1,v2,v3,...numbers){
//     // ...number -- rest
//     console.log("reset",v1,v2,v3, numbers);
// }
// abcd1(1,2,3,4,5,6,7,8,9,10);

// function abcd3(...numbers){
//     // ...number -- rest
//     console.log("reset", numbers);
// }
// abcd3(1,2,3,4,5,6,7,8,9,10);

// return or early return
// function temp_fnc(){
//     if (10>9) return "true";
// }
// temp_fnc();

// first class function:
// function can be treated as variables
// let fnc1 = function () {} - function expression
// let fun2 = () => {} - arrow function

// const cart5 = function (product, price){
//     console.log(`adding ${product} at ${price}`);
// }
// cart5("function expression - S25 ultra",7896);

// const cart6 =  (product, price)=>{
//     console.log(`adding ${product} at ${price}`);
// }
// cart6("function expression - S25 ultra",7856696);

// function can be passed as arguments to other functions
// function temp_fnc2(params){
//     params(); // agrs function
// }
// temp_fnc2(()=>{
//     console.log("second function")
// }) // function agrs --> function

// function can be returned from other functions
// function temp_fnc3(){
//     return function fnc4(){
//         return "function 4";
//         // console.log("function 4");
//         // return "function can be returned from other function"
//     }
// }
// console.log(temp_fnc3()());

// higher order function (HOF)
// function that takes another function as an argument or returns a function as result (eva function 
// je return kare ek function athava acpect kare ek function params ma)

// function abcd(val){val();}
// --> abcd(function(){console.log("hello")})
// function abcd(val){} -->  higher order function

// function abcd(){ return function () {} } abcd()() --> higher order

// pure vs impure function
// pure function --> function je same input par same output aapse ane koi bahar na  state ne modify na kare
// (pure function --> je function bahar na state ne modify na kare)

// let temp_a = 20; // state
// function temp_change(){
//     return "hello";
// }// --> pure function
// console.log(temp_change());
// console.log("value of temp_a before change", temp_a);

// impure function --> function je same input par different output aapse athava bahar na state ne 
// modify kare (impure function --> je function bahar na state ne modify kare)
// function temp_change1(){
//     temp_a++;
// }// --> impure function
// temp_change1();
// console.log("value of temp_a before change", temp_a);
// temp_change1();
// console.log("value of temp_a before change", temp_a);
// temp_change1();
// console.log("value of temp_a before change", temp_a);

//closure function
//function je potana parent function na variables ne access kari shake(return thava valo function use karshe 
// parent function na koi variable ) (function within function)
// function outer(){
//     let outer_var = 50; // parent function variable
//     function inner(){
//         outer_var = outer_var+2;
//         console.log(outer_var); // child function console.log
//     }
//     return inner();   
// }
// outer();

// lexical scope --> nested function can access variable declared in thier outer scope
// function outer1(){
//     let var_outer= " outer function variable";
//     function innter1(){
//         let var_inner= "inner function variable";
//         console.log(var_outer);
//               function most_inner(){
//                 console.log("most inner function",var_outer);
//                 console.log("most inner function",var_inner);
//                     function most_most_inner(){
//                           console.log("most most inner function",var_outer);
//                           console.log("most most inner function",var_inner);
//                     }
//                     most_most_inner();
//               }
//               most_inner();
//     }
//     innter1();
// }
// outer1();

// IIFE -Immediately invoked function expression
// ( function (){})(); // function je declare karta j call thai jaye) 

// (function temp_IIFE(){
//     console.log("IIFE function")
// })();

//hoisting in function
// temp_abc();
// function temp_abc(){
//     console.log("hoisited function")
// }// --- function decleration

// function expression
// hoistedFunction1(); // error: hoistedFunction1 is not function
// let hoistedFunction1 = function (){
//     console.log("hoisted Function")
// }

// arrow function
// hoistedFunction2(); // error: hoistedFunction1 is not function
// let hoistedFunction2 = () => {
//     console.log("hoisted ew Function")
// }


function num(total, value) {
  return total + value;
}
const result = num(5, 3);
console.log(result); // 8
